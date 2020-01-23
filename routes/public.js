const { Router } = require("express");
const path = require("path");
const publicRouter = Router();

publicRouter.get("/", (req, res) => {
  req.session = {
    id: req.query.id
  };

  res.sendFile("index.html", { root: path.join(__dirname, "../public") });
});

module.exports = publicRouter;
