import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Accounts() {
  const [accountsdata, setAccountsdata] = useState([]);
  const [inactive,setInactive]=useState(true)
  const routing=useNavigate()

  
  const dataFetcher = async () => {
    const { data } = await axios.get("/accounts");
    setAccountsdata([...data]);
   
  };

  useEffect(() => {
    dataFetcher();
  }, []);

  const handleClick=()=>{

    const active_users =accountsdata.filter((acc,index)=>acc.active===true)
    setAccountsdata(active_users)
    setInactive(false)

  }
  const handleClick2=()=>{
    setInactive(true)
    dataFetcher();

    

  }
  const accountClick=(e)=>{
    e.stopPropagation()
    routing(`/transaction/${e.target.value}`)
    
  }

  const productNavigator=async()=>{
    routing("/DistProduct");
   
  }

  return (
    <>
   
    <div className="flex justify-center items-center">
      
      <table className=" border-collapse table-auto w-[80%] text-center">
        <caption className="caption-top font-mono">
         {inactive===true?"All Account Details":"Active Account Details"}
        </caption>
        <thead className="border-2">
          <tr>
            <th className="border-2 p-2">Name</th>
            <th className="border-2 p-2">Address</th>
            <th className="border-2 p-2">Accounts</th>
          </tr>
        </thead>
        <tbody>
          {
            accountsdata && accountsdata.map((data,index)=>{
              return(
              <tr key={index}>
                <td className="border-2 p-2">{data.name}</td>
                <td className="border-2 p-2">{data.address}</td>
                <td className="border-2 p-2">{
                  <ul className="list-disc text-center p-2 ml-3">
                    {
                      data.accounts.map((acc,index)=>{
                        return(
                          <li key={index} className="text-center cursor-pointer text-blue-600 font-extrabold" onClick={(e)=>accountClick(e)} value={acc}>{acc}</li>
                        )
                      })
                    }
                  </ul>
            }</td>
              </tr>
              )
            })
            
          }
         
        </tbody>
      </table>
      <div className="absolute top-4 right-2">
      {inactive===true?<button className="border-2 p-4 w-[150px] bg-green-600 rounded-lg text-white " onClick={handleClick}>Active Account</button>:<button className="border-2 p-4 bg-blue-900 rounded-lg w-[150px] text-white " onClick={handleClick2}>All Accounts</button>}
      <br/><button className="border-2 p-4 bg-green-600 w-[150px] rounded-lg text-white" onClick={productNavigator}>Distinct Product</button>
      </div>

      
    </div>
    </>
  );
}

export default Accounts;
