import { Router } from "express";
import { postController } from "./postController.js";

const postRouter = new Router();

postRouter.route('/')
    .post(postController.createPost)
    .get(postController.findPosts);

postRouter.route('/:id')
    .put(postController.updatePost)
    .delete(postController.deletePost);

export default postRouter;