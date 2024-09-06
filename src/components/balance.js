import React,{useState, useEffect} from 'react'
import {getbalance} from './balancestate.js';
import { useSelector } from 'react-redux'


function Balance(){
    const [currentbalance,setCurrentBalance]=useState(0);
    let newbalance=useSelector(getbalance);
    useEffect(()=>{
       setCurrentBalance(newbalance);
    });

  return (
    <div className="my-5 mx-4 md:flex md:justify-center">
      <h2 className={`${currentbalance>0?"text-green-500":"text-red-500"} text-2xl`}>Your Current Balance is: ${currentbalance}</h2>
    </div>
  )
}

export default Balance
