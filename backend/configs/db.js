import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        mongoose.connection.on("connected",()=>{console.log("Database connected successfully")});
        let mongodbURI = process.env.MONGODB_URI;

        if(!mongodbURI){
            throw new Error("MONGODB_URI environment variable not set");
        }
        if(mongodbURI.endsWith('/')){
            mongodbURI = mongodbURI.slice(0, -1)
        }
        await mongoose.connect(mongodbURI,{
            dbName:"bookMyStay"
        });
    } catch (error) {
        console.log("error connecting to mongodb database",error);
    }
}

export default connectDB