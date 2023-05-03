import express from "express";
import { LinkController } from "../controllers/link.controller";

const linkRouter = express.Router();
linkRouter.get ('/', LinkController.getAll);
linkRouter.get ('/:id', LinkController.getOne);
linkRouter.get ('/user/:id', LinkController.getAllFromUser);
linkRouter.post ('/create', LinkController.create);
linkRouter.put ('/update/:id', LinkController.update);
linkRouter.delete ('/delete/:id', LinkController.delete);

export default linkRouter;