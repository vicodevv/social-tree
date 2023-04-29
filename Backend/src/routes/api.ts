import express, { Request, Response } from "express";
import authRouter from "./auth.routes";
import LinkRouter from "./link.routes";

const apiRouter = express.Router();

apiRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "Welcome to your Express App API." });
});

apiRouter.use("/auth", authRouter);
apiRouter.use("/link", LinkRouter);
export default apiRouter;