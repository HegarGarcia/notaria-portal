const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

app.use(`/guest/s/${process.env.SITENAME}/`, express.static("public"));
app.use("/auth", require("./routes/auth"));

app.listen(3000, () => console.log("Listening"));
