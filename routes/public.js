const { Router } = require("express");
const publicRouter = Router();

publicRouter.get("/", (_, res) => res.sendFile("index.html"));

module.exports = publicRouter;
