import React,{useState,useRef,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {addincome} from './incomestate.js';
import {addexpense} from './expensestate.js';
import {setbalance} from './balancestate.js'
import {setStateType} from './transactiontypestate.js'
import {setStateAmount} from './transactionamountstate.js'
import {addtransactioninlist} from './transactionlistslice.js'
import {setTransaction} from './singletransactionslice.js'




function AddTransaction(){
  let transactionhead=useRef();
  let errordiv=useRef();
    const dispatch=useDispatch();
let colors=["text-red-200","text-yellow-800","text-green-300","text-blue-900","text-pink-100","text-orange-300"]

    const [type,setType]=useState("");
    const [amount,setAmount]=useState("");
    function ontypechange(e)
    {
      setType(e.target.value);
    }
   function onamountchange(e)
   {
      setAmount(e.target.value);
   }
    function handlesubmit(e)
    {
      errordiv.current.classList.add("hidden");
      errordiv.current.classList.remove("flex");
     e.preventDefault();
      let parsedAmount = parseFloat(amount);
      if(isNaN(parsedAmount))
      {
        errordiv.current.classList.remove("hidden");
        errordiv.current.classList.add("flex");
  
      
        setAmount("");
        return;
      }
      console.log("parsedAmount is: "+parsedAmount);
     dispatch(setStateType(type));
     dispatch(setStateAmount(parsedAmount));
  

     dispatch(setTransaction({type,parsedAmount}));
     dispatch(addtransactioninlist({type,parsedAmount}
     ));

     dispatch(setbalance(parsedAmount));
     if(parsedAmount>0)
     {
       dispatch(addincome(parsedAmount));
     }
     else{
        dispatch(addexpense(parsedAmount));
     }
setType("");
setAmount("");



    }
    useEffect(()=>{
      let i=0
      let intervalid= setInterval(()=>{
        if (transactionhead.current) {
          transactionhead.current.classList.remove(colors[i]);
          i = (i + 1) % colors.length;
          transactionhead.current.classList.add(colors[i]);
        }
      
      },500)
    
      return ()=>{
        clearInterval(intervalid);
        transactionhead.current.classList.remove(colors[i]);
      }},[]);
  return (
    <div className="flex items-center flex-col ">
    <h2 ref={transactionhead} className="pb-2 text-xl lg:text-2xl w-96 text-center tracking-widest font-bold animate-pulse">Add New Transaction</h2>
    <hr/>
   <form className="border bg-indigo-300 flex flex-col w-full lg:w-3/4 rounded mb-8 pt-1" onSubmit={handlesubmit}>
   <label htmlFor="transaction" className="mx-auto block">Enter the Type of Transaction</label>
   <div className="flex justify-center">
   <input required type="text" pattern="^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s\W]+$" value={type}  className="text-center border m-3 rounded-md w-3/4 md:w-1/2"  placeholder="Please enter Details of the Transaction" onChange={ontypechange} ></input>
   </div>
   <div className="mx-auto">Enter the Amount</div>
   <div className="mx-auto">Add (-) before the amount to show expense</div>
   <div className="mx-auto">Add (+) before the amount to show expense</div>
   <div className="flex justify-center">
   {/* <input required type="number" value={amount} step="0.001" className="text-center border m-3 rounded-md w-3/4 md:w-1/2 appearance-none"  placeholder="Please enter the amount" onChange={onamountchange}></input> */}
   <input required type="text" pattern="^[+-]?\d+\.?\d+$" value={amount} step="0.001" className="text-center border m-3 rounded-md w-3/4 md:w-1/2 "  placeholder="Please enter the amount" onChange={onamountchange}></input>
   </div>
   <div ref={errordiv} className=" justify-center relative bottom-2 text-red-500 hidden">
   Please enter a valid amount
    </div>
   <button type="submit" className="border w-1/2 mx-auto mb-2 transition-all duration-1000 relative bottom-1 active:bottom-0 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-700 hover:text-white hover:shadow-2xl">submit</button>
   
   </form>
   </div>
  )
}

export default AddTransaction