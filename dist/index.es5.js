/*!
 * 
 *  maishu-ui-toolkit v1.6.0
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


var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var dialog_1 = __webpack_require__(/*! ./dialog */ "./out-es5/dialog.js");

function buttonOnClick(arg1, arg2, arg3) {
  var _this = this;

  var element;
  var callback;
  var args;

  if (typeof arg1 == 'function') {
    callback = arg1;
    args = arg2;
  } else if (typeof arg2 == 'function') {
    element = arg1;
    callback = arg2;
    args = arg3;
  } else {
    throw new Error("Arguments error");
  }

  args = args || {};

  var execute = function execute(event) {
    return __awaiter(_this, void 0, void 0,
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var button;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              button = event.currentTarget;
              button.setAttribute('disabled', '');
              _context.prev = 2;
              _context.next = 5;
              return callback(event);

            case 5:
              if (args.toast) {
                dialog_1.toast(args.toast);
              }

              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);
              console.error(_context.t0);
              throw _context.t0;

            case 12:
              _context.prev = 12;
              button.removeAttribute('disabled');
              return _context.finish(12);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 8, 12, 15]]);
    }));
  };

  var result = function result(event) {
    event.stopPropagation();
    event.cancelBubble = true;

    if (!args.confirm) {
      execute(event);
      return;
    }

    var text = typeof args.confirm == 'string' ? args.confirm : args.confirm();
    dialog_1.confirm({
      message: text,
      confirm: function confirm(event) {
        return execute(event);
      }
    });
  };

  if (element) element.onclick = result;
  return result;
}

exports.buttonOnClick = buttonOnClick;
//# sourceMappingURL=buttonOnClick.js.map


/***/ }),

/***/ "./out-es5/dialog.js":
/*!***************************!*\
  !*** ./out-es5/dialog.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var errors_1 = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

function dialogContainer() {
  return exports.dialogConfig.dialogContainer || document.body;
}

exports.dialogConfig = {
  dialogContainer: null
};

function addClassName(element, className) {
  console.assert(className != null, 'class is null');
  var c1 = (element.className || '').split(/\s+/);
  var c2 = className.split(/\s+/);
  var itemsToAdd = c2.filter(function (o) {
    return c1.indexOf(o) < 0;
  });
  c1.push.apply(c1, _toConsumableArray(itemsToAdd));
  element.className = c1.join(' ');
}

function removeClassName(element, className) {
  console.assert(className != null, 'class is null');
  var c1 = (element.className || '').split(/\s+/);
  var c2 = className.split(/\s+/);
  var itemsRemain = c1.filter(function (o) {
    return c2.indexOf(o) < 0;
  });
  element.className = itemsRemain.join(' ');
}

var dialogElements = new Array();
var dialogCallbacks = new Array();
/** 弹窗
 * @param element bootstrap 的 modal 元素
 */

