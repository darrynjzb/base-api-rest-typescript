import { Request } from 'express';
import { findById, create } from '../services/user-service';
class UserController {
  public async findById(req: Request) {
    try {
      return await findById(req.params.id);
    } catch (e) {
      throw e;
    }
  };

  public async create(req: Request) {
    try {
      return await create(req.body);
    } catch (e) {
      throw e;
    }
  };
};

export default new UserController();
