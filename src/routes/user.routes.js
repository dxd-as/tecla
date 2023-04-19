import { Router } from "express";
import findUserById from "../controllers/user.controller.js";


const router = Router();

// Para /usuarios/
router.route('/')
    .get(findUserById)


export default router;