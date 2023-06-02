const expres=require('express');
const router=expres.Router();
const {
    createHotel,
    getAllHotels,
    getHotels,
    getHotelById,
    updateHotel,
    deleteHotel,
    getByCountry,
    insertManyHotels,
    getByCityName,
    getByType,
    getHotelRooms
}=require('../controllers/hotels');

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
