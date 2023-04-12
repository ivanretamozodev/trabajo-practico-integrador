import { NextFunction, Response, Request } from 'express';
import { check } from 'express-validator';
import { validateFields } from '../middlewares/validateFields';

const subcriptionValidator = [
  check('email', 'el campo email no puede estar vacio').not().isEmpty(),
  check('email', 'ingrese un email valido').isEmail(),
  (req: Request, res: Response, next: NextFunction) => {
    validateFields(req, res, next);
  },
];

export default subcriptionValidator;
