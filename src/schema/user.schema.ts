import { Schema, model } from "mongoose";
// 1. Create an interface representing a document in MongoDB.
interface Users {
  name: string;
  email: string;
  avatar?: string;
  password: string
}

const schema = new Schema<Users>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: true},
  avatar: String
});

export const UserSchema = model<Users>("User", schema);
