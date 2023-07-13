import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema({
    
    "account_id": Number,
    "transaction_count": Number,
    "bucket_start_date": {
      "date": {
        "numberLong": String
      }
    },
    "bucket_end_date": {
      "date": {type:String}
    },
    "transactions": [Object]
  });

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;