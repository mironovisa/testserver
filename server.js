const express = require("express");
const app = express();
const cors = require("cors");
const { verify } = require("./utils/jwt");
require("dotenv").config();
const runMongoDB = require("./utils/mongo");

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

async function checkMongoDBConnection() {
  const databaseName = "NFTMarketPlace";
  const collectionName = "users";

  try {
    const collection = await runMongoDB(databaseName, collectionName);

    console.log("MongoDB connection is OK");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

checkMongoDBConnection().then(() => {
  const port = process.env.PORT || 3002;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
