import { model, Schema } from 'mongoose';

import IUser from '../../../interfaces/user-interface';
import { USER_STATUS } from '../../../utils/constants';

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    document: { type: String, required: true },
    email: { type: String, required: true },
    birthdate: { type: Date, required: true },
    status: { type: String, default: 'active', enum: USER_STATUS, required: true }
  },
  {
    collection: 'users'
  }
);

UserSchema.index({ email: 1, username: 1, document: 1 }, { unique: true });

const UserModel = model<IUser>('User', UserSchema);
export { UserModel };
