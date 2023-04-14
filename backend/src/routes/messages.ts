import { Router } from 'express';
import { postItem } from '../controllers/messages.controller';
import { messagetValidator } from '../validators/messageValidator';
const router = Router();

router.post('/', messagetValidator, postItem);

export { router };
