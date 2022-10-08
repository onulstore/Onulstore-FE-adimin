import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: '',
  curationImg: '',
  title: '',
};

export const magazineSlice = createSlice({
  name: 'magazine',
  initialState,
  reducers: {
    changeMagazine(state, action) {
      const { name, value } = action.payload;

      state[name] = value;
    },
  },
});

export const { changeMagazine } = magazineSlice.actions;
