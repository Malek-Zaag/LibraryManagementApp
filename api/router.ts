import { Router } from "express";
import { getAllUsers } from "./controller";

export const router = Router();

router.get("/api/user/uesrs", getAllUsers);
