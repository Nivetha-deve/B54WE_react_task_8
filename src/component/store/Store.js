import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Carts";


const store = configureStore({
    reducer:{  
     cart: CartReducer,
    },
});

export default store;
