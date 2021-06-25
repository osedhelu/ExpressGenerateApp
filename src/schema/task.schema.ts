import { Schema, model } from "mongoose";
// 1. Create an interface representing a document in MongoDB.
export interface Tasks {
  name: string;
  task: string;
}
const schema = new Schema<Tasks>({
  name: { type: String, required: true },
  task: { type: String, required: true },
  usuario: { type: Schema.Types.ObjectId, ref: "users", default: null },
});

export const TaskSchema = model<Tasks>("tasks", schema);
