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
/******/ 	return __webpack_require__(__webpack_require__.s = "./out-es5/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out-es5/buttonOnClick.js":
/*!**********************************!*\
  !*** ./out-es5/buttonOnClick.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : new P(function (resolve) {\n        resolve(result.value);\n      }).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar dialog_1 = __webpack_require__(/*! ./dialog */ \"./out-es5/dialog.js\");\n\nfunction buttonOnClick(arg1, arg2, arg3) {\n  var _this = this;\n\n  var element;\n  var callback;\n  var args;\n\n  if (typeof arg1 == 'function') {\n    callback = arg1;\n    args = arg2;\n  } else if (typeof arg2 == 'function') {\n    element = arg1;\n    callback = arg2;\n    args = arg3;\n  } else {\n    throw new Error(\"Arguments error\");\n  }\n\n  args = args || {};\n\n  var execute = function execute(event) {\n    return __awaiter(_this, void 0, void 0,\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee() {\n      var button;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              button = event.currentTarget;\n              button.setAttribute('disabled', '');\n              _context.prev = 2;\n              _context.next = 5;\n              return callback(event);\n\n            case 5:\n              if (args.toast) {\n                dialog_1.toast(args.toast);\n              }\n\n              _context.next = 12;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](2);\n              console.error(_context.t0);\n              throw _context.t0;\n\n            case 12:\n              _context.prev = 12;\n              button.removeAttribute('disabled');\n              return _context.finish(12);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 8, 12, 15]]);\n    }));\n  };\n\n  var result = function result(event) {\n    event.stopPropagation();\n    event.cancelBubble = true;\n\n    if (!args.confirm) {\n      execute(event);\n      return;\n    }\n\n    var text = typeof args.confirm == 'string' ? args.confirm : args.confirm();\n    dialog_1.confirm({\n      message: text,\n      confirm: function confirm(event) {\n        return execute(event);\n      }\n    });\n  };\n\n  if (element) element.onclick = result;\n  return result;\n}\n\nexports.buttonOnClick = buttonOnClick;\n//# sourceMappingURL=buttonOnClick.js.map\n\n\n//# sourceURL=webpack:///./out-es5/buttonOnClick.js?");

/***/ }),

