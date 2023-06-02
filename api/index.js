const express=require('express')
const app=express();
const dotenv=require('dotenv')
const cors=require('cors')
dotenv.config()
const port=process.env.PORT || 3001
const cookieParser=require('cookie-parser')
const connectDB=require('./db/connectDB')
const authRouter=require('./routes/auth')
const hotelRouter=require('./routes/hotels')
const userRouter=require('./routes/users')
const roomRouter=require('./routes/rooms')
connectDB()

// Middleware
app.use(express.json())
app.use(cors('*'))
app.use(cookieParser())

// Routes
app.use('/api/auth',authRouter)
app.use('/api/hotels',hotelRouter)
app.use('/api/users',userRouter)
app.use('/api/rooms',roomRouter)

// error handler
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
});

// Listen
app.listen(port,()=>
    console.log(`Server running on port ${port}`)
)
