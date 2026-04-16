import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';
// import reviewRouter from './routes/reviewRoutes.js';
import listingRouter from './routes/listingRoutes.js';


const app = express();
const PORT = process.env.PORT || 3000;

//database connection
await connectDB();

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
    "http://localhost:5173"
]
app.use(cors({
    origin:allowedOrigins,
    credentials:true
}));

app.get('/',(req,res)=>{
    res.send("server is live....");
})

app.use('/api/listings',listingRouter);
// app.use('/api/listings/:id/reviews',reviewRouter);
app.use('/api/auth',userRouter);



app.listen(PORT,()=>{
    console.log(`app listening at port ${PORT}`);
})