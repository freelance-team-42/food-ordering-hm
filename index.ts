import "reflect-metadata";
import express from "express";
import router from "./routes";
import { createConnection } from "typeorm";
import bodyParser from "body-parser";
require('dotenv').config();
const app = express();

createConnection({
  type: "mysql",
  host: "srv1417.hstgr.io", // Your MySQL host
  port: 3306, // MySQL port
  username: "u827545168_food_order_hm", // MySQL username
  password: "l8U|gf3!*[e", // MySQL password
  database: "u827545168_food_order_hm", // MySQL database name
  entities: [
    // Specify your entity classes
    "./entities/*.ts",
  ],
  synchronize: true, // Auto-create tables based on entities (only for development)
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
