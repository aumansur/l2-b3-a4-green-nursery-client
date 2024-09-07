import { Input, Form, Typography, List } from "antd";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TOrder, TProduct } from "@/types";
import { useCreateOrderMutation } from "@/redux/features/products/productApi";
import { toast } from "sonner";
import { clearCart } from "@/redux/features/cart/cartSlice";
import Container from "@/components/Container";

const { Title, Text } = Typography;

const CheckoutPage = () => {
  const [form] = Form.useForm();
  const { products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [createOrder] = useCreateOrderMutation();

  const totalPrice = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  const productMap: { [key: string]: TProduct & { buyingQuantity: number } } =
    {};

  products.forEach((product: TProduct) => {
    if (productMap[product._id as string]) {
      productMap[product._id as string].buyingQuantity += 1;
    } else {
      productMap[product._id as string] = { ...product, buyingQuantity: 1 };
    }
  });

  const uniqueCartProducts = Object.values(productMap);
  console.log("data", uniqueCartProducts);

  const handleOrder = async (values: TOrder) => {
    const { customerAddress, customerPhone, customerName } = values;

    const newOrder = {
      customerName,
      customerPhone,
      customerAddress,
      productId: uniqueCartProducts,
    };

    console.log(newOrder);
    // if productId nun then not create order
    if (newOrder.productId.length === 0) {
      toast.error("No product selected");
      return;
    }

    // if customer info is not filled then not create order
    if (!customerAddress || !customerPhone || !customerName) {
      toast.error("Please fill customer info");
      return;
    }
    const res = await createOrder(newOrder).unwrap();
    form.resetFields();
    if (res.success) {
      toast.success("Order created successfully");
    } else {
      toast.error("Failed to create order");
    }
    dispatch(clearCart());
    // clear input box when order is updated
  };

  return (
    <div>
      <Container className="md:flex  md:justify-between md:items-center px-4 mt-20 mb-32 gap-10">
        <div className="md:w-1/2">
          <div className="bg-gray-100 min-w-96 flex flex-col h-[330px] overflow-y-scroll gap-4 px-4 pt-6 pb-4 rounded-lg">
            <List
              className="gap-4"
              itemLayout="horizontal"
              dataSource={uniqueCartProducts}
              renderItem={(product) => (
                <div className="flex border border-red-300   gap-4 mb-4">
                  <img
                    className="w-28 h-30 rounded-md"
                    src={product.images}
                    alt=""
                  />
                  <div>
                    <p>Title: {product.title}</p>
                    <p>{`Category: ${product.category}`}</p>
                    <div>
                      <Text>Quantity: {product.buyingQuantity}</Text>
                    </div>
                  </div>

                  <div className="flex justify-end border">
                    <div className="">
                      <p>Price: ${product.price.toFixed(2)}</p>
                      <p>
                        Total Price: $
                        {(product.price * product.buyingQuantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
          <div className="mt-5 flex items-center justify-end">
            <Title level={3}>${totalPrice.toFixed(2)}</Title>
          </div>
        </div>
        <div className="bg-gray-100-100 md:w-1/2">
          <Form className="" onFinish={handleOrder} layout="vertical">
            <Form.Item
              label="customer Name"
              name="customerName"
              rules={[{ required: true, message: "Please enter your name" }]}>
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item
              label="customer Number"
              name="customerPhone"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}>
              <Input placeholder="Enter your phone number" />
            </Form.Item>
            <Form.Item
              label="customer Address"
              name="customerAddress"
              rules={[
                { required: true, message: "Please enter your address" },
              ]}>
              <Input placeholder="Enter your address" />
            </Form.Item>
            <Form.Item>
              <button type="submit" className="my-primary-btn">
                Order Confirm
              </button>
            </Form.Item>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
