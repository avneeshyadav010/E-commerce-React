import { createSlice } from "@reduxjs/toolkit";
import { Default_items } from "../data/items";

const itemsSlice = createSlice({
    name: "items",
    initialState: Default_items,
    reducers: {
        initialItems: (store, actions) => {
           const searchItems = [actions.payload, ...store];
           console.log("Search Products");
           return searchItems;
        }
    }
})

export const itemsAction = itemsSlice.actions;

export default itemsSlice;