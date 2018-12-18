namespace ui {
    export type Callback = (event: MouseEvent) => Promise<any>;
    export type Arguments = { confirm?: string | (() => string), toast?: string | HTMLElement };

    export function buttonOnClick(callback: Callback, args?: Arguments): (event: Event) => void;
    export function buttonOnClick(element: HTMLButtonElement, callback: Callback, args?: Arguments);
    export function buttonOnClick(arg1: any, arg2: any, arg3?: Arguments): (event: Event) => void {
        let element: HTMLButtonElement;
        let callback: Callback;
        let args: Arguments;
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

            let text = typeof args.confirm == 'string' ?
                args.confirm :
                args.confirm();
            ui.confirm({ message: text, confirm: (event) => execute(event) });
        }
        if (element)
            element.onclick = result;

        return result;
    }


}