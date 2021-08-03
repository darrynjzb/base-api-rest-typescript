import { Request, Response, NextFunction } from 'express';

import { createSchema } from '../validators/schemas/user-schema';
import { BadRequestError } from '../utils/common-errors';

export const validateBodyCreateUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { error } = createSchema.validate(req.body);
  if (error) {
    throw new BadRequestError('INVALID_BODY', 'the body is not correct');
  }
  return next();
};
