import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    products: []
}

const slice = createSlice({
    name: 'category',
    initialState,
    ereducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
        addProducts(state, action) {
            state.products = [...state.products, ...action.payload];
        },
    },
    reducers: {
        [HYDRATE]: (state, action) => {
            return state = { ...state, ...action.payload };
        },
    },
});

export const { setProducts, addProducts } = slice.actions;
export default slice.reducer;