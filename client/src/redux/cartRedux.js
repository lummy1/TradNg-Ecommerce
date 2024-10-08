import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        count:0,
        products:[],
        total:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.count += 1;
            
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
    },
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;