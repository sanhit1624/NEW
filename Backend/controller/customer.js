import Customers from "../model/customerSchema.js";

const getCustomer=async (req,res)=>{
    const dataResponse= await Customers.find();
    res.json(dataResponse);
}

const createCustomer=async (req,res)=>{
    const newCustomer=new Customers(req.body)
    console.log(req.body)

    newCustomer.save().then((data)=>{
        res.json(data);
      }).catch((err)=>{
        // const error=JSON.parse(err)
        res.json(err)
      })
}
const distinctProduct=async(req,res)=>{
  const distinct_product=await Customers.distinct("products");
  res.json({"distict_products":distinct_product})
}

export {getCustomer,createCustomer,distinctProduct}