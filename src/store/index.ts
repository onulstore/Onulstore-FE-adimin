import { configureStore } from '@reduxjs/toolkit';
import { magazineSlice } from './slices/magazineSlice';

const store = configureStore({
  reducer: {
    magazine: magazineSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
