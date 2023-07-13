import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function Transaction() {
  const value = useParams();
  const [transaction, setTransaction] = useState([]);

  const transactionFetcher = async () => {
    const { data } = await axios.get(`/transactions/${+value.id}`);
   
    setTransaction(data[0].transactions);
    
  };

  useEffect(() => {
    transactionFetcher();
  },[value.id]);
  return (
    <div className="w-full flex justify-center items-center">
      <table className=" border-collapse table-auto w-[80%] text-center">
        <caption className="caption-top font-mono">
         <h1>Transaction Details Of {value.id} </h1> 
        </caption>
        <thead className="border-2">
          <tr>
            <th className="border-2 p-2">S.No</th>
            <th className="border-2 p-2">Date & Time</th>
            <th className="border-2 p-2">Amount</th>
            <th className="border-2 p-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {
            transaction && transaction.map((trn,index)=>{
              return(
                <tr key={index+1}>

                  <td className="border-2 p-2">{index+1}</td>
                  <td className="border-2 p-2">{trn.date}</td>
                  <td className="border-2 p-2">{trn.amount}</td>
                  <td className="border-2 p-2">{trn.transaction_code}</td>
                </tr>
              )
            })

          }
         
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
