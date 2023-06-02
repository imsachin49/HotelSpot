const expres=require('express');
const router=expres.Router();
const {createRoom,getAllRooms,getRoomById,updateRoomById,updateRoomAvailability,deleteRoomById}=require('../controllers/rooms');

const {verifyToken,verifyUser,verifyAdmin}=require('../utilis/verify');

// create a room{hotelId}
router.post('/create/:id',createRoom);

// get all rooms
router.get('/',getAllRooms);

// get a room by id
router.get('/:id',getRoomById);

// update a room by id
router.patch('/:id',verifyAdmin,updateRoomById);

// availablity update
router.patch('/availablity/:id',updateRoomAvailability);

// delete a room by id
router.delete('/:id/:hotelId',verifyAdmin,deleteRoomById);

// export router
module.exports=router;
