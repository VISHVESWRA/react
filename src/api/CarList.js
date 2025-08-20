import { createAsyncThunk } from "@reduxjs/toolkit";


export const getStudent = createAsyncThunk('cars/fetch', async () => {
    try {
        const list = await fetch(`http://localhost:9900/home`);
        return await list.json();
    }
    catch (e) {
        console.log(e);
        throw e;
    }
})