function showDialog(element, callback) {
  removeClassName(element, 'out');
  element.style.display = 'block';
  setTimeout(function () {
    addClassName(element, 'modal fade in');
  }, 100);
  var dialogIndex = dialogElements.indexOf(element);

  if (dialogIndex < 0) {
    dialogElements.push(element);
    dialogIndex = dialogElements.length - 1;
    var closeButtons = element.querySelectorAll('[data-dismiss="modal"]') || [];

    for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].onclick = function () {
        return hideDialog(element);
      };
    }

    var allButtons = element.querySelectorAll('button');

    for (var _i = 0; _i < allButtons.length; _i++) {
      allButtons.item(_i).addEventListener('click', function (event) {
        var callback = dialogCallbacks[dialogIndex];

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
  } else {
    element.focus();
  }

  element.addEventListener('keydown', on_keydown);
}

exports.showDialog = showDialog;

function hideDialog(element) {
  removeClassName(element, 'in');
  addClassName(element, 'modal fade out');
  element.removeEventListener('keydown', on_keydown);
  return new Promise(function (reslove, reject) {
    setTimeout(function () {
      element.style.removeProperty('display');
      reslove();
    }, 1000);
  });
}

exports.hideDialog = hideDialog;

function on_keydown(event) {
  var KEY_CODE_ESC = 27;

  if (event.keyCode == KEY_CODE_ESC) {
    var dialogElement = findDialogElement(event.target);
    console.assert(dialogElement != null);
    if (dialogElement.getAttribute('data-keyboard') == 'false') return;
    hideDialog(dialogElement);
  }
}

function findDialogElement(e) {
  while (e) {
    var names = e.className.split(' ').filter(function (o) {
      return o;
    });
    if (names.indexOf('modal') >= 0) return e;
    e = e.parentElement;
  }
}

function alert(args) {
  var element = document.createElement('div');
  dialogContainer().appendChild(element);

  if (typeof args == 'string') {
    args = {
      title: '&nbsp;',
      message: args
    };
  }

  element.innerHTML = "\n            <div class=\"modal-dialog\">\n                \n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                            <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n                        </button>\n                        <h4 class=\"modal-title\">".concat(args.title, "</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        <h5>").concat(args.message, "</h5>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button name=\"ok\" type=\"button\" class=\"btn btn-primary\">\n                            \u786E\u5B9A\n                        </button>\n                    </div>\n                </div>\n            </div>\n        "); // $(element).modal();
  // $(element).on('hidden.bs.modal', () => {
  //     $(element).remove();
  // });
  // var dialog = new Dialog(element);
  // dialog.show();

  showDialog(element);
  var titleElement = element.querySelector('.modal-title');
  var modalFooter = element.querySelector('.modal-footer');
  var cancelButton = modalFooter.querySelector('[name="cancel"]');
  var okButton = modalFooter.querySelector('[name="ok"]');

  okButton.onclick = function () {
    return hideDialog(element);
  }; //dialog.hide()

}

exports.alert = alert;

function confirm(args) {
  var title;
  var message;
  var execute = args.confirm;

  var cancel = args.cancle || function () {
    return Promise.resolve();
  };

  var container = args.container || document.body;
  var confirmText = args.confirmText || '确定';
  var cancelText = args.cancelText || '取消';

  if (typeof args == 'string') {
    message = args;
  } else {
    title = args.title;
    message = args.message;
  }

  var confirmDialogElment;
  confirmDialogElment = document.createElement('div');
  confirmDialogElment.className = 'modal fade';
  confirmDialogElment.style.marginTop = '20px';
  console.assert(dialogContainer != null, 'dialog container is null');
  dialogContainer().appendChild(confirmDialogElment);
  confirmDialogElment.innerHTML = "\n                    <div class=\"modal-dialog\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                                    <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n                                </button>\n                                <h4 class=\"modal-title\">\u786E\u8BA4</h4>\n                            </div>\n                            <div class=\"modal-body form-horizontal\">\n                               \n                            </div>\n                            <div class=\"modal-footer\">\n                                <button name=\"cancel\" type=\"button\" class=\"btn btn-default\">\n                                    ".concat(cancelText, "\n                                </button>\n                                <button name=\"ok\" type=\"button\" class=\"btn btn-primary\">\n                                    ").concat(confirmText, "\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                ");
  var modalHeader = confirmDialogElment.querySelector('.modal-header');
  var modalBody = confirmDialogElment.querySelector('.modal-body');
  var modalFooter = confirmDialogElment.querySelector('.modal-footer');
  modalBody.innerHTML = "<h5>".concat(message, "</h5>");

  if (title) {
    modalHeader.querySelector('h4').innerHTML = title;
  }

  var cancelButton = modalFooter.querySelector('[name="cancel"]');
  var okButton = modalFooter.querySelector('[name="ok"]');
  var closeButton = modalHeader.querySelector('.close');

  closeButton.onclick = cancelButton.onclick = function () {
    cancel().then(function () {
      return hideDialog(confirmDialogElment);
    }).then(function () {
      confirmDialogElment.remove();
    });
  };

  okButton.onclick = function (event) {
    execute(event).then(function () {
      return hideDialog(confirmDialogElment);
    }).then(function () {
      confirmDialogElment.remove();
    }).catch(function () {
      return hideDialog(confirmDialogElment);
    });
  };

  showDialog(confirmDialogElment);
}

exports.confirm = confirm;
exports.showToastMessage = toast;

function toast(obj) {
  if (obj == null) throw errors_1.errors.argumentNull('obj');
  var msg;
  var title;

  if (_typeof(obj) == 'object') {
    if (obj.tagName == null) {
      var options = obj;
      msg = options.message;
      title = options.title;
    } else {
      msg = obj;
    }
  } else {
    msg = obj;
  }

  var dialogContainer = exports.dialogConfig.dialogContainer || document.body;
  var toastDialogElement = document.createElement('div');
  toastDialogElement.className = 'modal fade in';
  toastDialogElement.style.marginTop = '20px';
  console.assert(dialogContainer != null, 'dialog container is null.');
  dialogContainer.appendChild(toastDialogElement);
  var header = title ? "<div class=\"modal-header\">\n                                    <h4 class=\"modal-title\">".concat(title, "</h4>\n                               </div>") : '';
  toastDialogElement.innerHTML = "\n                        <div class=\"modal-dialog\">\n                            <div class=\"modal-content\">\n                                ".concat(header, "\n                                <div class=\"modal-body form-horizontal\">\n                                </div>\n                            </div>\n                        </div>\n                    ");
  var modalBody = toastDialogElement.querySelector('.modal-body');
  console.assert(modalBody != null);

  if (typeof msg == 'string') {
    modalBody.innerHTML = "<h5>".concat(msg, "</h5>");
  } else if (typeof msg == 'function') {
    modalBody.innerHTML = "<h5>".concat(msg(), "</h5>");
  } else modalBody.appendChild(msg); // let dialog = new Dialog(toastDialogElement);
  // dialog.show();


  showDialog(toastDialogElement);
  setTimeout(function () {
    hideDialog(toastDialogElement).then(function () {
      toastDialogElement.remove();
    });
  }, 500);
}

exports.toast = toast;

exports.showPanel = function () {
  var panel = document.createElement('div');
  panel.className = 'mobile-page panel';
  panel.style.display = 'none';
  document.body.appendChild(panel);
  panel.innerHTML = "\n            <div class=\"modal\">\n                <div class=\"modal-dialog\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n    \n                        </div>\n                        <div class=\"modal-body\">\n    \n                        </div>\n                        <div class=\"modal-footer\">\n    \n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-backdrop in\">\n            </div>\n        ";
  var modal = panel.querySelector('.modal');
  var backdrop = panel.querySelector('.modal-backdrop');
  var header = panel.querySelector('.modal-header');
  var footer = panel.querySelector('.modal-footer');
  var body = panel.querySelector(".modal-body");
  var modalDialog = panel.querySelector(".modal-dialog");
  var isIOS = navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0; //=====================================================================
  // 点击非窗口区域，关窗口。并禁用上级元素的 touch 操作。
  // let panel = this.panel; //this.refs['panel'] as HTMLElement;
  // let modalDialog = this.modalDialog; //this.refs['modalDialog'] as HTMLElement;

  panel.addEventListener('touchstart', function (event) {
    var dialogRect = modalDialog.getBoundingClientRect();

    for (var i = 0; i < event.touches.length; i++) {
      var clientX = event.touches[i].clientX;

      if (clientX < dialogRect.left) {
        _hide();

        return;
      }
    }
  });

  if (isIOS) {
    panel.addEventListener('touchstart', function (event) {
      var tagName = event.target.tagName;

      if (tagName == 'BUTTON' || tagName == 'INPUT' || tagName == 'A') {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
    });
  }

  function _hide() {
    modal.style.removeProperty('transform');
    backdrop.style.opacity = '0';
    window.setTimeout(function () {
      panel.style.display = 'none';
    }, 500);
  }

  return function showPanel(args) {
    args = args || {};
    panel.style.display = 'block';
    modal.style.display = 'block';
    setTimeout(function () {
      modal.style.transform = 'translateX(0)';
      backdrop.style.opacity = '0.5';
    }, 50);

    var setBodyHeight = function setBodyHeight() {
      var headerHeight = header.getBoundingClientRect().height;
      var footerHeight = footer.getBoundingClientRect().height;
      var bodyHeight = window.innerHeight - headerHeight - footerHeight;
      body.style.height = "".concat(bodyHeight, "px");
    };

    window.addEventListener('resize', function () {
      return setBodyHeight();
    });
    setBodyHeight();
    if (args.header) args.header(header);
    if (args.body) args.body(body);
    if (args.footer) args.footer(footer);
    return {
      hide: function hide() {
        return _hide();
      }
    };
  };
}();
//# sourceMappingURL=dialog.js.map


/***/ }),

