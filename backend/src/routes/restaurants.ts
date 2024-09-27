import express from "express";
import { validate } from "../middlewares/validate.js";
import { RestaurantSchema, type Restaurant } from "../schemas/restaurant.js";
import { type Request, type Response } from "express";
import { initRedisClient } from "../utils/client.js";

const RestaurantsRouter = express.Router();

RestaurantsRouter.post(
  "/",
  validate(RestaurantSchema),
  async (req: Request, res: Response) => {
    const restaurant: Restaurant = req.body;

    const client = await initRedisClient();
  }
);

export default RestaurantsRouter;
