import * as jwt from "jsonwebtoken";
import { r } from "./response.utils";
const SEED_TOKEN = "ScodicsUdyasOcOjIbErjIcNawshichMadOpcupmiact";
export const GenerateToken = (data: any) => {
  return jwt.sign(
    {
      data,
    },
    SEED_TOKEN,
    {
      expiresIn: 10080,
    }
  );
};
export const middlewareJWT = (req: any, res: any, next: any) => {
  const token = req.headers.token;
  console.log(token)
  if (!token) {
    return r._400(res, "necesitas autorizacion");
  }

  return jwt.verify(token, SEED_TOKEN, (err: any, resp: any) => {
    if (resp !== undefined) {
      const { data } = resp;
      if (err) {
        return r._401(res, err);
      } else {
        req.my_data = data;
        next();
      }
    } else {
      return r._401(res, "no hay datos");
    }
  });
};
