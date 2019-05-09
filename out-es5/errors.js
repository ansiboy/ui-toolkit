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
