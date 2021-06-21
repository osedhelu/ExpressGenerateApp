import {TaskSchema} from "../schema/task.schema";

export class taskController {
  async add() {

  }
  async remove() {

  }
  async list () {
    try {
      return await TaskSchema.find()
    }catch(err) {
      return err
    }
  }
  async edit(id: any) {

  }
}
