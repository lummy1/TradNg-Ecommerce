import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        count:0,
        products:[],
        //total:0,
    },
    reducers:{
        addUser:(state,action)=>{
            state.count += 1;
            
            state.users.push(action.payload);
            //state.total += action.payload.price * action.payload.quantity;
        },
        
    },
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;