import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

// app.use(cors()) 
app.use(cors({
    origin : process.env.CORS_ORIGIN , // change this to your own domain if you
    credentials: true 
}))

//get data from  the client side and parse it as a JSON object
app.use(express.json({
    limit:  '20kb'
}))

//get data from URL 
app.use(express.urlencoded({
    extended: true,
    limit: "20kb"
}))

//get file in public folder
app.use(express.static("public"))

//get data from  cookies
app.use(cookieParser())

export default {app}