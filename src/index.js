/* Import libraries from dependencies */
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

/* Import routers from src/resources */
const templateRouter = require("./resources/template/router");

const app = express();

/* Setup middleware */
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

/* Setup routes */
app.use("/template", templateRouter);

app.get("*", (req, res) => {
  res.json({ ok: true });
});

/* Initialize a server */

const port = 3030;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
