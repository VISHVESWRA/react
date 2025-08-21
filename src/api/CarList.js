import { createAsyncThunk } from "@reduxjs/toolkit";


export const getCar = createAsyncThunk('cars/fetch', async () => {
    try {
        const list = await fetch(`http://localhost:9900/home`);
        const data = await list.json();
        return data;
    }
    catch (e) {
        throw e;
    }
})

export const postCar = createAsyncThunk('cars/post', async (newData) => {
    console.log(newData);

    try {
        const list = await fetch(`http://localhost:9900/home`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        })
        const data = await list?.json();
        console.log('data', data);
        return data;
    }
    catch (e) {
        throw e;
    }
})