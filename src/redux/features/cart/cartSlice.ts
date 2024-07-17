import { TProduct } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TinitailState = {
  products: TProduct[];
};

const initialState: TinitailState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<TProduct>) => {
      state.products.push({ ...actions.payload });
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
