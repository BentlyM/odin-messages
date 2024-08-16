import express from 'express';
import { homePage, newMessage } from '../controllers/messageControllers';

const router = express.Router();


router.get("/", homePage);

router.get("/new", newMessage);
router.post("/new", newMessage);

export default router;