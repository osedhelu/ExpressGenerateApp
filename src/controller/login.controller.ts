import { MessageResponse } from "../interfaces";
import { Users, UserSchema } from "../schema/index.schema";
import { GenerateToken, validatePassword } from "../utils";

export class LoginController {
  async SeccionInit(user: Users): Promise<MessageResponse> {

    const data = await UserSchema.findOne({ email: user.email });

    console.log(user);
    if (!data) {
      return { ok: false, message: "Error al iniciar Seccion --- usuario" };
    } else {
      await validatePassword(data.password, user.password);
      data.password = "";
      return { ok: true, data, token: await GenerateToken(data) };
    }
  }
}
