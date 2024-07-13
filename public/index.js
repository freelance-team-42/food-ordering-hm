"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const typeorm_1 = require("typeorm");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors")); // Add this line
require('dotenv').config();
const app = (0, express_1.default)();
// Add CORS middleware
app.use((0, cors_1.default)()); // Add this line
(0, typeorm_1.createConnection)({
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
app.use(body_parser_1.default.json());
app.use("/api", routes_1.default);
const port = process.env.PORT || 5001;
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server running on port ${port}`);
}));
