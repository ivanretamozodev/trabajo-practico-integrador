import { Request, Response } from "express";
import { handleHttp } from "../utilities/handle-http";
import {
  getAllReviews,
  createReview,
  deleteReview,
} from "../services/reviews.services";

const getItems = async (req: Request, res: Response) => {
  try {
    const reviews = await getAllReviews();
    return res.status(200).json({ success: true, reviews });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const review = await createReview(body);
    return res.status(200).json({ success: true, review });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const review = await deleteReview(id);
    return res
      .status(200)
      .json({ success: true, message: "testimonio borrado correctamente" });
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM", e);
  }
};

export { getItems, postItem, deleteItem };
