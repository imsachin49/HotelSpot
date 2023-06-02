const Room=require("../models/room");
const Hotel=require("../models/hotel");

// create a room
const createRoom = async (req, res) => {
    const hotelId=req.params.id;
    const newRoom=new Room(req.body);
    try {
        const savedRoom=await newRoom.save();
        // const hotel=await Hotel.findById(hotelId);
        // hotel.rooms.push(savedRoom._id);
        // const savedHotel= await hotel.save();
        const updateHotel=await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id}},{new:true});
        res.status(201).json({ message: "Room created successfully", room: savedRoom, hotel: updateHotel});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get all rooms
const getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find().populate("hotel");
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get a room by id
const getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id).populate("hotel");
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update a room by id
const updateRoomById = async (req, res) => {
    try{
        const room=await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(room);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

// update a room  Availablity
const updateRoomAvailability = async (req, res) => {
    try{
        await Room.updateOne(
            {"roomNumbers._id":req.params.id},
            {
                $push:{
                    "roomNumbers.$.unavailableDates":req.body.dates
                }
            }
        )
        res.status(200).json({message:"Room Availablity updated successfully"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

// delete a room by id
const deleteRoomById = async (req, res) => {
    console.log(req.params.id)
    const hotelId=req.params.hotelId;
    try{
        await Room.findByIdAndDelete(req.params.id);
        const updateHotel=await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}},{new:true});
        res.status(200).json({message:"Room deleted successfully",hotel:updateHotel});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports = {
    createRoom,
    getAllRooms,
    getRoomById,
    updateRoomById,
    deleteRoomById,
    updateRoomAvailability
}
