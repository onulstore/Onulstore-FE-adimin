import { createSlice } from '@reduxjs/toolkit';

/////////////////// 슬라이스 안쓰고 있습니다
const initialState = {
  id: '',
  productName: '',
  category: {},
  originalPrice: '',
  brand: '',
  quantity: '',
  content: '',
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItems(state, action) {
      // state.magazineData = action.payload;
    },
    setItemInfo(state, action) {
      console.log('페이로드', action.payload);
      const { productName, category, originalPrice, brand, quantity, content } = action.payload;

      state.productName = productName;
      state.category = category;
      state.originalPrice = originalPrice;
      state.brand = brand;
      state.quantity = quantity;
      state.content = content;
    },
  },
});

export const { setItemInfo } = itemSlice.actions;
