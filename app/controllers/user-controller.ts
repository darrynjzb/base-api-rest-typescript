import { Request } from 'express';
import { findById } from '../services/user-service';

class UserController {
  public async findById(req: Request) {
    try {
      const user = await findById(req.params.id);
      return user;
    } catch (e: any) {
      throw e;
    }
  };
};

export default new UserController();

