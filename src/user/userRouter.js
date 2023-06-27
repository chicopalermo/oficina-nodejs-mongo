import { Router } from "express";
import User from "../db/models/User.js";
import { userController } from "./userController.js";

const userRouter = new Router();

userRouter.route('/')
    .post(userController.createUser)
    .get(userController.findUsers);

export default userRouter;