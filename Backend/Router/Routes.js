import  express from "express";
import { createCustomer, distinctProduct, getCustomer } from "../controller/customer.js";
import { createAccount,getAllAccounts } from "../controller/account.js";
import {  getAccountId, getAllTransaction, transactionWithAccountId } from "../controller/transaction.js";

//Customer Router
const customerRoute=express.Router();
const accountRoute=express.Router();
const transactionRoute=express.Router();

// Customer Router
customerRoute.get("/distictProducts", distinctProduct).post("/",createCustomer)

// Account Router
accountRoute.get("/",getAllAccounts).post("/",createAccount)

// Transaction Router
transactionRoute.get("/",getAllTransaction).get("/:id",transactionWithAccountId).get("/accountId",getAccountId)

export {customerRoute,accountRoute,transactionRoute};