import "reflect-metadata";
import express from "express";
import router from "./routes";
import { createConnection } from "typeorm";
import bodyParser from "body-parser";
import cors from 'cors';  // Add this line
require('dotenv').config();

const app = express();

// Add CORS middleware
app.use(cors());  // Add this line

createConnection({
    type: "mysql",
    host: "srv1417.hstgr.io",
    port: 3306,
    username: "u827545168_food_order_hm",
    password: "l8U|gf3!*[e",
    database: "u827545168_food_order_hm",
    entities: [
        "./entities/*.ts",
    ],
    synchronize: true,
})
    .then((connection) => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });

app.use(bodyParser.json());
app.use("/api", router);

const port = process.env.PORT || 5001;
app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
});