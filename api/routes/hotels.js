const expres=require('express');
const router=expres.Router();
const {
    createHotel,
    getAllHotels,
    getHotels,
    getHotelById,
    updateHotel,
    deleteHotel,
    addOrRemoveLike,
    getByCountry,
    insertManyHotels,
    getByCityName,
    getByType,
    getHotelRooms
}=require('../controllers/hotels');
const {
    verifyToken,
    verifyAdmin
}=require('../utilis/verify');

// create a hotel
router.post('/create',createHotel);

// get all hotels
router.get('/',getAllHotels);

// get hotels
router.get('/getHotels',getHotels);

// get hotel by id
router.get('/find/:id',getHotelById);

// update hotel
router.put('/:id',updateHotel);

// delete hotel
router.delete('/:id',deleteHotel);

// like/dislike hotel
router.put('/like/:id',verifyToken,addOrRemoveLike);

// get by country
router.get('/country',getByCountry);

// insert many hotels
router.post('/hotels',insertManyHotels); 

// get by CityName
router.get('/countByCity',getByCityName)

// get count bt Type
router.get('/countByType',getByType)

// get hotel-rooms
router.get('/room/:id',getHotelRooms)

module.exports=router;
