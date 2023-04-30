import express from 'express';
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();
userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:id', UserController.getUserById);

export default userRouter;