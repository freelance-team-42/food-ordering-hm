"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const generalController_1 = require("../controllers/generalController");
const router = express_1.default.Router();
router.get("/featured-restaurants", generalController_1.getFeaturedRestaurants);
router.get("/food-categories", generalController_1.getFoodCategories);
exports.default = router;
