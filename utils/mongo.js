const { MongoClient, ServerApiVersion } = require("mongodb");

const password = encodeURIComponent("ITCTeam1!?");
const uri = `mongodb+srv://rusewru:${password}@nftmarketplace.nui0tz0.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(db, col) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    const database = client.db(db);
    const collection = database.collection(col);

    console.log("mongo connected");

    return collection;
    // await readAndLogCollection();
  } finally {
    // Ensures that the client will close when you finish/error
  }
}

module.exports = run;
