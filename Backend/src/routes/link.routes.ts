import express from "express";
import { LinkController } from "../controllers/link.controller";

const linkRouter = express.Router();
linkRouter.post ('/create', LinkController.create);
linkRouter.put ('/update/:id', LinkController.update);
linkRouter.delete ('/delete/:id', LinkController.delete);

export default linkRouter;