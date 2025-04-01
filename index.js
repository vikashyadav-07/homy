import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app=express();

const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(PORT ,()=>{
console.log(`server is listening on port ${PORT}`);
});