import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchList = createAsyncThunk('products/fetchList', async () => {
    const list = await fetch('https://fakestoreapi.in/api/products?limit=10');
    // const list = await fetch(`http://localhost:9000/student`);
    const data = await list?.json();
    return data.products;
})

export const createList = createAsyncThunk('products/createList', async (newProduct) => {
    const list = await fetch('https://fakestoreapi.in/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    });
    const data = await list?.json();
    alert(data?.message)
    return data;
})

export const updateList = createAsyncThunk('products/updateList', async (getData) => {
    const { id, ...updateData } = getData;
    const list = await fetch(`https://fakestoreapi.in/api/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });

    const data = await list?.json();
    alert(data?.message || 'Product updated');
    return data;
});

export const deleteList = createAsyncThunk('products/deleteList', async (id) => {
    const res = await fetch(`https://fakestoreapi.in/api/products/${id}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    alert(data?.message || 'Product deleted');
    return id;
});

export const server = createAsyncThunk('', async () => {
    console.log(server);
    const list = await fetch(`http://localhost:9000/api/list`);
    console.log(list);
});

