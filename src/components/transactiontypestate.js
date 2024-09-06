import {createSlice} from '@reduxjs/toolkit'
let type=createSlice({
    name:"transactiontype",
    initialState:"",
    reducers:{
        setStateType:function(state,action){
            return action.payload;
        }
    }
})
export function gettype(state)
{
    return state.transactiontype;
}
export const {setStateType}=type.actions;
export default type.reducer;