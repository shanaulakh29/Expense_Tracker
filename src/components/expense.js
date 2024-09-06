import React from 'react'
import {getexpense} from './expensestate'
import { useSelector } from'react-redux'
function Expense () {
    let newtotalexpensevalue=useSelector(getexpense)
  return (
    <div className=" rounded-3xl bg-red-500 py-4 w-1/2  md:max-w-sm flex justify-center ml-2 hover:bg-red-600 transition-all duration-1000 ">
    <div className="text-md md:text-xl shadow-2xl lg:bg-red-600 w-3/4 rounded-full">
    <div>Total Expenses Till Date</div>
    <div>${newtotalexpensevalue}</div>
  </div>
  </div>
  )
}

export default Expense
