import express from "express";
import auth from "./auth.route";
import user from "./user.route";

const router = express.Router();

router.get("/healthcheck", (_, res) => res.sendStatus(200));

router.use(auth);
router.use(user);


export default router;