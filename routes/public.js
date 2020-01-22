const { Router } = require("express");
const publicRouter = Router();

publicRouter.get("/", (_, res) => res.render("index.html"));

module.exports = publicRouter;
