import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { Serializer } from "../serializers/serializers";
const jwt = require('jsonwebtoken');
import Link  from "../models/link.model";
import User from "../models/user.model";
import { LinkService } from "../service/link.service";
import { any } from "zod";
require('dotenv').config();

interface userRequest extends Request {
    user?: any;
  }

export const LinkController = {
    //Create new link
    create: async (req: userRequest, res: Response) => {
        const token = req.headers.authorization;                                                 
        console.log(token);
        const title = req.body.title;
        const url = req.body.url;

        if(token){
            jwt.verify(token, process.env.JWT_SECRET, async (err: any, decodedToken: any) => {
                if(err){
                    res.status(401).json({status: "error", message: "Invalid token"});
                }else{
                    try {
                        const user = await User.findById(decodedToken.id);
                        console.log(user);
                        const { username, _id } = user._doc;

                        const newLink = await Link.create({username, title, url, userId: _id});
                        res.status(201).json({
                            status: "success",
                            data: Serializer.linkSerializer(newLink),
                        });
                    } catch (error: any) {
                        res.status(500).json({ status: "error", message: error.message });
                    }
                }
                
            }); 
        }
    },

    //Update link
    update: async (req: Request, res: Response) => {
        const token = req.headers.authorization;
        const id = req.params.id;
        const title = req.body.title;
        const url = req.body.url;

        if(token){
            jwt.verify(token, process.env.JWT_SECRET, async (err: any, decodedToken: any) => {
                if(err){    
                    res.status(401).json({status: "error", message: "Invalid token"});
                }else{
                    try {
                        const user = await User.findById(decodedToken.id);
                        const { _id } = user._doc;
                        const newLink = await Link.findByIdAndUpdate(id, {title, url, userId: _id}, {new: true});
                        res.status(201).json({
                            status: "success",
                            data: Serializer.linkSerializer(newLink),
                        });
                    } catch (err) {
                        
                    }
                }
            });
        }else{
            res.status(401).json({status: "error", message: "Please Log In"});
        }
    },

    //Delete link
    delete: async (req: Request, res: Response) => {
        const token = req.headers.authorization;
        const id = req.params.id;

        if(token){
            jwt.verify(token, process.env.JWT_SECRET, async (err: any, decodedToken: any) => {
                if(err){    
                    res.status(401).json({status: "error", message: "Invalid token"});
                }else{
                    try {
                        const user = await User.findById(decodedToken.id);
                        const { _id } = user._doc;
                        const newLink = await Link.findByIdAndDelete(id);
                        res.status(201).json({
                            status: "success",
                            data: Serializer.linkSerializer(newLink),
                        });
                    } catch (err) {
                        
                    }
                }
            }
        )}else{
            res.status(401).json({status: "error", message: "Please Log In"});
        }
    }
}