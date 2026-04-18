import Listing from '../models/listing.js';

export const allListings = async (req,res)=>{
    try{
        const {search, category} = await req.query;
        const filter = {};

        if(search && search.trim() !== " "){
            filter.location = {$regex: search.trim(), $options: "i"};
        }

        if(category && category !== " "){
            filter.category = category;
        }

        const listings = await Listing.find(filter);
        res.json(listings);
    }catch(error){
        res.status(500).json({msg:error.message});
    }
}

export const createListing = async (req,res)=>{
    try{
        const {title, description, price, location,country, image, category} = req.body;
        if(!title || !description || !price || !location || !country || !category){
            return res.status(400).json({message:"please enter all fields"});
        }
        const newListing = await Listing.create({title, description,price, location, country, image, category});
        res.status(201).json({message:"listing created successfully", listing:newListing});
    }catch(error){
        res.status(500).json({error});
    }
}

export const getListing = async (req,res)=>{
    try {
        const {id} = req.params;
        const listing = await Listing.findById(id).populate('owner').populate({path:'reviews',populate:{path:'author',select:'name'},});
        if(!listing){
            return res.status(404).json({message:"listing not found"});
        }
        res.json(listing);
    }catch(error){
        res.status(500).json({msg:error.message});
    }
}

export const editListing = async (req,res)=>{
    try{
        const {id} = req.params;
        const {title, description, price, location,country, image, category} = req.body;
        if(!title || !description || !price || !location || !country || !category){
            return res.status(400).json({message:"please enter all fields to update"});
        }
        const editedListing = await Listing.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({message:"listing updated successfully", listing:editedListing})
    }catch(error){
        res.status(500).json({error});
    }
}

export const deleteListing = async (req,res)=>{
    try {
        const {id} = req.params;
        const listing = await Listing.findByIdAndDelete(id);
        res.status(201).json({message:"listing deleted successfully", listing})
    } catch (error) {
        res.status(500).json({error});
    }
}