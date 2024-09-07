import { RiDeleteBin6Fill } from "react-icons/ri";

import UpdateModal from "./UpdateModal";

import { TProduct } from "src/types";
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
} from "../../redux/features/products/productApi";
import Container from "../Container";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { Spin } from "antd";

const ManagementTable: React.FC = () => {
  const [page, setPage] = useState(1);
  const filterState = useAppSelector((state) => state.products.productFilters);
  console.log(filterState);

  const { data, isLoading } = useGetAllProductQuery({ page, ...filterState });

  const [deleteProduct] = useDeleteProductMutation();
  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        {" "}
        <Spin size="large" />
      </div>
    );

  const products = data?.data;
  console.log(products?.length);

  const handleDeleteProducts = async (productId: string) => {
    console.log(productId);

    // confirm popup in and design you are sure delete product

    try {
      await deleteProduct(productId);
      console.log(`Deleted product with id ${productId}`);
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <Container className={`overflow-x-auto`}>
      <table className=" mx-auto  max-w-full md:min-w-full bg-slate-100">
        <thead>
          <tr className="bg-gray-100 border-b ">
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
              Image
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
              Title
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
              Price
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
              Category
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product: TProduct) => (
            <tr key={product._id} className="border-b">
              <td className="py-3 px-4">
                <img
                  src={product?.images}
                  className="w-16 h-12 sm:w-20 sm:h-16 rounded"
                />
              </td>
              <td className="py-3 px-4">{product?.title}</td>
              <td className="py-3 px-4">${product?.price}</td>
              <td className="py-3 px-4">{product?.category}</td>
              <td className="py-3 px-4">
                <UpdateModal product={product} />

                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-3 px-3 rounded"
                  onClick={() => handleDeleteProducts(product._id ?? "")}>
                  <RiDeleteBin6Fill size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

export default ManagementTable;
