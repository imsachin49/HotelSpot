const User=require('../models/user');

// get all Users
const getAllUsers=async(req,res)=>{
    try {
        const Users=await User.find();
        res.status(200).json({msg:"All Users",Users})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// get User by id
const getUserById=async(req,res)=>{
    try {
        const user=await User.findById(req.params.id);
        res.status(200).json({msg:"User",user})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// update User
const updateUser=async(req,res)=>{
    try {
        const User=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json({msg:"User updated successfully",User})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// delete User
const deleteUser=async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({msg:"User deleted successfully"})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// get by country
const getByCountry=async(req,res)=>{
    try {
        const Users=await User.find({country:req.params.country});
        res.status(200).json({msg:"Users",Users})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// to insert a json file
const insertManyUsers=async(req,res)=>{
    try {
        const Users=await User.insertMany(req.body);
        res.status(200).json({msg:"Users inserted successfully",Users})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

module.exports={getAllUsers,getUserById,updateUser,deleteUser,getByCountry,insertManyUsers}
