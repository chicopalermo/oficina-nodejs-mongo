"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encrypt = exports.compare = void 0;
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SALTROUNDS = 10;
var encrypt = function encrypt(password) {
  if (!password) {
    return null;
  }
  return _bcrypt["default"].hashSync(password, SALTROUNDS);
};
exports.encrypt = encrypt;
var compare = function compare(password, encryptedPassword) {
  if (!password || !encryptedPassword) {
    return false;
  }
  return _bcrypt["default"].compareSync(password, encryptedPassword);
};
exports.compare = compare;