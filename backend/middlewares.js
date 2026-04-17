import Listing from "./models/listing.js";
import Review from "./models/review.js";
import jwt from 'jsonwebtoken'

export const isLoggedIn = (req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({msg:"you must be logged in"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({msg:"Invalid token"});
    }
}

export const isOwner = async (req,res,next) => {
    try {
        const {id} = req.params;
        const listing = await Listing.findById(id);
        if(!listing){
            return res.status(404).json({error:"Listing not found"});
        }

        if(listing.owner.equals(req.user._id)){
            return next();
        }

        return res.status(403).json({msg:"forbidden"});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}

export const isReviewAuthor = async (req,res,next) => {
    try {
        const {reviewId} = req.params;
        const review = await Review.findById(reviewId);
        if(!review){
            return res.status(404).json({msg:"cannot find the review"})
        }

        if(review.author.equals(req.user._id)){
            return next();
        }

        return res.status(403).json({error:"forbidden"});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}