import express from "express";
const authController = require ('../controllers/auth.controller');

const authRouter = express.Router();
authRouter.post ('/register', authController.register);
authRouter.post ('/login', authController.login);

export default authRouter;