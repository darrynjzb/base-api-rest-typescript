import { Request, Response, NextFunction } from 'express';

import UserController from '../controllers/user-controller';
import { setResponseWithOk } from '../utils/common-response';

export const createUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await UserController.create(req);
    return setResponseWithOk(res, 201, 'user created successfully');
  } catch (e) {
    return next(e);
  }
};
