import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import connectDB from './configs/db.js';


const app = express();
const PORT = process.env.PORT || 3000;

//database connection
await connectDB();

app.use(express.json());

const allowedOrigins = [
    "http://localhost:5173",
]
app.use(cors({
    origin:allowedOrigins,
    credentials:true
}));

app.get('/',(req,res)=>{
    res.send("server is live....");
})



app.listen(PORT,()=>{
    console.log(`app listening at port ${PORT}`);
})