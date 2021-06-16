import { errors } from "./errors";


function dialogContainer(): HTMLElement {
    return dialogConfig.dialogContainer || document.body;
}

export let dialogConfig = {
    dialogContainer: null as HTMLElement
}

function addClassName(element: HTMLElement, className: string) {
    console.assert(className != null, 'class is null');
    let c1 = (element.className || '').split(/\s+/);
    let c2 = className.split(/\s+/);
    var itemsToAdd = c2.filter(o => c1.indexOf(o) < 0);
    c1.push(...itemsToAdd);

    element.className = c1.join(' ');
}


function removeClassName(element: HTMLElement, className: string) {
    console.assert(className != null, 'class is null');
    let c1 = (element.className || '').split(/\s+/);
    let c2 = className.split(/\s+/);
    var itemsRemain = c1.filter(o => c2.indexOf(o) < 0);

    element.className = itemsRemain.join(' ');
}

let dialogElements = new Array<HTMLElement>();
let dialogCallbacks = new Array<Function>();
/** 弹窗
 * @param element bootstrap 的 modal 元素
 */
export function showDialog(element: HTMLElement, callback?: (button: HTMLButtonElement) => void) {

    removeClassName(element, 'out');
    element.style.display = 'block';
    setTimeout(() => {
        addClassName(element, 'modal fade in');
    }, 100);

    let dialogIndex = dialogElements.indexOf(element);
    if (dialogIndex < 0) {
        dialogElements.push(element);
        dialogIndex = dialogElements.length - 1;

        let closeButtons = element.querySelectorAll('[data-dismiss="modal"]') || [];
        for (let i = 0; i < closeButtons.length; i++) {
            (closeButtons[i] as HTMLElement).onclick = () => hideDialog(element);
        }

        let allButtons = element.querySelectorAll('button');
        for (let i = 0; i < allButtons.length; i++) {
            allButtons.item(i).addEventListener('click', function (event) {
                let callback = dialogCallbacks[dialogIndex];
                if (callback) {
                    callback(event.currentTarget as HTMLButtonElement);
                }
            })
        }
    }

    dialogCallbacks[dialogIndex] = callback;
    element.tabIndex = 1;
    var firstField: HTMLElement = element.querySelector('input:not([type]),input:not([readonly])[type="text"],input:not([readonly])[type="password"]');
    if (firstField) {
        firstField.focus();
    }
    else {
        element.focus();
    }
    element.addEventListener('keydown', on_keydown);
}

export function hideDialog(element: HTMLElement) {

    removeClassName(element, 'in');
    addClassName(element, 'modal fade out');
    element.removeEventListener('keydown', on_keydown);

    return new Promise((reslove, reject) => {
        setTimeout(() => {
            element.style.removeProperty('display');
            reslove({});
        }, 1000);
    });
}

function on_keydown(event: KeyboardEvent) {
    const KEY_CODE_ESC = 27;
    if (event.keyCode == KEY_CODE_ESC) {
        let dialogElement = findDialogElement(event.target as HTMLElement);
        console.assert(dialogElement != null);
        if (dialogElement.getAttribute('data-keyboard') == 'false')
            return

        hideDialog(dialogElement);
    }
}

function findDialogElement(e: HTMLElement) {
    while (e) {
        let names = e.className.split(' ').filter(o => o);
        if (names.indexOf('modal') >= 0)
            return e;

        e = e.parentElement;
    }
}


export const alertElementId = "UiToolkitAlertId";


