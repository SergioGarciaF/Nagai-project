// En el archivo del slice (por ejemplo, sliceCart.tsx)
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
}

export interface AddToCartState {
  cartArray: Product[];
}

const initialState: AddToCartState = {
  cartArray: [],
};

const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
      state.cartArray = [...state.cartArray, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartArray = state.cartArray.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItemToCart, removeFromCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;
