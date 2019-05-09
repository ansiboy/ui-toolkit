/*!
 * 
 *  maishu-ui-toolkit v1.2.4
 *  git+https://github.com/ansiboy/ui-toolkit.git
 *  
 *  Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 *  Licensed under the MIT License.
 * 
 */
define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out/buttonOnClick.js":
/*!******************************!*\
  !*** ./out/buttonOnClick.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst dialog_1 = __webpack_require__(/*! ./dialog */ \"./out/dialog.js\");\r\nfunction buttonOnClick(arg1, arg2, arg3) {\r\n    let element;\r\n    let callback;\r\n    let args;\r\n    if (typeof (arg1) == 'function') {\r\n        callback = arg1;\r\n        args = arg2;\r\n    }\r\n    else if (typeof (arg2) == 'function') {\r\n        element = arg1;\r\n        callback = arg2;\r\n        args = arg3;\r\n    }\r\n    else {\r\n        throw new Error(\"Arguments error\");\r\n    }\r\n    args = args || {};\r\n    let execute = (event) => __awaiter(this, void 0, void 0, function* () {\r\n        let button = event.currentTarget;\r\n        button.setAttribute('disabled', '');\r\n        try {\r\n            yield callback(event);\r\n            if (args.toast) {\r\n                dialog_1.toast(args.toast);\r\n            }\r\n        }\r\n        catch (exc) {\r\n            console.error(exc);\r\n            throw exc;\r\n        }\r\n        finally {\r\n            button.removeAttribute('disabled');\r\n        }\r\n    });\r\n    let result = function (event) {\r\n        event.stopPropagation();\r\n        event.cancelBubble = true;\r\n        if (!args.confirm) {\r\n            execute(event);\r\n            return;\r\n        }\r\n        let text = typeof args.confirm == 'string' ?\r\n            args.confirm :\r\n            args.confirm();\r\n        dialog_1.confirm({ message: text, confirm: (event) => execute(event) });\r\n    };\r\n    if (element)\r\n        element.onclick = result;\r\n    return result;\r\n}\r\nexports.buttonOnClick = buttonOnClick;\r\n\n\n//# sourceURL=webpack:///./out/buttonOnClick.js?");

/***/ }),

