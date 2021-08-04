import { UserModel } from '../database/mongodb/models/user-model';
import IUser from '../interfaces/user-interface'

export const findById = async (id: string) => {
  return await UserModel.findById(id).exec();
};

export const create = async (body: IUser) => {
  const model = new UserModel(body);
  return await model.save();
};

export const update = async (query: object, dataToUpdate: IUser, options = { new: true }) => {
  return await UserModel.findOneAndUpdate(query, dataToUpdate, options).exec();
};
