const mongoose = require("mongoose"); // import mongoose
// extract the schema from that mongoose object
const Schema = mongoose.Schema;
// create a new post schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});
// export the model
module.exports = mongoose.model("User", UserSchema);
