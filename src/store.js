import {configureStore} from '@reduxjs/toolkit';
import incomeReducer from './components/incomestate.js'
import expenseReducer from './components/expensestate.js'
import balanceReducer from './components/balancestate.js'
import typeReducer from './components/transactiontypestate.js'
import transactionamountReducer from './components/transactionamountstate.js'
import transactionReducer from './components/singletransactionslice.js'
import transactionlistReducer from './components/transactionlistslice.js'
 const store=configureStore({
reducer:{
    income:incomeReducer,
    expense:expenseReducer,
    balance:balanceReducer,
    transactiontype:typeReducer,
    transactionamount:transactionamountReducer,
    transaction:transactionReducer,
    transactionlist:transactionlistReducer,
 }
}
)
store.subscribe(()=>{
    console.log("current balance is "+store.getState().balance);
})
export default store;