/***/ "./out/dialog.js":
/*!***********************!*\
  !*** ./out/dialog.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst errors_1 = __webpack_require__(/*! ./errors */ \"./out/errors.js\");\r\nfunction dialogContainer() {\r\n    return exports.dialogConfig.dialogContainer || document.body;\r\n}\r\nexports.dialogConfig = {\r\n    dialogContainer: null\r\n};\r\nfunction addClassName(element, className) {\r\n    console.assert(className != null, 'class is null');\r\n    let c1 = (element.className || '').split(/\\s+/);\r\n    let c2 = className.split(/\\s+/);\r\n    var itemsToAdd = c2.filter(o => c1.indexOf(o) < 0);\r\n    c1.push(...itemsToAdd);\r\n    element.className = c1.join(' ');\r\n}\r\nfunction removeClassName(element, className) {\r\n    console.assert(className != null, 'class is null');\r\n    let c1 = (element.className || '').split(/\\s+/);\r\n    let c2 = className.split(/\\s+/);\r\n    var itemsRemain = c1.filter(o => c2.indexOf(o) < 0);\r\n    element.className = itemsRemain.join(' ');\r\n}\r\nlet dialogElements = new Array();\r\nlet dialogCallbacks = new Array();\r\n/** 弹窗\r\n * @param element bootstrap 的 modal 元素\r\n */\r\nfunction showDialog(element, callback) {\r\n    removeClassName(element, 'out');\r\n    element.style.display = 'block';\r\n    setTimeout(() => {\r\n        addClassName(element, 'modal fade in');\r\n    }, 100);\r\n    let dialogIndex = dialogElements.indexOf(element);\r\n    if (dialogIndex < 0) {\r\n        dialogElements.push(element);\r\n        dialogIndex = dialogElements.length - 1;\r\n        let closeButtons = element.querySelectorAll('[data-dismiss=\"modal\"]') || [];\r\n        for (let i = 0; i < closeButtons.length; i++) {\r\n            closeButtons[i].onclick = () => hideDialog(element);\r\n        }\r\n        let allButtons = element.querySelectorAll('button');\r\n        for (let i = 0; i < allButtons.length; i++) {\r\n            allButtons.item(i).addEventListener('click', function (event) {\r\n                let callback = dialogCallbacks[dialogIndex];\r\n                if (callback) {\r\n                    callback(event.currentTarget);\r\n                }\r\n            });\r\n        }\r\n    }\r\n    dialogCallbacks[dialogIndex] = callback;\r\n    element.tabIndex = 1;\r\n    var firstField = element.querySelector('input:not([type]),input:not([readonly])[type=\"text\"],input:not([readonly])[type=\"password\"]');\r\n    if (firstField) {\r\n        firstField.focus();\r\n    }\r\n    else {\r\n        element.focus();\r\n    }\r\n    element.addEventListener('keydown', on_keydown);\r\n}\r\nexports.showDialog = showDialog;\r\nfunction hideDialog(element) {\r\n    removeClassName(element, 'in');\r\n    addClassName(element, 'modal fade out');\r\n    element.removeEventListener('keydown', on_keydown);\r\n    return new Promise((reslove, reject) => {\r\n        setTimeout(() => {\r\n            element.style.removeProperty('display');\r\n            reslove();\r\n        }, 1000);\r\n    });\r\n}\r\nexports.hideDialog = hideDialog;\r\nfunction on_keydown(event) {\r\n    const KEY_CODE_ESC = 27;\r\n    if (event.keyCode == KEY_CODE_ESC) {\r\n        let dialogElement = findDialogElement(event.target);\r\n        console.assert(dialogElement != null);\r\n        if (dialogElement.getAttribute('data-keyboard') == 'false')\r\n            return;\r\n        hideDialog(dialogElement);\r\n    }\r\n}\r\nfunction findDialogElement(e) {\r\n    while (e) {\r\n        let names = e.className.split(' ').filter(o => o);\r\n        if (names.indexOf('modal') >= 0)\r\n            return e;\r\n        e = e.parentElement;\r\n    }\r\n}\r\nfunction alert(args) {\r\n    let element = document.createElement('div');\r\n    dialogContainer().appendChild(element);\r\n    if (typeof args == 'string') {\r\n        args = { title: '&nbsp;', message: args };\r\n    }\r\n    element.innerHTML = `\r\n            <div class=\"modal-dialog\">\r\n                \r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                            <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\r\n                        </button>\r\n                        <h4 class=\"modal-title\">${args.title}</h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <h5>${args.message}</h5>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button name=\"ok\" type=\"button\" class=\"btn btn-primary\">\r\n                            确定\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        `;\r\n    // $(element).modal();\r\n    // $(element).on('hidden.bs.modal', () => {\r\n    //     $(element).remove();\r\n    // });\r\n    // var dialog = new Dialog(element);\r\n    // dialog.show();\r\n    showDialog(element);\r\n    let titleElement = element.querySelector('.modal-title');\r\n    let modalFooter = element.querySelector('.modal-footer');\r\n    let cancelButton = modalFooter.querySelector('[name=\"cancel\"]');\r\n    let okButton = modalFooter.querySelector('[name=\"ok\"]');\r\n    okButton.onclick = () => hideDialog(element); //dialog.hide()\r\n}\r\nexports.alert = alert;\r\nfunction confirm(args) {\r\n    let title;\r\n    let message;\r\n    let execute = args.confirm;\r\n    let cancel = args.cancle || (() => Promise.resolve());\r\n    let container = args.container || document.body;\r\n    let confirmText = args.confirmText || '确定';\r\n    let cancelText = args.cancelText || '取消';\r\n    if (typeof args == 'string') {\r\n        message = args;\r\n    }\r\n    else {\r\n        title = args.title;\r\n        message = args.message;\r\n    }\r\n    let confirmDialogElment;\r\n    confirmDialogElment = document.createElement('div');\r\n    confirmDialogElment.className = 'modal fade';\r\n    confirmDialogElment.style.marginTop = '20px';\r\n    console.assert(dialogContainer != null, 'dialog container is null');\r\n    dialogContainer().appendChild(confirmDialogElment);\r\n    confirmDialogElment.innerHTML = `\r\n                    <div class=\"modal-dialog\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                                    <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\r\n                                </button>\r\n                                <h4 class=\"modal-title\">确认</h4>\r\n                            </div>\r\n                            <div class=\"modal-body form-horizontal\">\r\n                               \r\n                            </div>\r\n                            <div class=\"modal-footer\">\r\n                                <button name=\"cancel\" type=\"button\" class=\"btn btn-default\">\r\n                                    ${cancelText}\r\n                                </button>\r\n                                <button name=\"ok\" type=\"button\" class=\"btn btn-primary\">\r\n                                    ${confirmText}\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                `;\r\n    let modalHeader = confirmDialogElment.querySelector('.modal-header');\r\n    let modalBody = confirmDialogElment.querySelector('.modal-body');\r\n    let modalFooter = confirmDialogElment.querySelector('.modal-footer');\r\n    modalBody.innerHTML = `<h5>${message}</h5>`;\r\n    if (title) {\r\n        modalHeader.querySelector('h4').innerHTML = title;\r\n    }\r\n    let cancelButton = modalFooter.querySelector('[name=\"cancel\"]');\r\n    let okButton = modalFooter.querySelector('[name=\"ok\"]');\r\n    let closeButton = modalHeader.querySelector('.close');\r\n    closeButton.onclick = cancelButton.onclick = function () {\r\n        cancel()\r\n            .then(() => hideDialog(confirmDialogElment))\r\n            .then(() => {\r\n            confirmDialogElment.remove();\r\n        });\r\n    };\r\n    okButton.onclick = function (event) {\r\n        execute(event)\r\n            .then(() => hideDialog(confirmDialogElment))\r\n            .then(() => {\r\n            confirmDialogElment.remove();\r\n        });\r\n    };\r\n    showDialog(confirmDialogElment);\r\n}\r\nexports.confirm = confirm;\r\nexports.showToastMessage = toast;\r\nfunction toast(obj) {\r\n    if (obj == null)\r\n        throw errors_1.errors.argumentNull('obj');\r\n    let msg;\r\n    let title;\r\n    if (typeof obj == 'object') {\r\n        if (obj.tagName == null) {\r\n            let options = obj;\r\n            msg = options.message;\r\n            title = options.title;\r\n        }\r\n        else {\r\n            msg = obj;\r\n        }\r\n    }\r\n    else {\r\n        msg = obj;\r\n    }\r\n    let dialogContainer = exports.dialogConfig.dialogContainer || document.body;\r\n    let toastDialogElement = document.createElement('div');\r\n    toastDialogElement.className = 'modal fade in';\r\n    toastDialogElement.style.marginTop = '20px';\r\n    console.assert(dialogContainer != null, 'dialog container is null.');\r\n    dialogContainer.appendChild(toastDialogElement);\r\n    let header = title ? `<div class=\"modal-header\">\r\n                                    <h4 class=\"modal-title\">${title}</h4>\r\n                               </div>` : '';\r\n    toastDialogElement.innerHTML = `\r\n                        <div class=\"modal-dialog\">\r\n                            <div class=\"modal-content\">\r\n                                ${header}\r\n                                <div class=\"modal-body form-horizontal\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    `;\r\n    let modalBody = toastDialogElement.querySelector('.modal-body');\r\n    console.assert(modalBody != null);\r\n    if (typeof msg == 'string') {\r\n        modalBody.innerHTML = `<h5>${msg}</h5>`;\r\n    }\r\n    else if (typeof msg == 'function') {\r\n        modalBody.innerHTML = `<h5>${msg()}</h5>`;\r\n    }\r\n    else\r\n        modalBody.appendChild(msg);\r\n    // let dialog = new Dialog(toastDialogElement);\r\n    // dialog.show();\r\n    showDialog(toastDialogElement);\r\n    setTimeout(() => {\r\n        hideDialog(toastDialogElement).then(() => {\r\n            toastDialogElement.remove();\r\n        });\r\n    }, 500);\r\n}\r\nexports.toast = toast;\r\nexports.showPanel = (function () {\r\n    let panel = document.createElement('div');\r\n    panel.className = 'mobile-page panel';\r\n    panel.style.display = 'none';\r\n    document.body.appendChild(panel);\r\n    panel.innerHTML = `\r\n            <div class=\"modal\">\r\n                <div class=\"modal-dialog\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n    \r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n    \r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n    \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-backdrop in\">\r\n            </div>\r\n        `;\r\n    let modal = panel.querySelector('.modal');\r\n    let backdrop = panel.querySelector('.modal-backdrop');\r\n    let header = panel.querySelector('.modal-header');\r\n    let footer = panel.querySelector('.modal-footer');\r\n    let body = panel.querySelector(\".modal-body\");\r\n    let modalDialog = panel.querySelector(\".modal-dialog\");\r\n    let isIOS = navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0;\r\n    //=====================================================================\r\n    // 点击非窗口区域，关窗口。并禁用上级元素的 touch 操作。\r\n    // let panel = this.panel; //this.refs['panel'] as HTMLElement;\r\n    // let modalDialog = this.modalDialog; //this.refs['modalDialog'] as HTMLElement;\r\n    panel.addEventListener('touchstart', (event) => {\r\n        let dialogRect = modalDialog.getBoundingClientRect();\r\n        for (let i = 0; i < event.touches.length; i++) {\r\n            let { clientX } = event.touches[i];\r\n            if (clientX < dialogRect.left) {\r\n                hide();\r\n                return;\r\n            }\r\n        }\r\n    });\r\n    if (isIOS) {\r\n        panel.addEventListener('touchstart', (event) => {\r\n            let tagName = event.target.tagName;\r\n            if (tagName == 'BUTTON' || tagName == 'INPUT' || tagName == 'A') {\r\n                return;\r\n            }\r\n            event.stopPropagation();\r\n            event.preventDefault();\r\n        });\r\n    }\r\n    function hide() {\r\n        modal.style.removeProperty('transform');\r\n        backdrop.style.opacity = '0';\r\n        window.setTimeout(() => {\r\n            panel.style.display = 'none';\r\n        }, 500);\r\n    }\r\n    return function showPanel(args) {\r\n        args = args || {};\r\n        panel.style.display = 'block';\r\n        modal.style.display = 'block';\r\n        setTimeout(() => {\r\n            modal.style.transform = 'translateX(0)';\r\n            backdrop.style.opacity = '0.5';\r\n        }, 50);\r\n        let setBodyHeight = () => {\r\n            let headerHeight = header.getBoundingClientRect().height;\r\n            let footerHeight = footer.getBoundingClientRect().height;\r\n            let bodyHeight = window.innerHeight - headerHeight - footerHeight;\r\n            body.style.height = `${bodyHeight}px`;\r\n        };\r\n        window.addEventListener('resize', () => setBodyHeight());\r\n        setBodyHeight();\r\n        if (args.header)\r\n            args.header(header);\r\n        if (args.body)\r\n            args.body(body);\r\n        if (args.footer)\r\n            args.footer(footer);\r\n        return {\r\n            hide: () => hide()\r\n        };\r\n    };\r\n})();\r\n\n\n//# sourceURL=webpack:///./out/dialog.js?");

