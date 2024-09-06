import {createSlice} from "@reduxjs/toolkit";
const income=createSlice({
    name:"income",
    initialState:0,
    reducers:{
       addincome:function(state,action){
        return state+action.payload;
       } 
    }
})
export function getincome(state){
    return state.income;
}
export const {addincome}=income.actions;
export default income.reducer;