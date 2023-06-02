const User=require('../models/user');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

// register
const register=async(req,res)=>{
    const {username,email,country,img,city,phone,password}=req.body;
    
    if(!username || !email || !password){
        return res.status(400).json({msg:"Please enter all fields"})
    }
    const exist=await User.findOne({email});
    
    if(exist){
        return res.status(400).json({msg:"User already exists"})
    }

    try{
        const salt=await bcrypt.genSalt(10);
        const hash=await bcrypt.hash(password,salt);
        const user=new User({
            ...req.body,
            password:hash
        })
        await user.save();
        res.json({msg:"User created successfully",user})
    }catch(err){
        res.status(500).json({msg:err.message})
    }
}

// login
const login=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({msg:"Please enter all fields"})
    }

    try {
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:"User does not exist"})
        }
        const isMatch=await bcrypt.compare(req.body.password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:"Invalid credentials"})
        }
        const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET);
        const { password, ...otherDetails } = user._doc;
        res.status(200).json({ user: { ...otherDetails}, token});
        // res.cookie("access_token", token, {httpOnly: true}).status(200).json({ user: { ...otherDetails}, token});
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports={register,login}
