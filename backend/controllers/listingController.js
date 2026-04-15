import Listing from '../models/listing';

export const index = async(req,res)=>{
    try {
        const allListings = await Listing.find();
        res.status(200).json({
            success:true,
            data:allListings
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "failed to fetch Listings"
        })
    }
}

export const showListing = async(req,res)=>{
    try {
        let {id} = req.params;
        const listing = await Listing.findbyId(id)
    } catch (error) {
        
    }
}

