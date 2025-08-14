import { createAsyncThunk } from "@reduxjs/toolkit";

let newData = {
    "name": "Anito",
    "id": "S004",
    "age": 21
}

export const fetchStudent = createAsyncThunk('students/fetchStudent', async () => {
    const list = await fetch(`http://localhost:9000/students`);
    const data = await list?.json();
    return data;
})

export const postData = createAsyncThunk('students/postData', async (newData) => {
    const list = await fetch('http://localhost:9000/students', {
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