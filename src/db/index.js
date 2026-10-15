import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
        console.log(connectionInstance);
        console.log(`MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(err){
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit the process with a failure code
    }
}

export default connectDB;