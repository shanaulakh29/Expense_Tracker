import {createSlice} from "@reduxjs/toolkit";
const expense=createSlice({
    name:"expense",
    initialState:0,
    reducers:{
       addexpense:function(state,action){
        return state+action.payload;
       } 
    }
})
export function getexpense(state){
    return state.expense;
}
export default expense.reducer;
export const {addexpense}=expense.actions;