/***/ "./out-es5/errors.js":
/*!***************************!*\
  !*** ./out-es5/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errors = {
  argumentNull: function argumentNull(paramName) {
    var msg = "Argumnet ".concat(paramName, " can not be null or empty.");
    var error = new Error();
    error.message = msg;
    return error;
  }
};
//# sourceMappingURL=errors.js.map


/***/ }),

/***/ "./out-es5/image.js":
/*!**************************!*\
  !*** ./out-es5/image.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var errors_1 = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

exports.loadImageConfig = {
  /** 图片显示的文字 */
  imageDisaplyText: ''
};
var config = exports.loadImageConfig;
var draws = {
  text: function text(imageText, options) {
    return function (ctx, canvasWidth, canvasHeight) {
      // let fontSize1 = Math.floor(canvasHeight / 3 * 0.8);
      var fontSize = Math.floor(canvasWidth / imageText.length * 0.6);
      var bgColor = 'whitesmoke';
      var textColor = '#999'; // let fontSize = Math.min(fontSize1, fontSize2);

      options = Object.assign({
        fontSize: fontSize,
        bgColor: bgColor,
        textColor: textColor
      }, options);
      ctx.fillStyle = options.bgColor; //'whitesmoke';

      ctx.fillRect(0, 0, canvasWidth, canvasHeight); // 设置字体

      ctx.font = "Bold ".concat(options.fontSize, "px Arial"); // 设置对齐方式

      ctx.textAlign = "left"; // 设置填充颜色

      ctx.fillStyle = options.textColor; //"#999";

      var textWidth = fontSize * imageText.length;
      var startX = Math.floor((canvasWidth - textWidth) * 0.5);
      var startY = Math.floor((canvasHeight - options.fontSize) * 0.3); // 设置字体内容，以及在画布上的位置

      ctx.fillText(imageText, startX, Math.floor(canvasHeight * 0.6));
    };
  }
};

