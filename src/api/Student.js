import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudent = createAsyncThunk('students/fetchStudent', async () => {
    const list = await fetch(`http://localhost:9000/students`);
    const data = await list?.json();
    return data;
})

export const postData = createAsyncThunk('students/postData', async (newData) => {
    console.log('newdata', newData);
    
    const list = await fetch('http://localhost:9000/students/add', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })

    const data = await list?.json();
    alert('Student added')
    return data
})