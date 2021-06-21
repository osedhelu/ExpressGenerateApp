import { Router } from "express";
import { getRoutes } from "./server.status.service";

export const router: Router = Router();

// getStatus
router.get("/", (req, res) => {
  res.status(200).send({
    status: "server is running",
  });
});

// getRoutes
router.get("/routes", (req, res) => {
  const routes = getRoutes();
  res.status(200).send({
    numberOfRoutes: routes.length,
    routes: routes,
  });
});
