import { baseApi } from "@/redux/api/baseApi";

const productsApi = baseApi.injectEndpoints({
  // auto reloading products when post the data like tagType tagType["product"]

  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (page) => {
        console.log(page, "iam page");

        return {
          url: `/products?page=${page}`,
          method: "GET",
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
    // update product
    updateProduct: builder.mutation({
      query: (option) => ({
        url: `/update-product/${option._id}`,
        method: "PUT",
        body: option.data,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi;
