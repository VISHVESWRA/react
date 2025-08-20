import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'cars',
    initialState: {
        type: [],
        status: '',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase()
    }
})