import { Router } from "express";
import {
  getItems,
  postItem,
  deleteItem,
} from "../controllers/reviews.controller";
import reviewValidator from "../validators/reviewsValidators";

const router = Router();

router.get("/", getItems);
router.post("/", reviewValidator, postItem);
router.delete("/:id", deleteItem);

export { router };
