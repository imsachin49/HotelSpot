const Hotel=require('../models/hotel');
const Room=require('../models/room');

// create hotel
const createHotel=async(req,res)=>{
    try {
        const hotel=new Hotel(req.body);
        await hotel.save();
        res.status(200).json({msg:"Hotel created successfully",hotel})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// get all hotels
const getAllHotels=async(req,res)=>{
    console.log("hello");
    try {
        const hotels=await Hotel.find();
        res.status(200).json({msg:"All hotels",hotels})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const getHotels = async (req, res, next) => {
    console.log(req.query)
    const { min, max, ...others } = req.query;
    try {
      const hotels = await Hotel.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
};

// get hotel by id
const getHotelById=async(req,res)=>{
    try {
        const hotel=await Hotel.findById(req.params.id);
        res.status(200).json({msg:"Hotel",hotel})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// update hotel
const updateHotel=async(req,res)=>{
    try {
        const hotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json({msg:"Hotel updated successfully",hotel})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// delete hotel
const deleteHotel=async(req,res)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json({msg:"Hotel deleted successfully"})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// like/dislike hotel:-
const addOrRemoveLike=async(req,res)=>{
    try {
        const hotel=await Hotel.findById(req.params.id);
        if(hotel.likes.includes(req.user.id)){
            await hotel.updateOne({$pull:{likes:req.user.id}},{new:true});
            res.status(200).json({msg:"Hotel removed from likes"})
        }else{
            await hotel.updateOne({$push:{likes:req.user.id}},{new:true});
            res.status(200).json({msg:"Hotel added to likes"})
        }
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// get by country
const getByCountry=async(req,res)=>{
    try {
        const hotels=await Hotel.find({country:req.params.country});
        res.status(200).json({msg:"Hotels",hotels})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// to insert a json file
const insertManyHotels=async(req,res)=>{
    try {
        const hotels=await Hotel.insertMany(req.body);
        res.status(200).json({msg:"Hotels inserted successfully",hotels})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// get count by CityName
const getByCityName=async(req,res)=>{
    const cities=req.query.cities.split(',');
    console.log(cities)
    try {
        // to use regex we need to use find() instead of countDocuments()
        const list=await Promise.all(cities.map(async(city)=>{
            // return await Hotel.countDocuments({city:city});
            return (await Hotel.find({city:{$regex:city,$options:'i'}})).length;
        }))
        res.status(200).json({msg:"Hotels",list})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// get count by Type
const getByType=async(req,res)=>{
    try {
        const hotelCount=await Hotel.countDocuments({type:"Hotel"});
        console.log(hotelCount)
        const villaCount=await Hotel.countDocuments({type:"Villa"});
        const hostelCount=await Hotel.countDocuments({type:"Hostel"});
        const guestHouseCount=await Hotel.countDocuments({type:"Guest house"});
        const apartmentCount=await Hotel.countDocuments({type:"Apartment"});
        res.status(200).json([
            {type:"Hotel",count:hotelCount},
            {type:"Villa",count:villaCount},
            {type:"Hostel",count:hostelCount},
            {type:"Guest house",count:guestHouseCount},
            {type:"Apartment",count:apartmentCount} 
        ])
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// get 
const getHotelRooms=async(req,res)=>{
    try {
        const hotel=await Hotel.findById(req.params.id);
        const rooms=await Promise.all(hotel.rooms.map(room=>{
            return Room.findById(room)
        }))
        res.status(200).json({msg:"Hotel Rooms",rooms})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

module.exports={createHotel,getAllHotels,getHotels,getHotelById,updateHotel,deleteHotel,addOrRemoveLike,getByCountry,insertManyHotels,getByCityName,getByType,getHotelRooms}
