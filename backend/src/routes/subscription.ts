import { Router } from 'express';
import { postItem } from '../controllers/subscription.controller';
import subcriptionValidator from '../validators/subscriptionValidators';

const router = Router();

router.post('/', subcriptionValidator, postItem);

export { router };
