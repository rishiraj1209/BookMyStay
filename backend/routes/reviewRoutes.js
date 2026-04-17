import express from 'express'

import { Router } from 'express'
import { createReview } from '../controllers/reviewController.js';
import { isLoggedIn } from '../middlewares.js';

const router = Router({ mergeParams: true });

router.post('/',isLoggedIn,createReview);


export default router;