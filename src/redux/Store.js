import {configureStore, createSlice } from '@reduxjs/toolkit'
import productSlice from './Crud'
import cartSlice from './Cart'
import studentSlice from '../student/Slice'

export const store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice,
        student: studentSlice,
    } 
})