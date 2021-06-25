import { MessageResponse } from "../interfaces";
import { Tasks, TaskSchema } from "../schema/index.schema";

export class taskController {
  async add(task: Tasks): Promise<MessageResponse> {
    return {
      ok: true,
      data: await TaskSchema.create(task),
    };
  }
  async remove(id: any): Promise<MessageResponse> {
    try {
      await TaskSchema.findOneAndRemove({ _id: id });
      return {
        ok: true,
        message: "Eliminado",
      };
    } catch (err) {
      return {
        ok: false,
        message: "error al eliminar esta tarea",
      };
    }
  }
  async list(id: any): Promise<MessageResponse> {
    console.log(id);
    try {
      return {
        ok: true,
        data: await TaskSchema.find({ usuario: id }),
      };
    } catch (err) {
      return {
        ok: false,
        message: "Error al listar las tarea",
        data: []
      };
    }
  }
  async edit(id: any) {}
}
