import { Router } from "express";
import setImages from "../controllers/post.controller.js"

const router = Router();

// Para /usuarios/
router.route('/')
    .get(setImages)

    export default router;