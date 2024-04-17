import {configureStore} from '@reduxjs/toolkit'
import itemsSlice from './items'
import cartSlice from './cart';
import wishList from './wishlist';

const itemStore = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        cart: cartSlice.reducer,
        wishList: wishList.reducer
    }
})
export default itemStore;