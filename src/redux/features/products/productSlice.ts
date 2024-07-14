import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type TCategory = "Herbs" | "Shrubs" | "Trees" | "Climbers" | "Creepers";

export type TProduct = {
  id: string;
  title: string;
  description: string;
  category: TCategory;
  price: number;
  rating: number;
  quantity: number;
  images: string;
};

type TInitialState = {
  products: TProduct[];
};

const initialState: TInitialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.products.push({ ...action.payload });
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
