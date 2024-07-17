import { Spin, Row, Col, Card } from "antd";
import { addToCart } from "@/redux/features/cart/cartSlice";

import { useAppDispatch } from "@/redux/hooks";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "@/redux/features/products/productApi";

const { Meta } = Card;

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id ? id : null);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      {/* Navbar space */}

      <Row
        justify="center"
        className="max-w-4xl mx-auto gap-10 mb-44 mt-20 bg-gray-100 p-4 rounded-lg">
        <Col xs={24} md={12} className="flex justify-center items-center">
          <Card
            hoverable
            cover={
              <img
                className="object-cover rounded-lg w-full"
                src={data.data.images}
                alt={data.data.title}
              />
            }>
            <Meta title={data.data.title} description={data.data.category} />
          </Card>
        </Col>
        <Col xs={24} md={12} className="flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-2xl">{data.data.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{data.data.category}</p>
            <p className="text-sm mt-1">{data.data.description}</p>
            <p className="font-bold mt-3 text-xl">${data.data.price}</p>
          </div>
          <button
            onClick={() => dispatch(addToCart(data.data))}
            className="mt-4 my-primary-btn">
            Add To Cart
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailsPage;
