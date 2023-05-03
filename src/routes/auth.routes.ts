import express from "express";
import { AuthController } from "../controllers/auth.controller";

const authRouter = express.Router();
authRouter.post ('/register', AuthController.register);
authRouter.post ('/login', AuthController.login);

export default authRouter;