import { Router } from "express";
import { UserController } from "../../controller";
import { middlewareJWT, r } from "../../utils";
export const router: Router = Router();
const model = new UserController();

router.post("/", async (req, res) => {
  try {
    const data = await model.add(req.body);
    r._200(res, data);
  } catch (err) {
    r._400(res, err);
  }
});
router.get("/auth", middlewareJWT, (req: any, res) => {
  r._200(res, {ok: true, data: req.my_data})
});