/***/ "./out-es5/dialog.js":
/*!***************************!*\
  !*** ./out-es5/dialog.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar errors_1 = __webpack_require__(/*! ./errors */ \"./out-es5/errors.js\");\n\nfunction dialogContainer() {\n  return exports.dialogConfig.dialogContainer || document.body;\n}\n\nexports.dialogConfig = {\n  dialogContainer: null\n};\n\nfunction addClassName(element, className) {\n  console.assert(className != null, 'class is null');\n  var c1 = (element.className || '').split(/\\s+/);\n  var c2 = className.split(/\\s+/);\n  var itemsToAdd = c2.filter(function (o) {\n    return c1.indexOf(o) < 0;\n  });\n  c1.push.apply(c1, _toConsumableArray(itemsToAdd));\n  element.className = c1.join(' ');\n}\n\nfunction removeClassName(element, className) {\n  console.assert(className != null, 'class is null');\n  var c1 = (element.className || '').split(/\\s+/);\n  var c2 = className.split(/\\s+/);\n  var itemsRemain = c1.filter(function (o) {\n    return c2.indexOf(o) < 0;\n  });\n  element.className = itemsRemain.join(' ');\n}\n\nvar dialogElements = new Array();\nvar dialogCallbacks = new Array();\n/** 弹窗\r\n * @param element bootstrap 的 modal 元素\r\n */\n\nfunction showDialog(element, callback) {\n  removeClassName(element, 'out');\n  element.style.display = 'block';\n  setTimeout(function () {\n    addClassName(element, 'modal fade in');\n  }, 100);\n  var dialogIndex = dialogElements.indexOf(element);\n\n  if (dialogIndex < 0) {\n    dialogElements.push(element);\n    dialogIndex = dialogElements.length - 1;\n    var closeButtons = element.querySelectorAll('[data-dismiss=\"modal\"]') || [];\n\n    for (var i = 0; i < closeButtons.length; i++) {\n      closeButtons[i].onclick = function () {\n        return hideDialog(element);\n      };\n    }\n\n    var allButtons = element.querySelectorAll('button');\n\n    for (var _i = 0; _i < allButtons.length; _i++) {\n      allButtons.item(_i).addEventListener('click', function (event) {\n        var callback = dialogCallbacks[dialogIndex];\n\n        if (callback) {\n          callback(event.currentTarget);\n        }\n      });\n    }\n  }\n\n  dialogCallbacks[dialogIndex] = callback;\n  element.tabIndex = 1;\n  var firstField = element.querySelector('input:not([type]),input:not([readonly])[type=\"text\"],input:not([readonly])[type=\"password\"]');\n\n  if (firstField) {\n    firstField.focus();\n  } else {\n    element.focus();\n  }\n\n  element.addEventListener('keydown', on_keydown);\n}\n\nexports.showDialog = showDialog;\n\nfunction hideDialog(element) {\n  removeClassName(element, 'in');\n  addClassName(element, 'modal fade out');\n  element.removeEventListener('keydown', on_keydown);\n  return new Promise(function (reslove, reject) {\n    setTimeout(function () {\n      element.style.removeProperty('display');\n      reslove();\n    }, 1000);\n  });\n}\n\nexports.hideDialog = hideDialog;\n\nfunction on_keydown(event) {\n  var KEY_CODE_ESC = 27;\n\n  if (event.keyCode == KEY_CODE_ESC) {\n    var dialogElement = findDialogElement(event.target);\n    console.assert(dialogElement != null);\n    if (dialogElement.getAttribute('data-keyboard') == 'false') return;\n    hideDialog(dialogElement);\n  }\n}\n\nfunction findDialogElement(e) {\n  while (e) {\n    var names = e.className.split(' ').filter(function (o) {\n      return o;\n    });\n    if (names.indexOf('modal') >= 0) return e;\n    e = e.parentElement;\n  }\n}\n\nfunction alert(args) {\n  var element = document.createElement('div');\n  dialogContainer().appendChild(element);\n\n  if (typeof args == 'string') {\n    args = {\n      title: '&nbsp;',\n      message: args\n    };\n  }\n\n  element.innerHTML = \"\\n            <div class=\\\"modal-dialog\\\">\\n                \\n                <div class=\\\"modal-content\\\">\\n                    <div class=\\\"modal-header\\\">\\n                        <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\">\\n                            <span aria-hidden=\\\"true\\\">&times;</span><span class=\\\"sr-only\\\">Close</span>\\n                        </button>\\n                        <h4 class=\\\"modal-title\\\">\".concat(args.title, \"</h4>\\n                    </div>\\n                    <div class=\\\"modal-body\\\">\\n                        <h5>\").concat(args.message, \"</h5>\\n                    </div>\\n                    <div class=\\\"modal-footer\\\">\\n                        <button name=\\\"ok\\\" type=\\\"button\\\" class=\\\"btn btn-primary\\\">\\n                            \\u786E\\u5B9A\\n                        </button>\\n                    </div>\\n                </div>\\n            </div>\\n        \"); // $(element).modal();\n  // $(element).on('hidden.bs.modal', () => {\n  //     $(element).remove();\n  // });\n  // var dialog = new Dialog(element);\n  // dialog.show();\n\n  showDialog(element);\n  var titleElement = element.querySelector('.modal-title');\n  var modalFooter = element.querySelector('.modal-footer');\n  var cancelButton = modalFooter.querySelector('[name=\"cancel\"]');\n  var okButton = modalFooter.querySelector('[name=\"ok\"]');\n\n  okButton.onclick = function () {\n    return hideDialog(element);\n  }; //dialog.hide()\n\n}\n\nexports.alert = alert;\n\nfunction confirm(args) {\n  var title;\n  var message;\n  var execute = args.confirm;\n\n  var cancel = args.cancle || function () {\n    return Promise.resolve();\n  };\n\n  var container = args.container || document.body;\n  var confirmText = args.confirmText || '确定';\n  var cancelText = args.cancelText || '取消';\n\n  if (typeof args == 'string') {\n    message = args;\n  } else {\n    title = args.title;\n    message = args.message;\n  }\n\n  var confirmDialogElment;\n  confirmDialogElment = document.createElement('div');\n  confirmDialogElment.className = 'modal fade';\n  confirmDialogElment.style.marginTop = '20px';\n  console.assert(dialogContainer != null, 'dialog container is null');\n  dialogContainer().appendChild(confirmDialogElment);\n  confirmDialogElment.innerHTML = \"\\n                    <div class=\\\"modal-dialog\\\">\\n                        <div class=\\\"modal-content\\\">\\n                            <div class=\\\"modal-header\\\">\\n                                <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\">\\n                                    <span aria-hidden=\\\"true\\\">&times;</span><span class=\\\"sr-only\\\">Close</span>\\n                                </button>\\n                                <h4 class=\\\"modal-title\\\">\\u786E\\u8BA4</h4>\\n                            </div>\\n                            <div class=\\\"modal-body form-horizontal\\\">\\n                               \\n                            </div>\\n                            <div class=\\\"modal-footer\\\">\\n                                <button name=\\\"cancel\\\" type=\\\"button\\\" class=\\\"btn btn-default\\\">\\n                                    \".concat(cancelText, \"\\n                                </button>\\n                                <button name=\\\"ok\\\" type=\\\"button\\\" class=\\\"btn btn-primary\\\">\\n                                    \").concat(confirmText, \"\\n                                </button>\\n                            </div>\\n                        </div>\\n                    </div>\\n                \");\n  var modalHeader = confirmDialogElment.querySelector('.modal-header');\n  var modalBody = confirmDialogElment.querySelector('.modal-body');\n  var modalFooter = confirmDialogElment.querySelector('.modal-footer');\n  modalBody.innerHTML = \"<h5>\".concat(message, \"</h5>\");\n\n  if (title) {\n    modalHeader.querySelector('h4').innerHTML = title;\n  }\n\n  var cancelButton = modalFooter.querySelector('[name=\"cancel\"]');\n  var okButton = modalFooter.querySelector('[name=\"ok\"]');\n  var closeButton = modalHeader.querySelector('.close');\n\n  closeButton.onclick = cancelButton.onclick = function () {\n    cancel().then(function () {\n      return hideDialog(confirmDialogElment);\n    }).then(function () {\n      confirmDialogElment.remove();\n    });\n  };\n\n  okButton.onclick = function (event) {\n    execute(event).then(function () {\n      return hideDialog(confirmDialogElment);\n    }).then(function () {\n      confirmDialogElment.remove();\n    });\n  };\n\n  showDialog(confirmDialogElment);\n}\n\nexports.confirm = confirm;\nexports.showToastMessage = toast;\n\nfunction toast(obj) {\n  if (obj == null) throw errors_1.errors.argumentNull('obj');\n  var msg;\n  var title;\n\n  if (_typeof(obj) == 'object') {\n    if (obj.tagName == null) {\n      var options = obj;\n      msg = options.message;\n      title = options.title;\n    } else {\n      msg = obj;\n    }\n  } else {\n    msg = obj;\n  }\n\n  var dialogContainer = exports.dialogConfig.dialogContainer || document.body;\n  var toastDialogElement = document.createElement('div');\n  toastDialogElement.className = 'modal fade in';\n  toastDialogElement.style.marginTop = '20px';\n  console.assert(dialogContainer != null, 'dialog container is null.');\n  dialogContainer.appendChild(toastDialogElement);\n  var header = title ? \"<div class=\\\"modal-header\\\">\\n                                    <h4 class=\\\"modal-title\\\">\".concat(title, \"</h4>\\n                               </div>\") : '';\n  toastDialogElement.innerHTML = \"\\n                        <div class=\\\"modal-dialog\\\">\\n                            <div class=\\\"modal-content\\\">\\n                                \".concat(header, \"\\n                                <div class=\\\"modal-body form-horizontal\\\">\\n                                </div>\\n                            </div>\\n                        </div>\\n                    \");\n  var modalBody = toastDialogElement.querySelector('.modal-body');\n  console.assert(modalBody != null);\n\n  if (typeof msg == 'string') {\n    modalBody.innerHTML = \"<h5>\".concat(msg, \"</h5>\");\n  } else if (typeof msg == 'function') {\n    modalBody.innerHTML = \"<h5>\".concat(msg(), \"</h5>\");\n  } else modalBody.appendChild(msg); // let dialog = new Dialog(toastDialogElement);\n  // dialog.show();\n\n\n  showDialog(toastDialogElement);\n  setTimeout(function () {\n    hideDialog(toastDialogElement).then(function () {\n      toastDialogElement.remove();\n    });\n  }, 500);\n}\n\nexports.toast = toast;\n\nexports.showPanel = function () {\n  var panel = document.createElement('div');\n  panel.className = 'mobile-page panel';\n  panel.style.display = 'none';\n  document.body.appendChild(panel);\n  panel.innerHTML = \"\\n            <div class=\\\"modal\\\">\\n                <div class=\\\"modal-dialog\\\">\\n                    <div class=\\\"modal-content\\\">\\n                        <div class=\\\"modal-header\\\">\\n    \\n                        </div>\\n                        <div class=\\\"modal-body\\\">\\n    \\n                        </div>\\n                        <div class=\\\"modal-footer\\\">\\n    \\n                        </div>\\n                    </div>\\n                </div>\\n            </div>\\n            <div class=\\\"modal-backdrop in\\\">\\n            </div>\\n        \";\n  var modal = panel.querySelector('.modal');\n  var backdrop = panel.querySelector('.modal-backdrop');\n  var header = panel.querySelector('.modal-header');\n  var footer = panel.querySelector('.modal-footer');\n  var body = panel.querySelector(\".modal-body\");\n  var modalDialog = panel.querySelector(\".modal-dialog\");\n  var isIOS = navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0; //=====================================================================\n  // 点击非窗口区域，关窗口。并禁用上级元素的 touch 操作。\n  // let panel = this.panel; //this.refs['panel'] as HTMLElement;\n  // let modalDialog = this.modalDialog; //this.refs['modalDialog'] as HTMLElement;\n\n  panel.addEventListener('touchstart', function (event) {\n    var dialogRect = modalDialog.getBoundingClientRect();\n\n    for (var i = 0; i < event.touches.length; i++) {\n      var clientX = event.touches[i].clientX;\n\n      if (clientX < dialogRect.left) {\n        _hide();\n\n        return;\n      }\n    }\n  });\n\n  if (isIOS) {\n    panel.addEventListener('touchstart', function (event) {\n      var tagName = event.target.tagName;\n\n      if (tagName == 'BUTTON' || tagName == 'INPUT' || tagName == 'A') {\n        return;\n      }\n\n      event.stopPropagation();\n      event.preventDefault();\n    });\n  }\n\n  function _hide() {\n    modal.style.removeProperty('transform');\n    backdrop.style.opacity = '0';\n    window.setTimeout(function () {\n      panel.style.display = 'none';\n    }, 500);\n  }\n\n  return function showPanel(args) {\n    args = args || {};\n    panel.style.display = 'block';\n    modal.style.display = 'block';\n    setTimeout(function () {\n      modal.style.transform = 'translateX(0)';\n      backdrop.style.opacity = '0.5';\n    }, 50);\n\n    var setBodyHeight = function setBodyHeight() {\n      var headerHeight = header.getBoundingClientRect().height;\n      var footerHeight = footer.getBoundingClientRect().height;\n      var bodyHeight = window.innerHeight - headerHeight - footerHeight;\n      body.style.height = \"\".concat(bodyHeight, \"px\");\n    };\n\n    window.addEventListener('resize', function () {\n      return setBodyHeight();\n    });\n    setBodyHeight();\n    if (args.header) args.header(header);\n    if (args.body) args.body(body);\n    if (args.footer) args.footer(footer);\n    return {\n      hide: function hide() {\n        return _hide();\n      }\n    };\n  };\n}();\n//# sourceMappingURL=dialog.js.map\n\n\n//# sourceURL=webpack:///./out-es5/dialog.js?");

