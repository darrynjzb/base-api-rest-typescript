import { UserModel } from '../database/mongodb/models/user-model';

export const findById = async (id: string) => {
  return await UserModel.findById(id).exec();
};
