import { Router } from 'express';
import { getItems, postItem } from '../controllers/proyects.controller';
import { projectValidator } from '../validators/projectValidator';
const router = Router();

router.get('/', getItems);
router.post('/', projectValidator, postItem);

export { router };
