import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Hello World", status: 200, from: `Server ${process.env.SERVER_NAME}` });
});

export default routes;