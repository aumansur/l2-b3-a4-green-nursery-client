// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type TCategory = "Herbs" | "Shrubs" | "Trees" | "Climbers" | "Creepers";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
type Filter = {
  category?: string;
  priceRange?: string;
  sort?: string;
  searchTerm?: string;
};

type FilterState = {
  homeFilters: Filter;
  productFilters: Filter;
};

const initialState: FilterState = {
  homeFilters: { category: "", priceRange: "", sort: "", searchTerm: "" },
  productFilters: { category: "", priceRange: "", sort: "", searchTerm: "" },
};

const productSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    setHomeFilter: (state, action: PayloadAction<Filter>) => {
      state.homeFilters = action.payload;
    },
    setProductFilter: (state, action: PayloadAction<Filter>) => {
      state.productFilters = action.payload;
    },
  },
});

export const { setHomeFilter, setProductFilter } = productSlice.actions;
export default productSlice.reducer;
