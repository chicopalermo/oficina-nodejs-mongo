"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _postController = require("./postController.js");
var postRouter = new _express.Router();
postRouter.route('/').post(_postController.postController.createPost).get(_postController.postController.findPosts);
postRouter.route('/:id').put(_postController.postController.updatePost)["delete"](_postController.postController.deletePost);
var _default = postRouter;
exports["default"] = _default;