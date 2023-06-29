"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _userController = require("./userController.js");
var userRouter = new _express.Router();
userRouter.route('/').post(_userController.userController.createUser).get(_userController.userController.findUsers);
userRouter.route('/:id').put(_userController.userController.updateUser)["delete"](_userController.userController.deleteUser);
var _default = userRouter;
exports["default"] = _default;