import {createSlice} from '@reduxjs/toolkit'
let transactionlist=createSlice({
    name:"transactionlist",
    initialState:[],
    reducers:{
        addtransactioninlist:function(state,action)
        {
           state.push(action.payload);
        },
        removetransaction:function(state,action)
       {
        //  return state.filter((index)=>index!==action.payload)
       return state.filter((transaction,index)=>{
            if(index!==action.payload)
            {
                return true;
            }
            else
            {
                return false;
            }
       })
    // return state.filter((_, index) => index !== action.payload);
        }
    }
})
export function getalltransactions(state)
{
    return state.transactionlist;
}
export const {addtransactioninlist,removetransaction}=transactionlist.actions;
export default transactionlist.reducer;