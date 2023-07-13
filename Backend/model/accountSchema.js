import mongoose, { Schema } from "mongoose";

const accountSchema = new Schema({
  username: String,
  name: String,
  address: String,
  birthdate: {
    date:{type:String},
  },
  email: String,
  active: Boolean,
  accounts: [Number],
 
});

const Accounts = mongoose.model("Accounts", accountSchema);

export default Accounts;