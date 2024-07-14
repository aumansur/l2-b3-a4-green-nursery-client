import { FiEdit } from "react-icons/fi";

import { RiDeleteBin6Fill } from "react-icons/ri";

import UpdateModal from "./UpdateModal";

import { TProduct } from "src/types";
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
} from "../../redux/features/products/productApi";
import Container from "../Container";
import confirm from "antd/es/modal/confirm";
import { message, Popconfirm, PopconfirmProps } from "antd";
import AddModal from "./AddModal";

const ManagementTable: React.FC = () => {
  const { data, isLoading } = useGetAllProductQuery({});
  const [deleteProduct] = useDeleteProductMutation();
  if (isLoading) return <p>Loading...</p>;

  const products = data.data;
  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success("delete product");
  };
  const handleDeleteProducts = async (productId: string) => {
    console.log(productId);

    // confirm popup in and design you are sure delete product
    confirm({
      title: "Delete Product",
      content: "Are you sure to delete this product?",
      okText: "Yes",

      cancelText: "No",
      onConfirm: handleDeleteProducts,
    });

    try {
      await deleteProduct(productId);
      console.log(`Deleted product with id ${productId}`);
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
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
                  src={product.images}
                  className="w-16 h-12 sm:w-20 sm:h-16 rounded"
                />
              </td>
              <td className="py-3 px-4">{product.title}</td>
              <td className="py-3 px-4">${product.price}</td>
              <td className="py-3 px-4">{product.category}</td>
              <td className="py-3 px-4">
                <UpdateModal product={product} />

                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-3 px-3 rounded"
                  onClick={() => handleDeleteProducts(product._id)}>
                  <RiDeleteBin6Fill size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ManagementTable;
