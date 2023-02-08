import express, { json } from "express";
import dotenv from "dotenv";
import ConnectDB from "./database/connection"
import mongoose from "mongoose";
dotenv.config();

const zomato = express();

zomato.use(express.json());

zomato.get(("/") , (req, res) => {
    res.json({
        message: "Server is running",
    });
});

const PORT = 4000;
mongoose.set('strictQuery', false)

zomato.listen(PORT, () => {
    ConnectDB()
        .then(() => {
            console.log("Server is running!!!");
        })
        .catch((error) => {
        console.log("Success for running but failed to connect ");
       console.log(error);
    });
});
