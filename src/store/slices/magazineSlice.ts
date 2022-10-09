import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: '',
  curationImg: '',
  title: '',
  magazineData: [],
  magazine: {
    content: '',
    title: '',
    curationImg: '',
  },
  product1: null,
  product2: null,
};

export const magazineSlice = createSlice({
  name: 'magazine',
  initialState,
  reducers: {
    changeMagazine(state, action) {
      const { name, value } = action.payload;

      state.magazine[name] = value;
    },

    setMagazines(state, action) {
      state.magazineData = action.payload;
    },
    setMagazineInfo(state, action) {
      const { magazine, product1, product2 } = action.payload;

      state.magazine = magazine;
      state.product1 = product1;
      state.product2 = product2;
    },
    resetMagazine(state) {
      state.magazine = {
        content: '',
        title: '',
        curationImg: '',
      };
    },
  },
});

export const { changeMagazine, setMagazines, setMagazineInfo, resetMagazine } =
  magazineSlice.actions;
