import { useGetAllProductQuery } from "@/redux/features/products/productApi";
import ShoppingSingleCart from "./ShoppingSingleCard";
import { TProduct } from "src/types";
import Container from "../Container";

const AllProducts = () => {
  const { data, isLoading } = useGetAllProductQuery({});
  if (isLoading)
    return <div className="text-yellow-500 text-2xl">Loading...</div>;
  const products = data.data;

  return (
    <Container className="grid grid-cols-1 md:grid-cols-4">
      {products.map((product: TProduct) => (
        <ShoppingSingleCart key={product._id} {...product} />
      ))}
    </Container>
  );
};

export default AllProducts;
