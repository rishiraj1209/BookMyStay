import User from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:"please enter all fields"});
        }

        const existingUser = await User.findOne({email});

        if(!existingUser){
            return res.status(400).json({message:"user doesn't exist"});
        }

        const isMatch = await bcrypt.compare(password,existingUser.password);

        if(!isMatch){
            return res.status(400).json({message:"please enter a correct password"});
        }

        const token = jwt.sign({id:existingUser._id}, process.env.JWT_SECRET, {expiresIn:"7d"});

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        res.json({message:"login successfull",user:existingUser});
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}

export const signup = async (req,res)=>{
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({message:"please enter all fields"});
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({message:"user already exists"});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            name:name,
            email:email,
            password:hashedPassword
        })

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:"7d"});
        
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.json({message:"signup successfull", user})
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

export const logout = (req,res)=>{
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
}

