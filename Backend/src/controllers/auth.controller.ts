import {Request, Response} from 'express';
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
import { userService } from "../service/user.service";
import { validationResult } from "express-validator";
import { Serializer } from '../serializers/serializers';
require('dotenv').config();

export const AuthController = {
    /* register/create new user */
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
        const reg_user = await userService.createUser({
          username: user.username,
          email: user.email,
          password: user.password,
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
};