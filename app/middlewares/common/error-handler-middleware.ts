import { NextFunction, Request, Response } from 'express';

import { DomainError } from '../../utils/common-errors';
import IError from '../../interfaces/error-interface';

const getMongoErrors = (err: DomainError): IError => {
  let status = 500;
  let code = 'MONGO_ERROR';
  let message = 'error from mongo';
  // duplicate key
  if ((err.code).toString() === '11000') {
    status = 400;
    code = 'DUPLICATE_MONGO_DOCUMENT';
    message = 'duplicate key error collection';
  }
  return {
    status,
    code,
    message
  }
};

export const errorHandlerMiddleware = (err: DomainError, req: Request, res: Response, next: NextFunction): Response => {
  let status = err.status || 500;
  let code = (err.code).toString();
  let message = err.message;
  if (err.name === 'MongoError') {
    const mongoErrors = getMongoErrors(err);
    status = mongoErrors.status;
    code = mongoErrors.code;
    message = mongoErrors.message;
  }
  return res.status(status).send({ code, message });
}
