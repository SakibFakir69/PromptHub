import mongoose from 'mongoose';
import { IUser } from './user.interface.ts';

const { Schema } = mongoose;
// import z from 'zod';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },

    password: { type: String, required: true, min: [6, 'Must be 6 chracter'] },

    photo: { type: String, required: true },
    bio: { type: String },
    followers: { type: Number },
    following: { type: Number },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>('user', userSchema);
