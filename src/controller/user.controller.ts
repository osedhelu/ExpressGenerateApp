import { MessageResponse } from "../interfaces";
import { UserSchema, Users } from "../schema/index.schema";
import { GeneratePassword } from "../utils/password.utils";

export class UserController {
  async add(user: Users): Promise<MessageResponse> {
    console.log(user)
    user.password = await GeneratePassword(user.pass1, user.pass2);
    return {
      ok: true,
      data: await UserSchema.create(user),
    };
  }
  async remove() {}
  async list() {
    try {
      return await UserSchema.find();
    } catch (err) {
      return err;
    }
  }
  async edit(id: any) {}
}
