import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {

    console.log(process.env.MONGO_URI);
  try {
    const conn = await mongoose.connect("mongodb+srv://farhan:farhancodes___0@cluster0.np5osuz.mongodb.net/?appName=Cluster0");

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed");
    process.exit(1);
  }
};

export default connectDB;
