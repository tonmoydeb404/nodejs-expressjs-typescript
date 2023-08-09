import { Router } from "express";

import { getHealth } from "../controllers/health.controller";
import homeRouter from "../routes/home.router";

const router = Router();

router.use("/api/v1/", homeRouter);
// health route
router.all("/api/v1/health", getHealth);

export default router;
