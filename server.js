import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db.js';
import bio from './src/models/bio.js';

dotenv.config();

const app = express()
const PORT = process.env.PORT;

app.use(express.json());

connectDB()

app.get("/bio", async(req, res)=>{
    try{
         const result = await bio.find({})
    console.log("result", result);
    res.status(200).json({msg : "success", data: result[0]})
    }
    catch(err){
        res.status(500).json({msg: "failed", error: err.message})
    }
   
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})