import { Router } from "express";
import { taskController } from "../../controller/task.controller";
import {r} from "../../utils/response.utils";

// Export module for registering router in express app
export const router: Router = Router();

// Define your routes here
router.get("/", async (req, res) => {
  const data = new taskController();

  res.status(200).send({
    data: await data.list(),
  });
});

router.post("/", (req, res) => {
  r._200(res, {ok: true, data: ""})  
});


router.put("/:id", (req, res) => {
  res.status(200).send({
    message: "PUT request from sample router",
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).send({
    message: "DELETE request from sample router",
  });
});
