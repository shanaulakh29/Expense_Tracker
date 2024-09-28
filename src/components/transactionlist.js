import React from 'react'

import {getalltransactions,removetransaction} from './transactionlistslice.js'
import { useSelector ,useDispatch} from 'react-redux';
function TransactionList(){
    const dispatch=useDispatch();
    let alltransactions=useSelector(getalltransactions);
    function handleclick(index)
    {
        dispatch(removetransaction(index))
    }
  return (
    <div className="mx-auto m-4 flex flex-col items-center ">
      <h3 className="text-3xl tracking-widest text-blue-900 decoration-wavy decoration-blue-500 underline mb-2 shadow-lg dark:text-blue-500 dark:decoration-blue-900">History</h3>
 
      <ul className={`block  w-full md:w-1/2  text-white dark:text-black dark:bg-white bg-black ${alltransactions.length===0?'p-0':'p-6'}` }>
        {
        alltransactions.map((transaction, index)=>{
         
        return (<React.Fragment key={index}>
            <li className="flex justify-between mb-2 pt-2" >
            {console.log(transaction.type ,transaction.parsedAmount)}
            <div>Transaction Type: <span className=" text-blue-500 font-bold">{transaction.type} </span>
                <div> Transaction amount: <sapn className={` font-bold ${transaction.parsedAmount>0?"text-green-500":"text-red-500"}`}>${transaction.parsedAmount}</sapn></div>
            </div>
            <div className=" flex"><button className=" items-center text-xl border rounded-full px-2 hover:text-black hover:bg-white dark:hover:bg-black dark:hover:text-white" onClick={()=>{handleclick(index);}}>X</button></div>
           </li>
           <hr/>
           </React.Fragment>);;;
           
      
        })
        }
        
      
      </ul>
    </div>
  )
}

export default TransactionList
//  <li>{transactiontype} <span>{transactionamount}</span><button className="delete-btn">X</button></li>