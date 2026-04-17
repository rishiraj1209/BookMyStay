import Listing from '../models/listing.js';
import Review from '../models/review.js'

export const createReview = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            return res.status(404).json({ error: 'Listing not found' });
        }

        if (!req.user) {
            return res.status(401).json({ error: 'You must be logged in' });
        }

        const newReview = new Review(req.body);
        newReview.author = req.user._id;
        listing.reviews.push(newReview._id);

        await newReview.save();
        await listing.save();

        return res.status(201).json({ msg: 'Review added successfully' });
    } catch (error) {
        res.status(500).json(error);
    }
}