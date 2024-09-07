import { useState } from "react";

import "./search.css";
import { useGetAllProductQuery } from "@/redux/features/products/productApi";
import ProductCard from "./ProductCard";
import Container from "../Container";
import { useAppSelector } from "@/redux/hooks";

import { TProduct } from "@/types";

import HeaderText from "../HeaderText";

import { useForm, Controller } from "react-hook-form";

import { Input, Select, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// Define the type for Select options
type Option = {
  value: string;
  label: string;
};

const ProductCards = () => {
  const [page, setPage] = useState(1);
  const { control } = useForm();
  const filterState = useAppSelector((state) => state.products.productFilters);
  console.log(filterState);
  const {
    data: productData,
    isLoading,
    error,
  } = useGetAllProductQuery({
    page,
    ...filterState,
  });

  // const productData = data.data;

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        {" "}
        <Spin size="large" />
      </div>
    );

  if (error) {
    console.log(error);

    return <div>Error fetching products</div>;
  }
  //================================================

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  // const onSubmit = (data) => {
  //   console.log("clicked");
  //   console.log(data);
  // };

  const sortOptions: Option[] = [
    { value: "desc", label: "Highest" },
    { value: "asc", label: "Lowest" },
  ];

  return (
    <Container>
      <div data-aos="fade-left">
        <div className="flex justify-between relative  my-8 w-12/12 h-full">
          <HeaderText>Our Products</HeaderText>
        </div>

        <div className="mb-6 flex justify-between items-center">
          <form className="relative">
            <Controller
              name="searchTerm"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Search Products"
                  className="min-w-80"
                />
              )}
            />
            <button type="submit" className="absolute top-[10px] right-3">
              <SearchOutlined className="text-lg" />
            </button>
          </form>

          <Controller
            name="sort"
            control={control}
            defaultValue="asc"
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Filter by Price"
                className="w-[180px]"
                options={sortOptions}
                onChange={(value) => {
                  // setSortValue(value);
                  field.onChange(value);
                }}
              />
            )}
          />
        </div>

        {/* ============= */}

        <div
          className={`grid grid-cols-1  md:grid-cols-4 justify-items-center `}>
          {productData?.data?.map((product: TProduct) => (
            <ProductCard product={product} key={product?._id} />
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <button
          onClick={handlePrevPage}
          className="inset-x-0 bottom-0 flex justify-center bg-[#1e531d] font-bold hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-14 md:w-24 p-1 text-gray-100 hover:text-blue-900">
          prev
        </button>
        <button
          onClick={handleNextPage}
          className="inset-x-0 bottom-0 flex justify-center bg-[#1e531d] font-bold hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-14 md:w-24 p-1 text-gray-100 hover:text-blue-900">
          Next
        </button>
      </div>
    </Container>
  );
};

export default ProductCards;
