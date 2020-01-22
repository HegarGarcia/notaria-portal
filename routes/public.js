const { Router } = require("express");
const path = require("path");
const publicRouter = Router();

publicRouter.get("/", (_, res) =>
  res.sendFile("index.html", { root: path.join(__dirname, "../public") })
);

module.exports = publicRouter;
