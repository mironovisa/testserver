const express = require("express");
const app = express();

app.get("/", (req, res) => {

  res.set("Content-Type", "text/html");

  res.send("hey bro");
});

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
