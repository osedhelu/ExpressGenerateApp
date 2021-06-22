import {MessageResponse} from "../interfaces";
import { Tasks, TaskSchema } from "../schema/index.schema";

export class taskController {
  async add(task: Tasks): Promise<MessageResponse> {
    try {
      return {
        ok: true,
        data: await TaskSchema.create(task),
      };
    } catch (err) {
      return { ok: false, message: "hay un error al guardar el dato" };
    }
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
  async list(): Promise<MessageResponse> {
    try {
      return {
        ok: true,
        data: await TaskSchema.find(),
      };
    } catch (err) {
      return {
        ok: false,
        message: "Error al listar las tarea",
      };
    }
  }
  async edit(id: any) {

  }
}
