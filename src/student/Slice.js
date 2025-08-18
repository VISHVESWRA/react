import { createSlice } from "@reduxjs/toolkit";
import { fetchStudent, postData } from "../api/Student";


const studentSlice = createSlice({
    name: 'students',
    initialState: {
        list: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudent.fulfilled, (state, action) => {
                console.log(action.payload);
                state.list = action.payload
            })
            // .addCase(postData.fulfilled, (state, action) => {
            //     // state.items.push(action.payload)
            //     console.log(action.payload);
            // })
    }

})

export default studentSlice.reducer;