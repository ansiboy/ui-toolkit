
/*
 * maishu-ui-toolkit v1.2.2
 * git+https://github.com/ansiboy/ui-toolkit.git
 *
 * Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 * Licensed under the MIT License.
 *
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.maishuUiToolkit = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dialog_1 = require("./dialog");
function buttonOnClick(arg1, arg2, arg3) {
    let element;
    let callback;
    let args;
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
    let execute = (event) => __awaiter(this, void 0, void 0, function* () {
        let button = event.currentTarget;
        button.setAttribute('disabled', '');
        try {
            yield callback(event);
            if (args.toast) {
                dialog_1.toast(args.toast);
            }
        }
        catch (exc) {
            console.error(exc);
            throw exc;
        }
        finally {
            button.removeAttribute('disabled');
        }
    });
    let result = function (event) {
        event.stopPropagation();
        event.cancelBubble = true;
        if (!args.confirm) {
            execute(event);
            return;
        }
        let text = typeof args.confirm == 'string' ?
            args.confirm :
            args.confirm();
        dialog_1.confirm({ message: text, confirm: (event) => execute(event) });
    };
    if (element)
        element.onclick = result;
    return result;
}
exports.buttonOnClick = buttonOnClick;

},{"./dialog":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
function dialogContainer() {
    return exports.dialogConfig.dialogContainer || document.body;
}
exports.dialogConfig = {
    dialogContainer: null
};
function addClassName(element, className) {
    console.assert(className != null, 'class is null');
    let c1 = (element.className || '').split(/\s+/);
    let c2 = className.split(/\s+/);
    var itemsToAdd = c2.filter(o => c1.indexOf(o) < 0);
    c1.push(...itemsToAdd);
    element.className = c1.join(' ');
}
function removeClassName(element, className) {
    console.assert(className != null, 'class is null');
    let c1 = (element.className || '').split(/\s+/);
    let c2 = className.split(/\s+/);
    var itemsRemain = c1.filter(o => c2.indexOf(o) < 0);
    element.className = itemsRemain.join(' ');
}
let dialogElements = new Array();
let dialogCallbacks = new Array();
/** 弹窗
 * @param element bootstrap 的 modal 元素
 */
