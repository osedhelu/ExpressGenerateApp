import { Schema, model } from "mongoose";
// 1. Create an interface representing a document in MongoDB.
interface Tasks {
  name: string;
  desacription: string;
}
const schema = new Schema<Tasks>({
  name: { type: String, required: true },
  desacription: { type: String, required: true },
});

export const TaskSchema = model<Tasks>("Task", schema);
