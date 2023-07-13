import Accounts from "../model/accountSchema.js";

const getAllAccounts=async(req,res)=>{
    const account_data=await Accounts.find();
    res.json(account_data);
}

const createAccount=async(req,res)=>{
   const newAccount=new Accounts(req.body)

   newAccount.save().then((data)=>{
    res.json(data);
   }).catch((err)=>{
    res.json(err)
   })
}

export {getAllAccounts,createAccount};