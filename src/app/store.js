import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../state/products/productsSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer
    }
})