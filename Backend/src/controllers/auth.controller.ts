import { Request, Response } from "express";
import User from "../models/user.model";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { userService } from "../service/user.service";
import { validationResult } from "express-validator";
import { Serializer } from "../serializers/serializers";
require("dotenv").config();

export const AuthController = {
  //Create new user
  register: async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      // if there is error then return Error
      if (!errors.isEmpty()) {
        return res.status(400).json({
          status: "error",
          errors: errors.array(),
        });
      }
      const user = req.body;
      if (!user.email || !user.password) {
        return res.status(400).send({
          status: "error",
          message: "Username and password are required.",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const reg_user = await userService.createUser({
        username: user.username,
        email: user.email,
        password: hashedPassword,
      });
      res.json({
        status: "success",
        message: "user created successfuly",
        data: Serializer.userSerializer(reg_user),
      });
    } catch (err: any) {
      res.status(500).json({ status: "error", message: err.message });
    }
  },

  //Login user
  login: async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      
      // return error if there is error
      if (!errors.isEmpty()) {
        return res.status(400).json({
          status: "error",
          errors: errors.array(),
        });
      }

      // check if user is existing
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(400)
          .send({ status: "error", message: "Invalid email" });
      }


      // compare password
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .send({ status: "error", message: "Invalid password" });
      }
      //create token
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET!, {
        expiresIn: "1d",
      });
      res.json({
        status: "success",
        data: { token, user: Serializer.userSerializer(user) },
      });
    } catch (err: any) {
      res.status(500).json({ status: "error", message: err.message });
    }
  },
};
