import Transaction from "../model/transactionSchema.js";

const getAllTransaction=async(req,res)=>{
    const transaction_data=await Transaction.find();
    res.send(transaction_data);
}
const createTransaction=async(req,res)=>{
    const newTransaction=new Transaction(req.body);
    await newTransaction.save().then(data=>res.json(data)).catch(err=>res.json(err))
}

const transactionWithAccountId=async (req,res)=>{
    
    const accountId=+req.params.id
    const data=await Transaction.find({"account_id":accountId})
    res.json(data)

}

const getAccountId=async(req,res)=>{
    
    res.json({"message":"fetching data"}) 
}

export {getAllTransaction,createTransaction,transactionWithAccountId,getAccountId} 