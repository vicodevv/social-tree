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

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email});
        if(user){
            const isMatch = await bcrypt.compare(password, user.password);
            if(isMatch){
                const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
                res.status(200).json({message: "Login successful", success: true, token});
            }else{
                res.status(400).json({message: "Password incorrect", success: false});
            }
        }else{
            res.status(404).json({message: "User not found", success: false});
        }
    } catch (error) {
        const errors = errorHandler(error);
        res.status(errors.status).json({message: errors.message, success: false});
    }
}