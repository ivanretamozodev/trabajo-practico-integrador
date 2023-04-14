import { NextFunction, Request, Response } from 'express';
import { check } from 'express-validator';
import { validateFields } from '../middlewares/validateFields';

const messagetValidator = [
  check('email', 'debes introducir un email').exists().notEmpty(),
  check('email', 'debes introducir un email valido').isEmail(),
  check('name', 'debes introducir un nombre').exists().notEmpty(),
  check('phone', 'debes introducir un telefono').exists().notEmpty(),
  check('phone', 'debes introducir un numero de telefono valido').isNumeric(),
  check('message', 'debes introducir un mensaje').exists().notEmpty(),

  (req: Request, res: Response, next: NextFunction) =>
    validateFields(req, res, next),
];

export { messagetValidator };
