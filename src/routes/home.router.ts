import { Router } from "express";
import { getHome } from "../controllers/home.controller";

const homeRouter = Router();

homeRouter.route("/").get(getHome);

export default homeRouter;
