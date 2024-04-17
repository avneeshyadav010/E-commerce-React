import {wishListItems} from '../data/items'
import { createSlice } from "@reduxjs/toolkit";

const wishList = createSlice({
    name: "wishList",
    initialState: wishListItems,
    reducers: {
        addtoWishList: (store,actions)=> {
            const newItems = [actions.payload,...store]
            console.log("Wishlist item added")
            return newItems
        },
        removefromWishList: (store,actions)=> {
            const newItems = [...store];
            const newWishList = newItems.filter(item => item.id != actions.payload);
            console.log("Wishlist item deleted")
            return newWishList
        }
    }
})
export const wishListaction = wishList.actions;

export default wishList