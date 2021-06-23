import { Schema, model } from "mongoose";
// 1. Create an interface representing a document in MongoDB.
export interface Users {
  name: string;
  email: string;
  password?: string;
  pass1?: string;
  pass2?: string;

}

const schema = new Schema<Users>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export const UserSchema = model<Users>("users", schema);
