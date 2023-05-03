import { Request, Response } from "express";
import User from "../models/user.model";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { createToken } from "../utils/createToken";
import { userService } from "../service/user.service";
import { validationResult } from "express-validator";
import { Serializer } from "../serializers/serializers";
require("dotenv").config();

export const AuthController = {
  //Create new user
  register: async (req: Request, res: Response) => {
    let { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    try {
      const user = await userService.createUser({
        username,
        email,
        password: hashedPassword,
      })
      res.status(201).json({
        status: "success",
        data: Serializer.userSerializer(user),
      });
    } catch (error: any) {
      res.status(500).json({ status: "error", message: error.message });
    }
  },

  //Login user
  login: async (req: Request, res: Response) => {
      const { email, password } = req.body;

      try {
        const user = await User.findOne({ email });
        if(user){
          const auth = await bcrypt.compare(password, user.password);

          if(auth){
            const {password, ...others} = user._doc;
            const token = createToken(user._id);
            res.status(200).json({
              status: "success",
              data: {user: others, token}
            });
          }else{
            res.status(401).json({
              status: "error", 
              message: "Invalid password"
            });
          }
        }else{
          res.status(401).json({
            status: "error", 
            message: "Invalid email"
          });
        }
      } catch (error: any) {
        res.status(500).json({
          status: "error", 
          message: error.message 
        });
      }
  },
};