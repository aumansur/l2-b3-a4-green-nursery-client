import { baseApi } from "@/redux/api/baseApi";
import { TOrder } from "@/types";

const productsApi = baseApi.injectEndpoints({
  // auto reloading products when post the data like tagType tagType["product"]

  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: ({
        page,
        searchTerm = "",
        category = "",
        priceRange = "",
        sort = "",
      }) => {
        console.log(category, page);

        return {
          url: `/products`,
          method: "GET",
          params: {
            page: page,
            searchTerm: searchTerm,
            category,
            priceRange,
            sort,
          },
        };
      },
      providesTags: ["products"],
    }),
    addProduct: builder.mutation({
      query: (productInfo) => ({
        url: "/create-product",
        method: "POST",
        body: productInfo,
      }),
      invalidatesTags: ["products"],
    }),
    // delete product
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/delete-product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    // get single product
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),

    // update product
    updateProduct: builder.mutation({
      query: (option) => ({
        url: `/update-product/${option._id}`,
        method: "PUT",
        body: option.data,
      }),
      invalidatesTags: ["products"],
    }),

    // order create
    createOrder: builder.mutation({
      query: (data: TOrder) => ({
        url: "/order",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetSingleProductQuery,
  useCreateOrderMutation,
} = productsApi;
