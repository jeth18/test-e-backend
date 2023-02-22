const mongoose = require("mongoose");
const Schema = mongoose.Schema

const LogSchema = new Schema({
  application_id: [{
    type: mongoose.Types.ObjectId,
    ref: "Aplication"
  }],
  type: String,
  priority: String,
  path: String,
  message:String,
  request: mongoose.Types.Mixed,
  response: mongoose.Types.Mixed
}, 
{ timestamps:  { 
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  } 
})

const LogModel = mongoose.model("Logs", LogSchema);

module.exports = {
  LogModel
}