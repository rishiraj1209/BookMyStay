import express from 'express';
import { Router } from 'express';
import { allListings, createListing, deleteListing, editListing, getListing } from '../controllers/listingController.js';

const router = Router();

router.get('/', allListings);
router.post('/new',createListing);
router.get('/:id', getListing);
router.put('/:id', editListing);
router.delete('/:id',deleteListing);

export default router;