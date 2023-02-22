const mongoose = require("mongoose");
const Schema = mongoose.Schema

const AplicationSchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, 
{ timestamps:  { 
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  } 
})

const AplicationModel = mongoose.model("Aplication", AplicationSchema);


module.exports = {
  AplicationModel
}