function generateImageBase64(width, height, obj, options) {
  var canvas = document.createElement('canvas');
  canvas.width = width; //img_width;

  canvas.height = height; //img_height;

  var ctx = canvas.getContext('2d');
  var draw = typeof obj == 'string' ? draws.text(obj, options) : obj;
  draw(ctx, width, height);
  return canvas.toDataURL();
}

exports.generateImageBase64 = generateImageBase64;
var PREVIEW_IMAGE_DEFAULT_WIDTH = 200;
var PREVIEW_IMAGE_DEFAULT_HEIGHT = 200;
/**
 * 在 IMG 元素上渲染图片
 * @param element 要渲染的 IMG 元素
 * @param options 渲染选项，默认将 IMG 元素的 SRC 属性渲染出来
 */

function renderImage(element, options) {
  options = options || {};
  if (!element) throw errors_1.errors.argumentNull('element');
  var imageUrl = element.src || '';

  if (imageUrl.indexOf('data:image/png;base64') == 0 || element['rendered']) {
    return;
  }

  element.setAttribute("image-url", imageUrl); //====================================================
  // 通过 URL 设置图片大小

  if (imageUrl && !options.imageSize) {
    var match = imageUrl.match(/_\d+_\d+/);

    if (match && match.length > 0) {
      var arr = match[0].split('_');

      if (arr.length >= 2) {
        var width = new Number(arr[1]).valueOf();
        var height = new Number(arr[2]).valueOf();
        options.imageSize = {
          width: width,
          height: height
        };
      }
    }
  } //====================================================


  options.imageSize = options.imageSize || {
    width: PREVIEW_IMAGE_DEFAULT_WIDTH,
    height: PREVIEW_IMAGE_DEFAULT_HEIGHT
  }; //====================================================

  if (!options.imageText) {
    options.imageText = element.title || '';
    ;
  }

  var s = options.imageSize; //设置默认的图片

  var src_replace = generateImageBase64(s.width, s.height, draws.text(options.imageText || config.imageDisaplyText)); //getPreviewImage(imageText || config.imageDisaplyText, img_width, img_height);

  element.setAttribute('src', src_replace);
  return new Promise(function (resolve, reject) {
    if (options.loadImage) {
      options.loadImage().then(function (base64) {
        return base64 ? Promise.resolve(base64) : Promise.reject({});
      }).catch(function () {
        var base64 = generateImageBase64(s.width, s.height, draws.text('加载图片失败', {
          fontSize: 24
        }));
        return Promise.resolve(base64);
      }).then(function (base64) {
        element.src = base64;
        element['rendered'] = true;
      });
    } else {
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
  if (!imageFile) throw errors_1.errors.argumentNull('imageFile');
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsArrayBuffer(imageFile);

    reader.onload = function (ev) {
      var blob = new Blob([event.target['result']]);
      window['URL'] = window['URL'] || window['webkitURL'];
      var blobURL = window['URL'].createObjectURL(blob);
      var image = new Image();
      image.src = blobURL;

      image.onload = function () {
        var canvas = document.createElement('canvas');
        size = size || {};
        var width = size.width != null && size.width < image.width ? size.width : image.width;
        var height = size.height != null && size.height < image.height ? size.height : image.height;

        if (width != null && height == null) {
          height = width / image.width * image.height;
        } else if (width == null && height != null) {
          width = height / image.height * image.width;
        }

        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, width, height);
        var data = canvas.toDataURL("image/jpeg", 0.5);
        resolve({
          base64: data,
          width: width,
          height: height
        });
      };
    };
  });
}