function getAlertElement() {
    let alertElement = document.getElementById(alertElementId);
    if (alertElement == null) {
        alertElement = document.createElement('div');
        alertElement.className = 'modal fade';
        alertElement.id = alertElementId;
        dialogContainer().appendChild(alertElement);
        alertElement.innerHTML = `
            <div class="modal-dialog">
                
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                        </button>
                        <h4 class="modal-title"></h4>
                    </div>
                    <div class="modal-body">
                        <h5></h5>
                    </div>
                    <div class="modal-footer">
                        <button name="ok" type="button" class="btn btn-primary">
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    return alertElement;
}


export function alert(args: string | {
    title: string, message: string,
    confirmText?: string
}) {


    if (typeof args == 'string') {
        args = { title: '&nbsp;', message: args }
    }

    let alertElement = getAlertElement();
    showDialog(alertElement);

    let titleElement = alertElement.querySelector('.modal-title');
    titleElement.innerHTML = args.title;

    let bodyElement = alertElement.querySelector('.modal-body');
    bodyElement.innerHTML = args.message;

    let modalFooter = alertElement.querySelector('.modal-footer');

    let okButton = modalFooter.querySelector('[name="ok"]') as HTMLButtonElement;
    okButton.innerHTML = args.confirmText || "确定";
    okButton.onclick = () => hideDialog(alertElement);

}

export const confirmElementId = "UiToolkitConfirmId";
export function confirm(args: {
    title?: string, message: string, cancle?: () => Promise<any>,
    confirm: (event: Event) => Promise<any>,
    container?: HTMLElement,
    confirmText?: string,
    cancelText?: string
}) {
    let title: string;
    let message: string;
    let execute = args.confirm;
    let cancel = args.cancle || (() => Promise.resolve());
    let container = args.container || document.body;
    let confirmText = args.confirmText || '确定'
    let cancelText = args.cancelText || '取消'
    if (typeof args == 'string') {
        message = args;
    }
    else {
        title = args.title;
        message = args.message;
    }

    let confirmDialogElment = getConfirmDialogElment();
    let cancelElement = confirmDialogElment.querySelector('[name="cancel"]');
    cancelElement.innerHTML = cancelText;

    let okElement = confirmDialogElment.querySelector('[name="ok"]');
    okElement.innerHTML = confirmText;

    let modalHeader = confirmDialogElment.querySelector('.modal-header');
    let modalBody = confirmDialogElment.querySelector('.modal-body');
    let modalFooter = confirmDialogElment.querySelector('.modal-footer');



    modalBody.innerHTML = `<h5>${message}</h5>`;
    if (title) {
        modalHeader.querySelector('h4').innerHTML = title;
    }

    let cancelButton = modalFooter.querySelector('[name="cancel"]') as HTMLButtonElement;
    let okButton = modalFooter.querySelector('[name="ok"]') as HTMLButtonElement;
    let closeButton = modalHeader.querySelector('.close') as HTMLElement;

    closeButton.onclick = cancelButton.onclick = function () {
        cancel()
            .then(() => hideDialog(confirmDialogElment))
            .then(() => {
                confirmDialogElment.style.display = "none";
            })
    }

    okButton.onclick = function (event) {
        execute(event)
            .then(() => hideDialog(confirmDialogElment))
            .then(() => {
                confirmDialogElment.style.display = "none";
            })
            .catch(() => hideDialog(confirmDialogElment));
    }

    showDialog(confirmDialogElment);
}

function getConfirmDialogElment() {
    let confirmDialogElment: HTMLElement = document.getElementById(confirmElementId);
    if (confirmDialogElment == null) {
        confirmDialogElment = document.createElement('div');
        confirmDialogElment.id = confirmElementId;
        confirmDialogElment.className = 'modal fade';
        confirmDialogElment.style.marginTop = '20px'
        console.assert(dialogContainer != null, 'dialog container is null');
        //confirmDialogElment.style.display="none";
        confirmDialogElment.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                    </button>
                    <h4 class="modal-title">确认</h4>
                </div>
                <div class="modal-body form-horizontal">
                   
                </div>
                <div class="modal-footer">
                    <button name="cancel" type="button" class="btn btn-default">
           
                    </button>
                    <button name="ok" type="button" class="btn btn-primary">
        
                    </button>
                </div>
            </div>
        </div>
    `;

        dialogContainer().appendChild(confirmDialogElment);
    }

    return confirmDialogElment;
}

type ToastOptions = { title?: string, message: string }
type ToastMessage = string | HTMLElement | (() => string)
export let showToastMessage = toast;
export function toast(options: ToastOptions)
export function toast(msg: ToastMessage)
export function toast(obj: ToastOptions | ToastMessage) {
    if (obj == null) throw errors.argumentNull('obj')
    let msg: ToastMessage
    let title: string
    if (typeof obj == 'object') {
        if ((obj as HTMLElement).tagName == null) {
            let options = obj as ToastOptions
            msg = options.message
            title = options.title
        }
        else {
            msg = obj as HTMLElement
        }
    }
    else {
        msg = obj
    }

    let dialogContainer: HTMLElement = dialogConfig.dialogContainer || document.body;
    let toastDialogElement = document.createElement('div');
    toastDialogElement.className = 'modal fade in';
    toastDialogElement.style.marginTop = '20px';
    console.assert(dialogContainer != null, 'dialog container is null.');
    dialogContainer.appendChild(toastDialogElement);

    let header = title ? `<div class="modal-header">
                                    <h4 class="modal-title">${title}</h4>
                               </div>`: ''
    toastDialogElement.innerHTML = `
                        <div class="modal-dialog">
                            <div class="modal-content">
                                ${header}
                                <div class="modal-body form-horizontal">
                                </div>
                            </div>
                        </div>
                    `;
    let modalBody = toastDialogElement.querySelector('.modal-body');
    console.assert(modalBody != null);
    if (typeof msg == 'string') {
        modalBody.innerHTML = `<h5>${msg}</h5>`;
    }
    else if (typeof msg == 'function') {
        modalBody.innerHTML = `<h5>${msg()}</h5>`;
    }
    else
        modalBody.appendChild(msg);

    // let dialog = new Dialog(toastDialogElement);
    // dialog.show();
    showDialog(toastDialogElement);
    setTimeout(() => {
        hideDialog(toastDialogElement).then(() => {
            toastDialogElement.remove();
        });
    }, 500);
}


