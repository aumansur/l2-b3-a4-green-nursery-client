import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import cartReducer from "./features/cart/cartSlice";
import filterProductReducer from "./features/products/filterProductSlice"; // Keep the naming consistent
import { baseApi } from "./api/baseApi";

// Configure the store
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer, // API slice for RTK Query
    products: productReducer, // Product slice
    cart: cartReducer, // Cart slice
    filterProductSlice: filterProductReducer, // Filter product slice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),

  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {products: ProductsState, cart: CartState, filterProducts: FilterProductState, ...}
export type AppDispatch = typeof store.dispatch;
