import mongoose from "mongoose";

//Function to connect to the mongodb database

export const connectDB=async()=>{
  try{
    mongoose.connection.on("connected",()=>{
      console.log("Database connected");
    });
    await mongoose.connect(process.env.MONGODB_URI,{
      dbName:process.env.MONGODB_DB_NAME || "chat-app"
    });
  }catch(error){
    console.log("MongoDB connection failed:",error.message);
    throw error;
  }
}