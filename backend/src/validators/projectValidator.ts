import { NextFunction, Request, Response } from 'express';
import { check } from 'express-validator';
import { validateFields } from '../middlewares/validateFields';

const projectValidator = [
  check('imageUrl', 'el campo de url es obligatorio').exists().notEmpty(),
  check('alt', 'el campo alt es obligatorio').exists().notEmpty(),
  (req: Request, res: Response, next: NextFunction) =>
    validateFields(req, res, next),
];

export { projectValidator };
