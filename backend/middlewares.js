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