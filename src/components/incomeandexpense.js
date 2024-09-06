import React from 'react'
import Income from './income.js'
import Expense from './expense.js'
 function IncomeAndExpense() {
  return (
    <div className="text-center ">
    <div className="m-5 md:w-3/4  mx-auto flex justify-center md:justify-between rounded-3xl ">
      <Income/>
      <Expense/>
    </div>
    </div>
  )
}

export default IncomeAndExpense
// md:flex md:justify-center