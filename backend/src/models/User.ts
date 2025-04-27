import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  passwordHash: string;
  location?: string;
  farms?: number;
  dni?: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true },
    location: String,
    farms: Number,
    dni: String,
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const User = model<IUser>("User", UserSchema);
