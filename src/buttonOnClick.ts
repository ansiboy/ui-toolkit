import { toast, confirm, ToastOptions } from "./dialog";

type ConfirmText = string | (() => string);
export type Callback = (event: MouseEvent) => Promise<any>;
export type ClickArguments = {
    confirm?: ConfirmText | { text: ConfirmText, container?: HTMLElement },
    toast?: string | (() => string),
    dialogContainer?: HTMLElement,
};

export function buttonOnClick(callback: Callback, args?: ClickArguments): (event: Event) => void;
export function buttonOnClick(element: HTMLButtonElement, callback: Callback, args?: ClickArguments);
export function buttonOnClick(arg1: any, arg2: any, arg3?: ClickArguments): (event: Event) => void {
    let element: HTMLButtonElement;
    let callback: Callback;
    let args: ClickArguments;
    if (typeof (arg1) == 'function') {
        callback = arg1;
        args = arg2;
    }
    else if (typeof (arg2) == 'function') {
        element = arg1;
        callback = arg2;
        args = arg3;
    }
    else {
        throw new Error("Arguments error");
    }

    args = args || {};
    let execute = async (event) => {
        let button = (event.currentTarget as HTMLButtonElement);
        button.setAttribute('disabled', '');
        try {
            await callback(event);
            if (args.toast) {
                let message = typeof args.toast == "string" ? args.toast : args.toast();
                // let toastOptions: ToastOptions = {

                // }
                toast(args.toast);
            }
        }
        catch (exc) {
            console.error(exc);
            throw exc;
        }
        finally {
            button.removeAttribute('disabled')
        }
    }

    let result = function (event: Event) {

        event.stopPropagation();
        event.cancelBubble = true;

        if (!args.confirm) {
            execute(event);
            return;
        }

        let confirmText: ConfirmText;
        let container: HTMLElement;

        if (typeof args.confirm == "object") {
            confirmText = args.confirm.text;
            container = args.confirm.container;
        }
        else {
            confirmText = args.confirm;
        }

        let text: string;
        if (confirmText) {
            text = typeof confirmText == "string" ? confirmText : confirmText();
        }


        confirm({
            message: text || "", confirm: (event) => execute(event),
            container: container
        });
    }
    if (element)
        element.onclick = result;

    return result;
}

