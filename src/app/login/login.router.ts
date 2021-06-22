import { Router } from "express";
import {LoginController} from "../../controller";
import { r } from "../../utils";
export const router: Router = Router();
const model = new LoginController()
router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const data = await model.SeccionInit(body)
    r._200(res, data);
  } catch (err) {
    console.log(err)
    r._400(res, JSON.stringify(err))
  }
});
