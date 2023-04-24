import {Request, Response} from 'express';
const errorHandler = require('../utils/errorHandler');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {   
        const user = await User.create({username, email, password: hashedPassword});
        res.status(201).json({message: "User created successfully", success: true});
    } catch (error) {
        const errors = errorHandler(error);
        res.status(errors.status).json({message: errors.message, success: false});
    }
}   