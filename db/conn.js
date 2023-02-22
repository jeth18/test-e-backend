require('dotenv').config()
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const mongoDB = `mongodb://${process.env.PORTDB}/${process.env.DBNAME}`

try {
  async function conn() {
    await mongoose.connect(mongoDB)
  }
  conn()
} catch (err) {
  console.log(err)
}