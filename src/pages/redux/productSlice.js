import { createSlice } from "@reduxjs/toolkit";

const initialState={
data:[],
}

const productSlice =createSlice({
    name:"productSlice",
    initialState,
    reducers:{
        getProducts:(state,action)=>{
            state.data=action.payload
        }
    }
});

export default productSlice.reducer;
export const {getProducts} =productSlice.actions;