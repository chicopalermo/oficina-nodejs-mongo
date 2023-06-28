import { Router } from "express";
import { userController } from "./userController.js";

const userRouter = new Router();

userRouter.route('/')
    .post(userController.createUser)
    .get(userController.findUsers);

userRouter.route('/:id')
    .put(userController.updateUser)
    .delete(userController.deleteUser);

export default userRouter;