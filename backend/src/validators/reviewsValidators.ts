import { NextFunction, Response, Request } from 'express';

import { check } from 'express-validator';
import { validateFields } from '../middlewares/validateFields';
const reviewValidator = [
  check('title', 'el titulo es requerido').not().isEmpty(),
  check('image', 'la imagen es requerida').not().isEmpty(),
  check('name', 'el nombre es requerido').not().isEmpty(),
  check('calification', 'la calificacion es requerida').not().isEmpty(),
  check('description', 'la descripcion es requerida').not().isEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    validateFields(req, res, next);
  },
];

export default reviewValidator;
