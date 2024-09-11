import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// redux toolkit api
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://green-nursery-servel-l2b3a4.vercel.app/api/",
    // baseUrl: "http://localhost:5000/api/",
  }),
  tagTypes: ["products"],
  endpoints: () => ({}),
});
