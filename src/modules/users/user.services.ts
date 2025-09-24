import { IUser } from './user.interface.ts';
import { User } from './user.model.ts';

const createUser = async  (payload: Partial<IUser>) => {
  const isAccountExits = await User.find({ email: payload?.email });
  if (isAccountExits) {
    throw new Error('Email already registered');
  }

  const result = await User.create(payload);
  return result;
};

export const userServices = {
  createUser,
};
