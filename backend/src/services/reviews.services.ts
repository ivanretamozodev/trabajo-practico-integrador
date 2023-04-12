import { Review } from '../interfaces/review.interface';
import ReviewModel from '../models/review.model';

const getAllReviews = async () => {
  const reviews = await ReviewModel.find({});
  return reviews;
};

const createReview = async (data: Review) => {
  const newReview = new ReviewModel(data);
  await newReview.save();
  return newReview;
};

const deleteReview = async (id: string) => {
  const review = await ReviewModel.findByIdAndDelete(id);
  return;
};

export { getAllReviews, createReview, deleteReview };
