import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../utils/common-errors';

export const testMiddleware = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).send({ code:'ok' });
};
