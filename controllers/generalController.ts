import { RequestHandler } from "express";
import { Restaurant } from "../entities/Restaurant";
import { getRepository } from "typeorm";
import { FoodCategory } from "../entities/FoodCategory";

export const getFeaturedRestaurants: RequestHandler = async (request:any, response) => {  try {
    console.log("hello 123")
    const restaurantRepository = getRepository(Restaurant);
    const result = await restaurantRepository.find();
    return response.status(200).send(result);
  } catch (err) {
    return response.status(500).send(err);
  }
};

export const getFoodCategories: RequestHandler = async (request:any, response) => {  try {
    const categoryRepository = getRepository(FoodCategory);
    const result = await categoryRepository.find();
    return response.status(200).send(result);
  } catch (err) {
    return response.status(500).send(err);
  }
};