import { Request, Response, NextFunction } from 'express';

import UserController from '../controllers/user-controller';
import { NotFoundError } from '../utils/common-errors';
import { setResponseRaw } from '../utils/common-response';

export const updateUserByIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserController.update(req);
    if (!user) {
      throw new NotFoundError('USER_NOT_FOUND', 'the user not exist');
    }
    const bRes = { code: 'OK', message: 'user updated succesfully', user }
    return setResponseRaw(res, 200, bRes);
  } catch (e: any) {
    return next(e);
  }
};
