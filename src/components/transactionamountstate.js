import {createSlice} from '@reduxjs/toolkit'
let amount=createSlice({
    name:"transactionamount",
    initialState:0,
    reducers:{
        setStateAmount:function(state,action){
            return action.payload;
        }
    }
})
export function getamount(state)
{
    return state.transactionamount;
}
export const {setStateAmount}=amount.actions;
export default amount.reducer;