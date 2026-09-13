import connectDB from "./db/index.js";
import express from "express";
const app = express();


connectDB().
// then(()=>{
//     app.on("error", (err)=>{
//         console.error("Error connecting to MongoDB:", err);
//         throw err;
//     })
// }
// ).
then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        if(!process.env.PORT){
            console.log("PORT is not defined in .env file, using default port 8000");
        }
        else console.log(`Server is running on port ${process.env.PORT}`);
    })
}
).
catch((err)=>{
    console.log("Mongo db connection failed !!", err)
})









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