import { NextFunction, Request, Response } from 'express';
import { DomainError } from '../../utils/common-errors';

export const errorHandlerMiddleware = (err: DomainError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const code = err.code || 'SERVER_ERROR';
  const message = err.message || 'something went wrong';
  return res.status(status).send({ code, message });
}
