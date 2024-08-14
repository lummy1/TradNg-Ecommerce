import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import alertReducer from "./alertRedux";
import authReducer from "./authRedux";

export * from './cartRedux';
export * from './userRedux';
export * from './alertRedux';
export * from './authRedux';


export default configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        alert: alertReducer,
        auth: authReducer,
    }
})
 
