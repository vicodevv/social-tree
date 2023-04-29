import express from "express";
import { LinkController } from "../controllers/link.controller";

const linkRouter = express.Router();
linkRouter.post ('/create', LinkController.create);

export default linkRouter;