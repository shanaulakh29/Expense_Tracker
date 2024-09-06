import {createSlice} from '@reduxjs/toolkit'
let transaction=createSlice({
    name:"transaction",
    initialState:{
        type:"",
        amount:0,
    },
    reducers:{
        setTransaction:function(state,action)
        {
           state.type=action.payload.type;
           state.amount=action.payload.amount;
        }
    }
})
export function getsingletransaction(state)
{
   return state.transaction;
}
export default transaction.reducer;
export const {setTransaction}=transaction.actions;