/***/ }),

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.errors = {\r\n    argumentNull(paramName) {\r\n        let msg = `Argumnet ${paramName} can not be null or empty.`;\r\n        let error = new Error();\r\n        error.message = msg;\r\n        return error;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./out/errors.js?");

/***/ }),

/***/ "./out/image.js":
/*!**********************!*\
  !*** ./out/image.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst errors_1 = __webpack_require__(/*! ./errors */ \"./out/errors.js\");\r\nexports.loadImageConfig = {\r\n    /** 图片显示的文字 */\r\n    imageDisaplyText: '',\r\n};\r\nlet config = exports.loadImageConfig;\r\nlet draws = {\r\n    text: (imageText, options) => {\r\n        return (ctx, canvasWidth, canvasHeight) => {\r\n            // let fontSize1 = Math.floor(canvasHeight / 3 * 0.8);\r\n            let fontSize = Math.floor((canvasWidth / imageText.length) * 0.6);\r\n            let bgColor = 'whitesmoke';\r\n            let textColor = '#999';\r\n            // let fontSize = Math.min(fontSize1, fontSize2);\r\n            options = Object.assign({\r\n                fontSize,\r\n                bgColor,\r\n                textColor\r\n            }, options);\r\n            ctx.fillStyle = options.bgColor; //'whitesmoke';\r\n            ctx.fillRect(0, 0, canvasWidth, canvasHeight);\r\n            // 设置字体\r\n            ctx.font = `Bold ${options.fontSize}px Arial`;\r\n            // 设置对齐方式\r\n            ctx.textAlign = \"left\";\r\n            // 设置填充颜色\r\n            ctx.fillStyle = options.textColor; //\"#999\";\r\n            let textWidth = fontSize * imageText.length;\r\n            let startX = Math.floor((canvasWidth - textWidth) * 0.5);\r\n            let startY = Math.floor((canvasHeight - options.fontSize) * 0.3);\r\n            // 设置字体内容，以及在画布上的位置\r\n            ctx.fillText(imageText, startX, Math.floor(canvasHeight * 0.6));\r\n        };\r\n    }\r\n};\r\nfunction generateImageBase64(width, height, obj, options) {\r\n    var canvas = document.createElement('canvas');\r\n    canvas.width = width; //img_width;\r\n    canvas.height = height; //img_height;\r\n    var ctx = canvas.getContext('2d');\r\n    let draw = typeof obj == 'string' ? draws.text(obj, options) : obj;\r\n    draw(ctx, width, height);\r\n    return canvas.toDataURL();\r\n}\r\nexports.generateImageBase64 = generateImageBase64;\r\nconst PREVIEW_IMAGE_DEFAULT_WIDTH = 200;\r\nconst PREVIEW_IMAGE_DEFAULT_HEIGHT = 200;\r\n/**\r\n * 在 IMG 元素上渲染图片\r\n * @param element 要渲染的 IMG 元素\r\n * @param options 渲染选项，默认将 IMG 元素的 SRC 属性渲染出来\r\n */\r\nfunction renderImage(element, options) {\r\n    options = options || {};\r\n    if (!element)\r\n        throw errors_1.errors.argumentNull('element');\r\n    let imageUrl = element.src || '';\r\n    if (imageUrl.indexOf('data:image/png;base64') == 0 || element['rendered']) {\r\n        return;\r\n    }\r\n    element.title = imageUrl;\r\n    //====================================================\r\n    // 通过 URL 设置图片大小\r\n    if (imageUrl && !options.imageSize) {\r\n        var match = imageUrl.match(/_\\d+_\\d+/);\r\n        if (match && match.length > 0) {\r\n            var arr = match[0].split('_');\r\n            if (arr.length >= 2) {\r\n                var width = new Number(arr[1]).valueOf();\r\n                var height = new Number(arr[2]).valueOf();\r\n                options.imageSize = { width, height };\r\n            }\r\n        }\r\n    }\r\n    //====================================================\r\n    options.imageSize = options.imageSize || { width: PREVIEW_IMAGE_DEFAULT_WIDTH, height: PREVIEW_IMAGE_DEFAULT_HEIGHT };\r\n    //====================================================\r\n    if (!options.imageText) {\r\n        options.imageText = element.title || '';\r\n        ;\r\n    }\r\n    let s = options.imageSize;\r\n    //设置默认的图片\r\n    var src_replace = generateImageBase64(s.width, s.height, draws.text(options.imageText || config.imageDisaplyText)); //getPreviewImage(imageText || config.imageDisaplyText, img_width, img_height);\r\n    element.setAttribute('src', src_replace);\r\n    return new Promise((resolve, reject) => {\r\n        if (options.loadImage) {\r\n            options.loadImage()\r\n                .then(base64 => base64 ? Promise.resolve(base64) : Promise.reject({}))\r\n                .catch(() => {\r\n                let base64 = generateImageBase64(s.width, s.height, draws.text('加载图片失败', { fontSize: 24 }));\r\n                return Promise.resolve(base64);\r\n            })\r\n                .then((base64) => {\r\n                element.src = base64;\r\n                element['rendered'] = true;\r\n            });\r\n        }\r\n        else {\r\n            var image = new Image();\r\n            image.onload = function () {\r\n                element.src = this.src;\r\n                element['rendered'] = true;\r\n                resolve(element.src);\r\n            };\r\n            image.src = imageUrl;\r\n        }\r\n    });\r\n}\r\nexports.renderImage = renderImage;\r\nfunction imageFileToBase64(imageFile, size) {\r\n    if (!imageFile)\r\n        throw errors_1.errors.argumentNull('imageFile');\r\n    return new Promise((resolve, reject) => {\r\n        var reader = new FileReader();\r\n        reader.readAsArrayBuffer(imageFile);\r\n        reader.onload = (ev) => {\r\n            var blob = new Blob([event.target['result']]);\r\n            window['URL'] = window['URL'] || window['webkitURL'];\r\n            var blobURL = window['URL'].createObjectURL(blob);\r\n            var image = new Image();\r\n            image.src = blobURL;\r\n            image.onload = () => {\r\n                var canvas = document.createElement('canvas');\r\n                size = size || {};\r\n                let width = size.width != null && size.width < image.width ? size.width : image.width;\r\n                let height = size.height != null && size.height < image.height ? size.height : image.height;\r\n                if (width != null && height == null) {\r\n                    height = width / image.width * image.height;\r\n                }\r\n                else if (width == null && height != null) {\r\n                    width = height / image.height * image.width;\r\n                }\r\n                canvas.width = width;\r\n                canvas.height = height;\r\n                var ctx = canvas.getContext(\"2d\");\r\n                ctx.drawImage(image, 0, 0, width, height);\r\n                let data = canvas.toDataURL(\"image/jpeg\", 0.5);\r\n                resolve({ base64: data, width, height });\r\n            };\r\n        };\r\n    });\r\n}\r\nexports.imageFileToBase64 = imageFileToBase64;\r\nfunction fileToBase64(file) {\r\n    return new Promise((resolve, reject) => {\r\n        let reader = new FileReader();\r\n        reader.onload = function () {\r\n            resolve(reader.result.toString());\r\n        };\r\n        reader.onerror = function () {\r\n            reject(reader.error);\r\n        };\r\n        reader.readAsDataURL(file);\r\n    });\r\n}\r\nexports.fileToBase64 = fileToBase64;\r\n\n\n//# sourceURL=webpack:///./out/image.js?");

/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar buttonOnClick_1 = __webpack_require__(/*! ./buttonOnClick */ \"./out/buttonOnClick.js\");\r\nexports.buttonOnClick = buttonOnClick_1.buttonOnClick;\r\nvar dialog_1 = __webpack_require__(/*! ./dialog */ \"./out/dialog.js\");\r\nexports.showDialog = dialog_1.showDialog;\r\nexports.hideDialog = dialog_1.hideDialog;\r\nexports.toast = dialog_1.toast;\r\nexports.alert = dialog_1.alert;\r\nexports.confirm = dialog_1.confirm;\r\nexports.dialogConfig = dialog_1.dialogConfig;\r\nvar image_1 = __webpack_require__(/*! ./image */ \"./out/image.js\");\r\nexports.generateImageBase64 = image_1.generateImageBase64;\r\nexports.renderImage = image_1.renderImage;\r\nexports.loadImageConfig = image_1.loadImageConfig;\r\nexports.imageFileToBase64 = image_1.imageFileToBase64;\r\nexports.fileToBase64 = image_1.fileToBase64;\r\n\n\n//# sourceURL=webpack:///./out/index.js?");

/***/ })

/******/ })});;