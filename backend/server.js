import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";



// Access environment variables


dotenv.config();

// Connect to MongoDB



// Initialize Express app
const app = express();


// Middleware

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes

// Test Route
app.get("/",(req,res)=>{
    console.log("Running Successfully")
})


connectDB();
// Start the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})







