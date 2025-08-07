import { createSlice } from '@reduxjs/toolkit'
import { createList, deleteList, fetchList, updateList } from './Fetch';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchList.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(createList.fulfilled, (state, action) => {
                state.items.push(action.payload)
            })
            // .addCase(updateList.fulfilled, (state, action) => {
            //     state.items.put(action.payload)
            // })
            .addCase(updateList.fulfilled, (state, action) => {
                const index = state.items.findIndex(p => p.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(deleteList.fulfilled, (state, action) => {
                state.items = state.items.filter(p => p.id !== action.payload);
            })
    }

})

export default productSlice.reducer;