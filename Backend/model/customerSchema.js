import mongoose ,{Schema} from "mongoose";

const customerSchema=new Schema(
    {
        "account_id": Number,
        "limit": Number,
        "products": [
          String
        ]
      }
)

const Customers=mongoose.model("Customers",customerSchema)

export default Customers