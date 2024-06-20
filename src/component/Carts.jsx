import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
    products: [],
    count:0,
};

const Carts = createSlice({
    name:"cart",
    initialState:initialCart,
    reducers: {
        addProduct(state,action) {
            const newProduct = action.payload;
            const existProduct = state.products.find(product=> product.id === newProduct.id)
            if(existProduct){
                existProduct.quantity +=1;
            } else {
                state.products.push({...newProduct,quantity:1});
            }
            state.count++;
        },
        increaseQuantity(state,action) {
            const product = state.products.find(product => product.id === action.payload)
            if (product) {
                product.quantity += 1;
                state.count++;
            }
        },
        decreaseQuantity(state,action) {
            const product = state.products.find(product => product.id === action.payload)
            if(product && product.quantity >0 ){
                product.quantity -=1;
                state.count--;
                if(product.quantity === 0) {
                    state.products = state.products.filter(pro => pro.id !== product.id)
                }
            }
        },
    }
});

export const { addProduct, increaseQuantity,decreaseQuantity} = Carts.actions;
export default Carts.reducer;