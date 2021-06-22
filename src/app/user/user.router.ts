import { Router } from "express";
import {UserController} from "../../controller";
import {r} from "../../utils";
export const router: Router = Router();
const model = new UserController()

router.post("/", async(req, res) => {
  try {
    const data = await model.add(req.body)
    r._200(res, data)
  }catch(err) {
    r._400(res, err)
  } 
});
