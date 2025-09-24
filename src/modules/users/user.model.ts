import mongoose from 'mongoose';
import { IUser } from './user.interface.ts';
const { Schema } = mongoose;



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const userSchema = new Schema<IUser>({

    name:{type:String, required:true}


},{timestamps:true});

export const User= mongoose.model<IUser>('user',userSchema);