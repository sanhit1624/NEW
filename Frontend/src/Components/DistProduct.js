import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DistProduct() {
    const[distproducts,setDistproducts]=useState([])
    const distFetcher=async()=>{
        const {data}=await axios.get("/customers/distictProducts");
        setDistproducts(data.distict_products)
        // console.log(distproducts)
    }
    useEffect(()=>{
        distFetcher()

    },[])
  return (
    <div className='flex justify-center items-center'>
    
        <table className=" border-collapse table-auto w-[80%] text-center">
        <caption className="caption-top font-mono">
        <h1>Following Are The List Of Distinct Product</h1>
        </caption>
            <thead>
               <tr>
                <th className='border-2 p-2'>S.No</th>
                <th className='border-2 p-2'>Products</th>
               </tr>
            </thead>
            <tbody>
                {
                    distproducts && distproducts.map((prd,index)=>{
                        return(
                            <tr key={index}>
                                <td className='border-2 p-2'>{index+1}</td>
                                <td className='border-2 p-2'>{prd}</td>
                            </tr>
                        )
                    })
                }

        


            </tbody>
            
        </table>
        

    </div>
  )
}

export default DistProduct