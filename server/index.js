import express, { json } from "express";
import dotenv from "dotenv";
import ConnectDB from "./database/connection"
dotenv.config();

const zomato = express();

zomato.use(express.json());

zomato.get(("/") , (req, res) => {
    res.json({
        message: "Server is running",
    });
});

const PORT = 4000;

zomato.listen(PORT, () => {
    // ConnectDB()
    //     .then(() => {
    //         console.log("Successfully Connected to database!!!");
    //     })
    //     .catch((error) => {
    //     console.log("Succes for running but failed to connect ");
    //    console.log(error);
    // });
    console.log("Successfully Connected to database!!!");
});
