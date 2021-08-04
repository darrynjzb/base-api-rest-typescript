import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../utils/common-errors';

export const checkLengthUserIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  if (id.length < 24) {
    throw new BadRequestError('INVALID_LENGTH_ID', 'the id length is invalid');
  }
  return next();
};
