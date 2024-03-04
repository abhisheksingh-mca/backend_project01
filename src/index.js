// require('dotenv').config({path: './env'});
import dotenv from "dotenv";

// import mongoose, { mongo } from "mongoose";
// import {DB_NAME} from "constants";
import connectDB from  '../src/db/db.js';

dotenv.config({
    path: './env'
})

connectDB()




/*
import express from "express";
const app = express();

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", () => {

        console.log("Error connecting to MongoDB");
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
       })
    }
    catch(error){
        console.error("Error connecting to the database: ", error);
        throw  error;
    }
})()
*/