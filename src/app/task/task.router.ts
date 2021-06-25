import { Router } from "express";
import { taskController } from "../../controller";
import { r } from "../../utils";
const model = new taskController();
// Export module for registering router in express app
export const router: Router = Router();

// Define your routes here
router.get("/:id", async (req, res) => {
  const data = await model.list(req.params.id);
  r._200(res, data);
});

router.post("/", async (req, res) => {
  try {
    const task = req.body;
    console.log(task);
    const data = await model.add(task);
    r._200(res, data);
  } catch (err) {
    r._400(res, err);
  }
});

router.put("/:id", (req, res) => {
  try {
    const id = req.params;
    const body = req.body;
    r._200(res, { ok: true, data: body });
  } catch (err) {
    r._400(res, err);
  }
});

router.delete("/:id", (req, res) => {
  res.status(200).send({
    message: "DELETE request from sample router",
  });
});
