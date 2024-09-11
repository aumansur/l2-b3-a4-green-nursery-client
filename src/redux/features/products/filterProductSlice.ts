import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "@/types";

// Define the initial state
interface ProductState {
  products: TProduct[]; // List of products fetched from the API
  filteredProducts: TProduct[]; // Products after filtering and sorting
  searchTerm: string; // Current search term
  sortBy: string; // Sorting method ("asc" or "desc")
  productFilters: {
    // Filter criteria for API calls
    searchTerm: string;
    sortBy: string;
  };
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  searchTerm: "",
  sortBy: "asc",
  productFilters: {
    searchTerm: "",
    sortBy: "asc",
  },
};

const filterProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<TProduct[]>) {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      state.productFilters.searchTerm = action.payload.toLowerCase();
      // Update filtered products based on search term
      state.filteredProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
      state.productFilters.sortBy = action.payload;

      // Sort the products based on the selected sorting order
      state.filteredProducts = state.filteredProducts.slice().sort((a, b) => {
        if (state.sortBy === "asc") {
          return a.price - b.price;
        } else if (state.sortBy === "desc") {
          return b.price - a.price;
        }
        return 0;
      });
    },
    applyFilters(state) {
      // Reapply filters based on the current search term and sort order
      state.filteredProducts = state.products
        .filter((product) =>
          product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
        .sort((a, b) => {
          if (state.sortBy === "asc") {
            return a.price - b.price;
          } else if (state.sortBy === "desc") {
            return b.price - a.price;
          }
          return 0;
        });
    },
  },
});

export const { setProducts, setSearchTerm, setSortBy, applyFilters } =
  filterProductSlice.actions;

export default filterProductSlice.reducer;
