import {createSlice} from "@reduxjs/toolkit"

const balance=createSlice({
    name:"balance",
    initialState:0,
    reducers:{
       setbalance(state,action){
        return state+action.payload;
       } 
    }
})


export function getbalance(state)
{
return state.balance;
}
export default balance.reducer;
export const {setbalance}=balance.actions;

