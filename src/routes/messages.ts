import express from 'express';
import { homePage } from '../controllers/messageControllers';

const router = express.Router();

router.get("/", homePage);

export default router;