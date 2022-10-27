import { configureStore } from '@reduxjs/toolkit';
import { itemSlice } from './slices/itemSlice';
import { magazineSlice } from './slices/magazineSlice';

const store = configureStore({
  reducer: {
    magazine: magazineSlice.reducer,
    item: itemSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
