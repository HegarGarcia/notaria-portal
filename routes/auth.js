const { Router } = require("express");

const authRouter = Router();
const fetch = require("node-fetch");

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

authRouter.post("/", async (req, res) => {
  const uri = process.env.URI;

  try {
    const loginResponse = await fetch(`${uri}/api/login`, {
      method: "POST",
      body: JSON.stringify({
        username: process.env.USERNAME,
        password: process.env.PASSWORD
      })
    });

    const headers = { cookie: loginResponse.headers.raw()["set-cookie"] };

    await fetch(`${uri}/api/s/${process.env.SITENAME}/cmd/stamgr`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        cmd: "authorize-guest",
        mac: req.headers["x-real-ip"]
      })
    });

    await fetch(`${uri}/api/logout`, {
      method: "POST",
      headers
    });
  } catch (e) {
    console.log(e.error);
    console.log(e.message);
  }

  res.redirect("http://delamadrid.com.mx");
});

module.exports = authRouter;
