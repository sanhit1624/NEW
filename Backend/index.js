import express from "express"
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import cors from "cors"
import { customerRoute,accountRoute, transactionRoute} from "./Router/Routes.js"
import path,{dirname} from 'path'
import { fileURLToPath } from 'url';
const __dirname=dirname(fileURLToPath(import.meta.url))

dotenv.config()

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.CONNECTION);
  console.log("Database Connected Sucessfully :")
}

const app=express();
app.use(cors())
app.use(express.json());
app.use(express.static(path.resolve(process.env.BUILD)))

// Endpoints for Api 
app.use("/customers",customerRoute)
app.use("/accounts",accountRoute)
app.use("/transactions",transactionRoute)
app.use("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"view","index.html"));
})

app.listen(process.env.PORT);