import { Schema, model } from "mongoose";
// 1. Create an interface representing a document in MongoDB.
interface Tasks {
  name: string;
  email: string;
  avatar?: string;
}

const schema = new Schema<Tasks>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});

export const TaskSchema = model<Tasks>("User", schema);
