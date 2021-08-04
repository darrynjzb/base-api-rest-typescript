import { Request } from 'express';
import { findById, create, update } from '../services/user-service';
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

  public async update(req: Request) {
    try {
      const query = { _id: req.params.id };
      return await update(query, req.body);
    } catch (e) {
      throw e;
    }
  };
};

export default new UserController();
