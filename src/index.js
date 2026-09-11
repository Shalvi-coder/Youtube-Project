import connectDB from "./db/index.js";


connectDB()









/*
import express from "express";
const app = express();

;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
        app.on("error", (err)=>{
            console.error("Error connecting to MongoDB:", err);
            throw err;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }
    catch(err){
        console.error("Error connecting to MongoDB:", err);
        throw err;
    }
})()
    */