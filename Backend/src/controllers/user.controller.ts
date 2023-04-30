import { userService } from "../service/user.service";
import { validationResult } from "express-validator";
import { Serializer } from "../serializers/serializers";
import { Request, Response } from "express";

export const UserController = {
    //Get all users
    getAllUsers: async (req: Request, res: Response) => {
        try {
            const users = await userService.getAllUsers();
            res.json({
                status: "success",
                data: Serializer.usersSerializer(users),
            });
        } catch (error: any) {
            res.status(500).json({ status: "error", message: error.message });
        }
    },

    //Get user by id
    getUserById: async (req: Request, res: Response) => {
        try {
            const user = await userService.getUserById(req.params.id);
            res.json({
                status: "success",
                data: Serializer.userSerializer(user),
            });
        } catch (error: any) {
            res.status(500).json({ status: "error", message: error.message });
        }
    },
}