import express from 'express';
import { Router } from 'express';
import { allListings, createListing, deleteListing, editListing, getListing } from '../controllers/listingController.js';
import { isLoggedIn, isOwner } from '../middlewares.js';

const router = Router();

router.get('/', allListings);
router.post('/new',isLoggedIn,createListing);
router.get('/:id', getListing);
router.put('/:id',isLoggedIn,isOwner,editListing);
router.delete('/:id',isLoggedIn,isOwner,deleteListing);

export default router;