import express from "express";
import RestaurantsRouter from "./routes/restaurants.js";
import CuisinesRouter from "./routes/cuisines.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { validate } from "./middlewares/validate.js";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/cuisines", CuisinesRouter);
app.use("/restaurants", RestaurantsRouter);

app.use(errorHandler);

app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (err) => {
    throw new Error(err.message);
  });