/***/ }),

/***/ "./out-es5/errors.js":
/*!***************************!*\
  !*** ./out-es5/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.errors = {\n  argumentNull: function argumentNull(paramName) {\n    var msg = \"Argumnet \".concat(paramName, \" can not be null or empty.\");\n    var error = new Error();\n    error.message = msg;\n    return error;\n  }\n};\n//# sourceMappingURL=errors.js.map\n\n\n//# sourceURL=webpack:///./out-es5/errors.js?");

/***/ }),

/***/ "./out-es5/image.js":
/*!**************************!*\
  !*** ./out-es5/image.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar errors_1 = __webpack_require__(/*! ./errors */ \"./out-es5/errors.js\");\n\nexports.loadImageConfig = {\n  /** 图片显示的文字 */\n  imageDisaplyText: ''\n};\nvar config = exports.loadImageConfig;\nvar draws = {\n  text: function text(imageText, options) {\n    return function (ctx, canvasWidth, canvasHeight) {\n      // let fontSize1 = Math.floor(canvasHeight / 3 * 0.8);\n      var fontSize = Math.floor(canvasWidth / imageText.length * 0.6);\n      var bgColor = 'whitesmoke';\n      var textColor = '#999'; // let fontSize = Math.min(fontSize1, fontSize2);\n\n      options = Object.assign({\n        fontSize: fontSize,\n        bgColor: bgColor,\n        textColor: textColor\n      }, options);\n      ctx.fillStyle = options.bgColor; //'whitesmoke';\n\n      ctx.fillRect(0, 0, canvasWidth, canvasHeight); // 设置字体\n\n      ctx.font = \"Bold \".concat(options.fontSize, \"px Arial\"); // 设置对齐方式\n\n      ctx.textAlign = \"left\"; // 设置填充颜色\n\n      ctx.fillStyle = options.textColor; //\"#999\";\n\n      var textWidth = fontSize * imageText.length;\n      var startX = Math.floor((canvasWidth - textWidth) * 0.5);\n      var startY = Math.floor((canvasHeight - options.fontSize) * 0.3); // 设置字体内容，以及在画布上的位置\n\n      ctx.fillText(imageText, startX, Math.floor(canvasHeight * 0.6));\n    };\n  }\n};\n\nfunction generateImageBase64(width, height, obj, options) {\n  var canvas = document.createElement('canvas');\n  canvas.width = width; //img_width;\n\n  canvas.height = height; //img_height;\n\n  var ctx = canvas.getContext('2d');\n  var draw = typeof obj == 'string' ? draws.text(obj, options) : obj;\n  draw(ctx, width, height);\n  return canvas.toDataURL();\n}\n\nexports.generateImageBase64 = generateImageBase64;\nvar PREVIEW_IMAGE_DEFAULT_WIDTH = 200;\nvar PREVIEW_IMAGE_DEFAULT_HEIGHT = 200;\n/**\r\n * 在 IMG 元素上渲染图片\r\n * @param element 要渲染的 IMG 元素\r\n * @param options 渲染选项，默认将 IMG 元素的 SRC 属性渲染出来\r\n */\n\nfunction renderImage(element, options) {\n  options = options || {};\n  if (!element) throw errors_1.errors.argumentNull('element');\n  var imageUrl = element.src || '';\n\n  if (imageUrl.indexOf('data:image/png;base64') == 0 || element['rendered']) {\n    return;\n  }\n\n  element.title = imageUrl; //====================================================\n  // 通过 URL 设置图片大小\n\n  if (imageUrl && !options.imageSize) {\n    var match = imageUrl.match(/_\\d+_\\d+/);\n\n    if (match && match.length > 0) {\n      var arr = match[0].split('_');\n\n      if (arr.length >= 2) {\n        var width = new Number(arr[1]).valueOf();\n        var height = new Number(arr[2]).valueOf();\n        options.imageSize = {\n          width: width,\n          height: height\n        };\n      }\n    }\n  } //====================================================\n\n\n  options.imageSize = options.imageSize || {\n    width: PREVIEW_IMAGE_DEFAULT_WIDTH,\n    height: PREVIEW_IMAGE_DEFAULT_HEIGHT\n  }; //====================================================\n\n  if (!options.imageText) {\n    options.imageText = element.title || '';\n    ;\n  }\n\n  var s = options.imageSize; //设置默认的图片\n\n  var src_replace = generateImageBase64(s.width, s.height, draws.text(options.imageText || config.imageDisaplyText)); //getPreviewImage(imageText || config.imageDisaplyText, img_width, img_height);\n\n  element.setAttribute('src', src_replace);\n  return new Promise(function (resolve, reject) {\n    if (options.loadImage) {\n      options.loadImage().then(function (base64) {\n        return base64 ? Promise.resolve(base64) : Promise.reject({});\n      }).catch(function () {\n        var base64 = generateImageBase64(s.width, s.height, draws.text('加载图片失败', {\n          fontSize: 24\n        }));\n        return Promise.resolve(base64);\n      }).then(function (base64) {\n        element.src = base64;\n        element['rendered'] = true;\n      });\n    } else {\n      var image = new Image();\n\n      image.onload = function () {\n        element.src = this.src;\n        element['rendered'] = true;\n        resolve(element.src);\n      };\n\n      image.src = imageUrl;\n    }\n  });\n}\n\nexports.renderImage = renderImage;\n\nfunction imageFileToBase64(imageFile, size) {\n  if (!imageFile) throw errors_1.errors.argumentNull('imageFile');\n  return new Promise(function (resolve, reject) {\n    var reader = new FileReader();\n    reader.readAsArrayBuffer(imageFile);\n\n    reader.onload = function (ev) {\n      var blob = new Blob([event.target['result']]);\n      window['URL'] = window['URL'] || window['webkitURL'];\n      var blobURL = window['URL'].createObjectURL(blob);\n      var image = new Image();\n      image.src = blobURL;\n\n      image.onload = function () {\n        var canvas = document.createElement('canvas');\n        size = size || {};\n        var width = size.width != null && size.width < image.width ? size.width : image.width;\n        var height = size.height != null && size.height < image.height ? size.height : image.height;\n\n        if (width != null && height == null) {\n          height = width / image.width * image.height;\n        } else if (width == null && height != null) {\n          width = height / image.height * image.width;\n        }\n\n        canvas.width = width;\n        canvas.height = height;\n        var ctx = canvas.getContext(\"2d\");\n        ctx.drawImage(image, 0, 0, width, height);\n        var data = canvas.toDataURL(\"image/jpeg\", 0.5);\n        resolve({\n          base64: data,\n          width: width,\n          height: height\n        });\n      };\n    };\n  });\n}\n\nexports.imageFileToBase64 = imageFileToBase64;\n\nfunction fileToBase64(file) {\n  return new Promise(function (resolve, reject) {\n    var reader = new FileReader();\n\n    reader.onload = function () {\n      resolve(reader.result.toString());\n    };\n\n    reader.onerror = function () {\n      reject(reader.error);\n    };\n\n    reader.readAsDataURL(file);\n  });\n}\n\nexports.fileToBase64 = fileToBase64;\n//# sourceMappingURL=image.js.map\n\n\n//# sourceURL=webpack:///./out-es5/image.js?");

