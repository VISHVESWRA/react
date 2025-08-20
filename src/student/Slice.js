import { createSlice } from "@reduxjs/toolkit";
import { deleteUser, editPassword, fetchStudent, signin, signUp } from "../api/Student";
import { act } from "react";
import { Navigate } from "react-router-dom";

const studentSlice = createSlice({
    name: 'students',
    initialState: {
        list: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudent.fulfilled, (state, action) => {
                state.list = action.payload
            })
            .addCase(signUp.fulfilled, (state, action) => {
                alert(action.payload.message)
                state.list.push(action.payload.student);
            })
            .addCase(signin.fulfilled, (state, action) => {
                alert(action.payload.message)
            })
            .addCase(editPassword.fulfilled, (state, action) => {
                alert(action.payload.message)
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                alert(action.payload.message)
            });
    }

})

export default studentSlice.reducer;