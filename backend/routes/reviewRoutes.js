import express from 'express'

import { Router } from 'express'
import { createReview, deleteReview } from '../controllers/reviewController.js';
import { isLoggedIn, isReviewAuthor } from '../middlewares.js';

const router = Router();

router.post('/',isLoggedIn,createReview);
router.delete('/:reviewId',isLoggedIn,isReviewAuthor,deleteReview);


export default router;