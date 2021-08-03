import { Request, Response, NextFunction } from 'express';

import UserController from '../controllers/user-controller';
import { NotFoundError } from '../utils/common-errors';
import { setResponseRaw } from '../utils/common-response';

export const getUserByIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserController.findById(req);
    if (!user) {
      return next(new NotFoundError('USER_NOT_FOUND', 'the user not exist'));
    }
    return setResponseRaw(res, 200, user);
  } catch (e: any) {
    return next(e);
  }
};
