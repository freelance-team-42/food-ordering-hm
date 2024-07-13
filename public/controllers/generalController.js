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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoodCategories = exports.getFeaturedRestaurants = void 0;
const Restaurant_1 = require("../entities/Restaurant");
const typeorm_1 = require("typeorm");
const FoodCategory_1 = require("../entities/FoodCategory");
const getFeaturedRestaurants = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("hello 123");
        const restaurantRepository = (0, typeorm_1.getRepository)(Restaurant_1.Restaurant);
        const result = yield restaurantRepository.find();
        return response.status(200).send(result);
    }
    catch (err) {
        return response.status(500).send(err);
    }
});
exports.getFeaturedRestaurants = getFeaturedRestaurants;
const getFoodCategories = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryRepository = (0, typeorm_1.getRepository)(FoodCategory_1.FoodCategory);
        const result = yield categoryRepository.find();
        return response.status(200).send(result);
    }
    catch (err) {
        return response.status(500).send(err);
    }
});
exports.getFoodCategories = getFoodCategories;
