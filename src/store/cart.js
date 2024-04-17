import { createSlice } from "@reduxjs/toolkit"
import { cartItems } from "../data/items";


const cartSlice = createSlice({
    name: 'cart',
    initialState: cartItems,
    reducers: {
        addToCart: (store, actions)=> {
            console.log(store)
            const newStore = [actions.payload,...store];
            console.log("Added To Cart")
            console.log(newStore)
            return newStore;

        },
        removeFromCart: (store, actions)=> {
            console.log(store)
            const newStore = [...store];
            const temp = newStore.filter(item => item.id != actions.payload);
            console.log("Deleted From Cart")
            console.log(temp)
            return temp;
        }
    } 
})

export const cartAction = cartSlice.actions;

export default cartSlice;

