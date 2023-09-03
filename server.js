const express = require("express");
const app = express();
const cors = require("cors");
const { verify } = require("./utils/jwt");
require("dotenv").config();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");

  res.send("hey bro");
});

app.use("/auth", require("./routes/auth.route"));

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
