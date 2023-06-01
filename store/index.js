import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import productsSlice from './productSlice';

const makeStore = () => {
  let store = configureStore({
    reducer: {
        category: productsSlice,
    }
  });

  return store;
}

export const storeWrapper = createWrapper(makeStore);