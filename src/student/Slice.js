import { createSlice } from "@reduxjs/toolkit";
import { fetchStudent, postData } from "../api/Student";


const studentSlice = createSlice({
    name: 'students',
    initialState: [],
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudent.fulfilled, (state, action) => {
                console.log(action.payload);
                state.list = action.payload
                //     if(Array.isArray(action.payload)){
                //     console.log('is an arrray');

                //    }else {console.log('not an array');
                //    }
            })
            .addCase(postData.fulfilled, (state, action) => {
                // state.items.push(action.payload)
                console.log(action.payload);
                
            })
    }

})

export default studentSlice.reducer;