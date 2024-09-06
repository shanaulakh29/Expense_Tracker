import React from 'react'
import { useSelector } from 'react-redux'
import {getincome} from './incomestate.js'
function Income(){
    let newtotalincome=useSelector(getincome);
  return (
    <div className="rounded-3xl py-4 w-1/2 md:max-w-sm flex justify-center bg-green-500 mr-2 hover:bg-green-600 transition-all duration-1000 ">
    <div className="text-white text-md md:text-xl rounded-full shadow-2xl w-3/4 lg:bg-green-600  ">
      <div>Total Income Till Date</div>
      <div>${newtotalincome}</div>
    </div>
    </div>
  )
}

export default Income
