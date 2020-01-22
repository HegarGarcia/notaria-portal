const { Router } = require("express");
const path = require("path");
const publicRouter = Router();

publicRouter.get("/", (_, res) =>
  res.sendFile(path.join("..", "public", "index.html"))
);

module.exports = publicRouter;
