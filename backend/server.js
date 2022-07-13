import express from "express";
import morgan from "morgan";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();

const port = process.env.PORT || 5000;
const app = express();

app.use(morgan("server"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
