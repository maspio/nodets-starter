import { Router } from "express";
import { status } from "../handlers/status";

const router = Router();

router.get("/", status);

export default router;