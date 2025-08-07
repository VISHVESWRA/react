import {configureStore, createSlice } from '@reduxjs/toolkit'
import productSlice from './Crud'
import cartSlice from './Cart'

export const store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice
    } 
})