/***/ }),

/***/ "./out-es5/index.js":
/*!**************************!*\
  !*** ./out-es5/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar buttonOnClick_1 = __webpack_require__(/*! ./buttonOnClick */ \"./out-es5/buttonOnClick.js\");\n\nexports.buttonOnClick = buttonOnClick_1.buttonOnClick;\n\nvar dialog_1 = __webpack_require__(/*! ./dialog */ \"./out-es5/dialog.js\");\n\nexports.showDialog = dialog_1.showDialog;\nexports.hideDialog = dialog_1.hideDialog;\nexports.toast = dialog_1.toast;\nexports.alert = dialog_1.alert;\nexports.confirm = dialog_1.confirm;\nexports.dialogConfig = dialog_1.dialogConfig;\n\nvar image_1 = __webpack_require__(/*! ./image */ \"./out-es5/image.js\");\n\nexports.generateImageBase64 = image_1.generateImageBase64;\nexports.renderImage = image_1.renderImage;\nexports.loadImageConfig = image_1.loadImageConfig;\nexports.imageFileToBase64 = image_1.imageFileToBase64;\nexports.fileToBase64 = image_1.fileToBase64;\n//# sourceMappingURL=index.js.map\n\n\n//# sourceURL=webpack:///./out-es5/index.js?");

/***/ })

/******/ })});;