import mongoose, { Schema, set } from "mongoose";

const defaultImage = "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const listingSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image:{
        type:String,
        default:defaultImage,
        set:(v)=>(v==="" || v==null ? defaultImage:v)
    },
    price:Number,
    location:String,
    country:String,
    reviews:[{
            type:Schema.Types.ObjectId,
            ref:"Review",
        }   
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

const Listing = mongoose.model("Listing",listingSchema);
export default Listing;