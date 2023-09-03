const { ObjectId } = require("mongodb");
const run = require("../utils/mongo")

class DBmongo {
  constructor(database, collection) {
    this.database = database;
    this.collection = collection;
  }

  get = async () => {
    console.log('howsit working');
    const cols = await run(this.database, this.collection);
    console.log("here");
    const resp = await cols.find().toArray();
    console.log("here2");
    return resp;
  };

  getById = async (userId) => {
    const cols = await run(this.database, this.collection);
    const resp = await cols.findOne({ _id: new ObjectId(userId) });
    return resp;
  };

  findUserByEmailService = async (email) => {
    const cols = await run(this.database, this.collection);
    const resp = await cols.findOne({ email: email });
    return resp
  }

  addNewUserService = async (user, hash) => {

    user.password = hash

    const cols = await run(this.database, this.collection);
    const resp = await cols.insertOne(user)
    return resp;
  }

  findCollectionLengthService = async () => {
    const cols = await run(this.database, this.collection);
    const resp = await cols.countDocuments({});
    return resp
  }

  updateUserService = async (userId, user) => {
    const cols = await run(this.database, this.collection);
    const find = await cols.findOne({ _id: new ObjectId(userId) });
    console.log(find, 'finddd');
    const resp = await cols.updateOne(
      { _id: new ObjectId(userId) },
      {
          $set: user
      }
  )
  return resp;
  }

  deleteUserService = async (userId) => {
    const cols = await run(this.database, this.collection);
    const resp = await cols.deleteOne({ _id: new ObjectId(userId) });
    return resp
  }
}


module.exports = DBmongo;
