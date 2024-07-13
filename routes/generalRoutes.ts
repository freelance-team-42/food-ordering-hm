import express from "express";
import { getFeaturedRestaurants, getFoodCategories } from "../controllers/generalController";

const router = express.Router();

router.get("/featured-restaurants", getFeaturedRestaurants);
router.get("/food-categories", getFoodCategories);


export default router;
