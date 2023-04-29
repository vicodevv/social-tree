import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { Serializer } from "../serializers/serializers";
import Link  from "../models/link.model";


export const LinkController = {
    //Create new link
    create: async (req: Request, res: Response) => {
        const token: any = req.headers.authorization;
        const { title, url, description } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
          }
        try {
            const link = await Link.create({
                title,
                url,
                description,
                userId: token.id,
            });
            return res.status(201).json(Serializer.linkSerializer(link));
        }
        catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    },
};