exports.imageFileToBase64 = imageFileToBase64;

function fileToBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

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
//# sourceMappingURL=image.js.map


/***/ }),

/***/ "./out-es5/index.js":
/*!**************************!*\
  !*** ./out-es5/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var buttonOnClick_1 = __webpack_require__(/*! ./buttonOnClick */ "./out-es5/buttonOnClick.js");

exports.buttonOnClick = buttonOnClick_1.buttonOnClick;

var dialog_1 = __webpack_require__(/*! ./dialog */ "./out-es5/dialog.js");

exports.showDialog = dialog_1.showDialog;
exports.hideDialog = dialog_1.hideDialog;
exports.toast = dialog_1.toast;
exports.alert = dialog_1.alert;
exports.confirm = dialog_1.confirm;
exports.dialogConfig = dialog_1.dialogConfig;

var image_1 = __webpack_require__(/*! ./image */ "./out-es5/image.js");

exports.generateImageBase64 = image_1.generateImageBase64;
exports.renderImage = image_1.renderImage;
exports.loadImageConfig = image_1.loadImageConfig;
exports.imageFileToBase64 = image_1.imageFileToBase64;
exports.fileToBase64 = image_1.fileToBase64;
//# sourceMappingURL=index.js.map


/***/ })

/******/ })});;
//# sourceMappingURL=index.es5.js.map