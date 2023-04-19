import { Router } from "express";
import { setImages } from "../controllers/post.controller";

const router = Router();

// Para /usuarios/
router.route('/post')
    .get(setImages)


    export default router;