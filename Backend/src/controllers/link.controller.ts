import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { Serializer } from "../serializers/serializers";
const jwt = require('jsonwebtoken');
import Link  from "../models/link.model";
import User from "../models/user.model";
import { LinkService } from "../service/link.service";

interface userRequest extends Request {
    user?: any;
  }

export const LinkController = {
    //Create new link
    create: async (req: userRequest, res: Response) => {
        try {
            const errors = validationResult(req);
            // if there is error then return Error
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    status: "error",
                    errors: errors.array(),
                });
            }
           req.body.user = req.user.id;
            const link = await LinkService.createLink(req.body);
            res.json({
                status: "success",
                message: "link created successfuly",
                data: Serializer.linkSerializer(link),
            });
        } catch (error: any) {
            res.status(500).json({ status: "error", message: error.message });
        }
    }
}