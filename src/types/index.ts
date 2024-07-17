export type TProduct = {
  buyingQuantity: number;
  _id?: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  quantity: number;
  images: string;
};

export type TOrder = {
  customerAddress: string;
  customerPhone: string;
  customerName: string;
  productId?: TProduct[];
};
