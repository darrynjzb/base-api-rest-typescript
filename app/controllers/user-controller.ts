import { Request } from 'express';
import { findById } from '../services/user-service';
class UserController {
  public async findById(req: Request) {
    try {
      return await findById(req.params.id);
    } catch (e: any) {
      throw e;
    }
  };
};

export default new UserController();
