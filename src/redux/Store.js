import { configureStore, createSlice } from '@reduxjs/toolkit'
import productSlice from './Crud'
import cartSlice from './Cart'
import studentSlice from '../student/Slice'
import carSlice from '../carmodal/Car_Slice'

export const store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice,
        student: studentSlice,
        cars: carSlice,
    }
})