import { Request, Response, NextFunction } from 'express';

import UserController from '../controllers/user-controller';
import { setResponseRaw } from '../utils/common-response';

export const createUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserController.create(req);
    const bRes = { code: 'OK', message: 'user created successfully', user }
    return setResponseRaw(res, 201, bRes);
  } catch (e) {
    return next(e);
  }
};
