const mongoose = require("mongoose");
const Schema = mongoose.Schema

const AuthorizationSchema = new Schema({
  application_id: [{
    type: mongoose.Types.ObjectId,
    ref: "Aplication"
  }],
  token: {
    type: String,
    required: true
  }
}, 
{ timestamps:  { 
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  } 
})

const AuthorizationModel = mongoose.model("Authorization", AuthorizationSchema);

module.exports = {
  AuthorizationModel
}