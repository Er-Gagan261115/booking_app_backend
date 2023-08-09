import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser"
const app = express();
dotenv.config()
const connect = async ()=>{
try{
    await mongoose.connect(process.env.MONGO)
    console.log("connected to mongodb")
}catch (error){
throw error
}
}
// these 2 below functions try to connect again if some problem is encountered but initial connection is successful
mongoose.connection.on("disconnected",()=>{
    console.log("disconnected")
})
// mongoose.connection.on("connected",()=>{
//     console.log("connected")
// })

//middlewares
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)


// app.use((req,res,next)=>{
//      res.json("error from handler")
// })
//Special type of middleware beacasuse error is here and order is also important
app.use((err,req,res,next)=>{
    const errorStatus = err.status|| 500;
    const errorMessage = err.message || "Something went wrong!" ;
    return  res.status(errorStatus).json({
        success: false,
        status:errorStatus,
        message:errorMessage,
        stack: err.stack
    })
})
app.listen(8800, ()=>{
    connect()
    console.log("connected to backend!");
})