import { createSlice } from "@reduxjs/toolkit";
import { getCar, postCar } from "../api/CarList";

const carSlice = createSlice({
    name: 'cars',
    initialState: {
        type: [],
        status: '',
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCar.fulfilled, (state, action) => {
                state.type = action.payload;
            })
            .addCase(postCar.fulfilled, (state, action) => {
                state.type.push(action.payload)
            })
    }
})

export default carSlice.reducer;