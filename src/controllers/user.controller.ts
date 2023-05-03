import { userService } from "../service/user.service";
import { validationResult } from "express-validator";
import { Serializer } from "../serializers/serializers";
import { Request, Response } from "express";
import User from "../models/user.model";
import Link from "../models/link.model";
const jwt = require('jsonwebtoken')

export const UserController = {
    //Get all users
    getAllUsers: async (req: Request, res: Response) => {
        try {
            const users = await userService.getAllUsers();
            let id = 1;
            users.forEach((user) => {
                user.id = id;
                id++;
            });
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

    //Get user details
    getUserDetails: async (req: Request, res: Response) => {
        const token = req.headers.authorization?.split(" ")[1];
        console.log(token);
        
        if(token){
            jwt.verify(token, process.env.JWT_SECRET, async (err: any, decodedToken: any) => {
                if(err){
                    res.status(401).json({
                        status: "error",
                        message: "Invalid token"
                    });
                }else{
                    try {
                        const user = await User.findById(decodedToken.id);

                        if(user){
                            let{_id, __v, password, updatedAt, ...others} = user._doc;
                            const links = await Link.find({userId: _id});

                            others['links'] = links;
                            res.status(200).json({
                                status: "success",
                                data: Serializer.userSerializer(others),
                            });
                        }else{
                            res.status(404).json({
                                status: "error",
                                message: "User not found"
                            });
                        }
                    } catch (error: any) {
                        res.status(500).json({
                            status: "error",
                            message: error.message
                        });
                    }
                }
            });
        }
    }
        
}