function showDialog(element, callback) {
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
            closeButtons[i].onclick = () => hideDialog(element);
        }
        let allButtons = element.querySelectorAll('button');
        for (let i = 0; i < allButtons.length; i++) {
            allButtons.item(i).addEventListener('click', function (event) {
                let callback = dialogCallbacks[dialogIndex];
                if (callback) {
                    callback(event.currentTarget);
                }
            });
        }
    }
    dialogCallbacks[dialogIndex] = callback;
    element.tabIndex = 1;
    var firstField = element.querySelector('input:not([type]),input:not([readonly])[type="text"],input:not([readonly])[type="password"]');
    if (firstField) {
        firstField.focus();
    }
    else {
        element.focus();
    }
    element.addEventListener('keydown', on_keydown);
}
exports.showDialog = showDialog;
function hideDialog(element) {
    removeClassName(element, 'in');
    addClassName(element, 'modal fade out');
    element.removeEventListener('keydown', on_keydown);
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            element.style.removeProperty('display');
            reslove();
        }, 1000);
    });
}
exports.hideDialog = hideDialog;
function on_keydown(event) {
    const KEY_CODE_ESC = 27;
    if (event.keyCode == KEY_CODE_ESC) {
        let dialogElement = findDialogElement(event.target);
        console.assert(dialogElement != null);
        if (dialogElement.getAttribute('data-keyboard') == 'false')
            return;
        hideDialog(dialogElement);
    }
}
function findDialogElement(e) {
    while (e) {
        let names = e.className.split(' ').filter(o => o);
        if (names.indexOf('modal') >= 0)
            return e;
        e = e.parentElement;
    }
}
function alert(args) {
    let element = document.createElement('div');
    dialogContainer().appendChild(element);
    if (typeof args == 'string') {
        args = { title: '&nbsp;', message: args };
    }
    element.innerHTML = `
            <div class="modal-dialog">
                
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                        </button>
                        <h4 class="modal-title">${args.title}</h4>
                    </div>
                    <div class="modal-body">
                        <h5>${args.message}</h5>
                    </div>
                    <div class="modal-footer">
                        <button name="ok" type="button" class="btn btn-primary">
                            确定
                        </button>
                    </div>
                </div>
            </div>
        `;
    // $(element).modal();
    // $(element).on('hidden.bs.modal', () => {
    //     $(element).remove();
    // });
    // var dialog = new Dialog(element);
    // dialog.show();
    showDialog(element);
    let titleElement = element.querySelector('.modal-title');
    let modalFooter = element.querySelector('.modal-footer');
    let cancelButton = modalFooter.querySelector('[name="cancel"]');
    let okButton = modalFooter.querySelector('[name="ok"]');
    okButton.onclick = () => hideDialog(element); //dialog.hide()
}
exports.alert = alert;
function confirm(args) {
    let title;
    let message;
    let execute = args.confirm;
    let cancel = args.cancle || (() => Promise.resolve());
    let container = args.container || document.body;
    let confirmText = args.confirmText || '确定';
    let cancelText = args.cancelText || '取消';
    if (typeof args == 'string') {
        message = args;
    }
    else {
        title = args.title;
        message = args.message;
    }
    let confirmDialogElment;
    confirmDialogElment = document.createElement('div');
    confirmDialogElment.className = 'modal fade';
    confirmDialogElment.style.marginTop = '20px';
    console.assert(dialogContainer != null, 'dialog container is null');
    dialogContainer().appendChild(confirmDialogElment);
    confirmDialogElment.innerHTML = `
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">
                                    <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                                </button>
                                <h4 class="modal-title">确认</h4>
                            </div>
                            <div class="modal-body form-horizontal">
                               
                            </div>
                            <div class="modal-footer">
                                <button name="cancel" type="button" class="btn btn-default">
                                    ${cancelText}
                                </button>
                                <button name="ok" type="button" class="btn btn-primary">
                                    ${confirmText}
                                </button>
                            </div>
                        </div>
                    </div>
                `;
    let modalHeader = confirmDialogElment.querySelector('.modal-header');
    let modalBody = confirmDialogElment.querySelector('.modal-body');
    let modalFooter = confirmDialogElment.querySelector('.modal-footer');
    modalBody.innerHTML = `<h5>${message}</h5>`;
    if (title) {
        modalHeader.querySelector('h4').innerHTML = title;
    }
    let cancelButton = modalFooter.querySelector('[name="cancel"]');
    let okButton = modalFooter.querySelector('[name="ok"]');
    let closeButton = modalHeader.querySelector('.close');
    closeButton.onclick = cancelButton.onclick = function () {
        cancel()
            .then(() => hideDialog(confirmDialogElment))
            .then(() => {
            confirmDialogElment.remove();
        });
    };
    okButton.onclick = function (event) {
        execute(event)
            .then(() => hideDialog(confirmDialogElment))
            .then(() => {
            confirmDialogElment.remove();
        });
    };
    showDialog(confirmDialogElment);
}
exports.confirm = confirm;
exports.showToastMessage = toast;
function toast(obj) {
    if (obj == null)
        throw errors_1.errors.argumentNull('obj');
    let msg;
    let title;
    if (typeof obj == 'object') {
        if (obj.tagName == null) {
            let options = obj;
            msg = options.message;
            title = options.title;
        }
        else {
            msg = obj;
        }
    }
    else {
        msg = obj;
    }
    let dialogContainer = exports.dialogConfig.dialogContainer || document.body;
    let toastDialogElement = document.createElement('div');
    toastDialogElement.className = 'modal fade in';
    toastDialogElement.style.marginTop = '20px';
    console.assert(dialogContainer != null, 'dialog container is null.');
    dialogContainer.appendChild(toastDialogElement);
    let header = title ? `<div class="modal-header">
                                    <h4 class="modal-title">${title}</h4>
                               </div>` : '';
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
exports.toast = toast;
exports.showPanel = (function () {
    let panel = document.createElement('div');
    panel.className = 'mobile-page panel';
    panel.style.display = 'none';
    document.body.appendChild(panel);
    panel.innerHTML = `
            <div class="modal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
    
                        </div>
                        <div class="modal-body">
    
                        </div>
                        <div class="modal-footer">
    
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop in">
            </div>
        `;
    let modal = panel.querySelector('.modal');
    let backdrop = panel.querySelector('.modal-backdrop');
    let header = panel.querySelector('.modal-header');
    let footer = panel.querySelector('.modal-footer');
    let body = panel.querySelector(".modal-body");
    let modalDialog = panel.querySelector(".modal-dialog");
    let isIOS = navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0;
    //=====================================================================
    // 点击非窗口区域，关窗口。并禁用上级元素的 touch 操作。
    // let panel = this.panel; //this.refs['panel'] as HTMLElement;
    // let modalDialog = this.modalDialog; //this.refs['modalDialog'] as HTMLElement;
    panel.addEventListener('touchstart', (event) => {
        let dialogRect = modalDialog.getBoundingClientRect();
        for (let i = 0; i < event.touches.length; i++) {
            let { clientX } = event.touches[i];
            if (clientX < dialogRect.left) {
                hide();
                return;
            }
        }
    });
    if (isIOS) {
        panel.addEventListener('touchstart', (event) => {
            let tagName = event.target.tagName;
            if (tagName == 'BUTTON' || tagName == 'INPUT' || tagName == 'A') {
                return;
            }
            event.stopPropagation();
            event.preventDefault();
        });
    }
    function hide() {
        modal.style.removeProperty('transform');
        backdrop.style.opacity = '0';
        window.setTimeout(() => {
            panel.style.display = 'none';
        }, 500);
    }
    return function showPanel(args) {
        args = args || {};
        panel.style.display = 'block';
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.transform = 'translateX(0)';
            backdrop.style.opacity = '0.5';
        }, 50);
        let setBodyHeight = () => {
            let headerHeight = header.getBoundingClientRect().height;
            let footerHeight = footer.getBoundingClientRect().height;
            let bodyHeight = window.innerHeight - headerHeight - footerHeight;
            body.style.height = `${bodyHeight}px`;
        };
        window.addEventListener('resize', () => setBodyHeight());
        setBodyHeight();
        if (args.header)
            args.header(header);
        if (args.body)
            args.body(body);
        if (args.footer)
            args.footer(footer);
        return {
            hide: () => hide()
        };
    };
})();

},{"./errors":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = {
    argumentNull(paramName) {
        let msg = `Argumnet ${paramName} can not be null or empty.`;
        let error = new Error();
        error.message = msg;
        return error;
    }
};

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
exports.loadImageConfig = {
    /** 图片显示的文字 */
    imageDisaplyText: '',
};
let config = exports.loadImageConfig;
let draws = {
    text: (imageText, options) => {
        return (ctx, canvasWidth, canvasHeight) => {
            // let fontSize1 = Math.floor(canvasHeight / 3 * 0.8);
            let fontSize = Math.floor((canvasWidth / imageText.length) * 0.6);
            let bgColor = 'whitesmoke';
            let textColor = '#999';
            // let fontSize = Math.min(fontSize1, fontSize2);
            options = Object.assign({
                fontSize,
                bgColor,
                textColor
            }, options);
            ctx.fillStyle = options.bgColor; //'whitesmoke';
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            // 设置字体
            ctx.font = `Bold ${options.fontSize}px Arial`;
            // 设置对齐方式
            ctx.textAlign = "left";
            // 设置填充颜色
            ctx.fillStyle = options.textColor; //"#999";
            let textWidth = fontSize * imageText.length;
            let startX = Math.floor((canvasWidth - textWidth) * 0.5);
            let startY = Math.floor((canvasHeight - options.fontSize) * 0.3);
            // 设置字体内容，以及在画布上的位置
            ctx.fillText(imageText, startX, Math.floor(canvasHeight * 0.6));
        };
    }
};
function generateImageBase64(width, height, obj, options) {
    var canvas = document.createElement('canvas');
    canvas.width = width; //img_width;
    canvas.height = height; //img_height;
    var ctx = canvas.getContext('2d');
    let draw = typeof obj == 'string' ? draws.text(obj, options) : obj;
    draw(ctx, width, height);
    return canvas.toDataURL();
}
exports.generateImageBase64 = generateImageBase64;
const PREVIEW_IMAGE_DEFAULT_WIDTH = 200;
const PREVIEW_IMAGE_DEFAULT_HEIGHT = 200;
/**
 * 在 IMG 元素上渲染图片
 * @param element 要渲染的 IMG 元素
 * @param options 渲染选项，默认将 IMG 元素的 SRC 属性渲染出来
 */
function renderImage(element, options) {
    options = options || {};
    if (!element)
        throw errors_1.errors.argumentNull('element');
    let imageUrl = element.src || '';
    if (imageUrl.indexOf('data:image/png;base64') == 0 || element['rendered']) {
        return;
    }
    element.title = imageUrl;
    //====================================================
    // 通过 URL 设置图片大小
    if (imageUrl && !options.imageSize) {
        var match = imageUrl.match(/_\d+_\d+/);
        if (match && match.length > 0) {
            var arr = match[0].split('_');
            if (arr.length >= 2) {
                var width = new Number(arr[1]).valueOf();
                var height = new Number(arr[2]).valueOf();
                options.imageSize = { width, height };
            }
        }
    }
    //====================================================
    options.imageSize = options.imageSize || { width: PREVIEW_IMAGE_DEFAULT_WIDTH, height: PREVIEW_IMAGE_DEFAULT_HEIGHT };
    //====================================================
    if (!options.imageText) {
        options.imageText = element.title || '';
        ;
    }
    let s = options.imageSize;
    //设置默认的图片
    var src_replace = generateImageBase64(s.width, s.height, draws.text(options.imageText || config.imageDisaplyText)); //getPreviewImage(imageText || config.imageDisaplyText, img_width, img_height);
    element.setAttribute('src', src_replace);
    return new Promise((resolve, reject) => {
        if (options.loadImage) {
            options.loadImage()
                .then(base64 => base64 ? Promise.resolve(base64) : Promise.reject({}))
                .catch(() => {
                let base64 = generateImageBase64(s.width, s.height, draws.text('加载图片失败', { fontSize: 24 }));
                return Promise.resolve(base64);
            })
                .then((base64) => {
                element.src = base64;
                element['rendered'] = true;
            });
        }
        else {
            var image = new Image();
            image.onload = function () {
                element.src = this.src;
                element['rendered'] = true;
                resolve(element.src);
            };
            image.src = imageUrl;
        }
    });
}
exports.renderImage = renderImage;
function imageFileToBase64(imageFile, size) {
    if (!imageFile)
        throw errors_1.errors.argumentNull('imageFile');
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsArrayBuffer(imageFile);
        reader.onload = (ev) => {
            var blob = new Blob([event.target['result']]);
            window['URL'] = window['URL'] || window['webkitURL'];
            var blobURL = window['URL'].createObjectURL(blob);
            var image = new Image();
            image.src = blobURL;
            image.onload = () => {
                var canvas = document.createElement('canvas');
                size = size || {};
                let width = size.width != null && size.width < image.width ? size.width : image.width;
                let height = size.height != null && size.height < image.height ? size.height : image.height;
                if (width != null && height == null) {
                    height = width / image.width * image.height;
                }
                else if (width == null && height != null) {
                    width = height / image.height * image.width;
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0, width, height);
                let data = canvas.toDataURL("image/jpeg", 0.5);
                resolve({ base64: data, width, height });
            };
        };
    });
}
exports.imageFileToBase64 = imageFileToBase64;
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = function () {
            resolve(reader.result.toString());
        };
        reader.onerror = function () {
            reject(reader.error);
        };
        reader.readAsDataURL(file);
    });
}
exports.fileToBase64 = fileToBase64;

},{"./errors":3}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buttonOnClick_1 = require("./buttonOnClick");
exports.buttonOnClick = buttonOnClick_1.buttonOnClick;
var dialog_1 = require("./dialog");
exports.showDialog = dialog_1.showDialog;
exports.hideDialog = dialog_1.hideDialog;
exports.toast = dialog_1.toast;
exports.alert = dialog_1.alert;
exports.confirm = dialog_1.confirm;
exports.dialogConfig = dialog_1.dialogConfig;
var image_1 = require("./image");
exports.generateImageBase64 = image_1.generateImageBase64;
exports.renderImage = image_1.renderImage;
exports.loadImageConfig = image_1.loadImageConfig;
exports.imageFileToBase64 = image_1.imageFileToBase64;
exports.fileToBase64 = image_1.fileToBase64;

},{"./buttonOnClick":1,"./dialog":2,"./image":4}]},{},[5])(5)
});
