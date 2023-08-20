import mongoose from "mongoose";
import express from "express";
const app = express();
import dotenv from "dotenv";

dotenv.config();

app.use("/",(req,res) =>{
    res.send("<h1>welcome to the world</h1>")
})

// port
const port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})