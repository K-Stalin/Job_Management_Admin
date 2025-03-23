import mongoose from "mongoose";

// Function to connect to the Database

const connectDB = async ()=>{
   
    try {
          const connect = await mongoose.connect(process.env.MONGODB_URI);
          console.log('MongoDB Connected Successfuly');
    } catch (error) {
          console.error("MongoDB Connection failed: ",error)
          process.exit(1)
    }
  

}

export default connectDB;