const PropertTypes=[
    {
        id:1,
        name:'Apartment',
        number: '10,015,62',
        image:'https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o='
    },
    {
        id:2,
        name:'Hotels',
        number:55,
        image:'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',
    },
    {
        id:3,
        name:'Resort',
        number: 2345,
        image:'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o='
    },
    {
        id:4,   
        name:'Villa',
        number: 2345,
        image:'https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o='
    },
    {
        id:5,
        name:'Cottage',
        number: 2345,
        image:'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o='
    },
    {
        id:6,
        name:'Guest House',
        number: '11,458',
        image:'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&o='
    },
    {
        id:7,
        name:'Hostels',
        number: '11,458',
        image:'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450082.jpeg?k=beb101b827a729065964523184f4db6cac42900c2415d71d516999af40beb7aa&o='
    }
]

const FeaturedHotels=[
    {
        id:1,
        location:'new york',
        cheapest:'1,200',
        image:'https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=',
    },
    {
        id:2,
        location:'delhi',
        cheapest:'900.89',
        image:'https://media.istockphoto.com/id/170455248/photo/active-victoria-rail-station-in-mumbai.webp?b=1&s=170667a&w=0&k=20&c=5xeUYaTX5XYQMnstVEWA4I-VpJMDjxPvzxpFkYKrunA='
    },
    {
        id:3,
        location:'london',
        cheapest:'1,200',
        image:'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:4,
        location:'Singapore',
        cheapest:'1,200',
        image:'https://images.unsplash.com/photo-1508325739122-c57a76313bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:5,
        location:'Paris',
        cheapest:'1,200',
        image:'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:6,
        location:'Tokyo',
        cheapest:'1,200',
        image:'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    }
]

const Featured_Properties=[
    {
        id:1,
        name:'The Apartment by the Sloane Club',
        fullLocation:'Kingesisten and london, United Kingdom',
        cheapest:'11,200',
        rating:9.8,
        quality:'Excellent',
        reviews:'700',
        image:'https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=29a0e9879ac8361539c3dae41f047d383e6fa6917f8f47cb50dad001ada0eae6&o='
    },
    {
        id:2,
        name:'Leman Locke',
        fullLocation:'Tower Hemlets London, United Kingdom',
        cheapest:'6,900',
        rating:9.3,
        quality:'Excellent',
        reviews:'690',
        image:'https://cf.bstatic.com/xdata/images/hotel/square600/74065680.webp?k=2269b6b33c4d7c1d2b25d2964dc984eed76dc648fcd2b9d2073db0da10a1dc3b&o='
    },
    {
        id:3,
        name:'The Z Hotel Piccadilly',
        fullLocation:'Westminster Borough, London, United Kingdom',
        cheapest:'2,200',
        rating:9.0,
        quality:'Very Good',
        reviews:'678',
        image:'https://cf.bstatic.com/xdata/images/hotel/square600/270323047.webp?k=bade09d7901e1282156f13c3b39e3a8b9c8d45170b2f1184565d3fc304c42d70&o='
    },
    {
        id:4,
        name:'Sugar Hotel & Spa',
        fullLocation:'Green Point, Cape Town, South Africa',
        cheapest:'1,800',
        rating:8.9,
        quality:'Very Good',
        reviews:'67',
        image:'https://cf.bstatic.com/xdata/images/hotel/square600/64768746.webp?k=0c33d15be1f0c9ebd0ede9b85565c3233ef836884a40d785dd6b36f9f0f50c04&o='
    },
    {
        id:5,
        name:'VIP Executive Eden Aparthotel',
        fullLocation:'Baixa, Lisbon, Portugal',
        cheapest:'1,400',
        rating:8.3,
        quality:'Good',
        reviews:'87',
        image:'https://cf.bstatic.com/xdata/images/hotel/square600/34405073.webp?k=fec9d1956d8581db5bb623e7e3b3f9129c2e230b21ec428b542a242347526db0&o='
    },
    {
        id:6,
        name:'Hotel Patliputra Continental',
        fullLocation:'Patna, India',
        cheapest:'900.50',
        rating:7.5,
        quality:'Average',
        reviews:'105',
        image:'https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o='
    },
]

const Photos = [
    {
        id:1,
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
        id:2,
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
        id:3,
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
        id:4,
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
        id:5,
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    { 
        id:6,
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
];

const PhotosHotel=[
    {
       image:'https://plus.unsplash.com/premium_photo-1661962739798-0af59dc30d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        image:'https://images.unsplash.com/photo-1543200651-91fc6a469f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        image:'https://images.unsplash.com/photo-1653972233971-8d7852fb815d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
        image:'https://images.unsplash.com/photo-1653974123253-f02cbca98d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
        image:'https://images.unsplash.com/photo-1619524804109-0bea7d7398a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdGVsJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    }
]

export {
    PropertTypes,
    FeaturedHotels,
    Featured_Properties,
    Photos,
    PhotosHotel
};

// const Images = [
//     'http://plaza.coralixthemes.com/plaza/img/slider/img-1.jpg',
//     'https://images.pexels.com/photos/7545500/pexels-photo-7545500.jpeg?auto=compress&cs=tinysrgb&w=800',
// ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);