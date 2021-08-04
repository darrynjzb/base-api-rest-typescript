import { Request, Response, NextFunction } from 'express';

import UserController from '../controllers/user-controller';
import { NotFoundError } from '../utils/common-errors';
import { setResponseWithOk } from '../utils/common-response';

export const deleteUserByIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserController.remove(req);
    if (!user) {
      throw new NotFoundError('USER_NOT_FOUND', 'the user not exist');
    }
    return setResponseWithOk(res, 200, 'user deleted succefully');
  } catch (e: any) {
    return next(e);
  }
};
