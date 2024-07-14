export type TCategory = "Herbs" | "Shrubs" | "Trees" | "Climbers" | "Creepers";

export type TProduct = {
  _id?: string;
  title: string;
  description: string;
  category: TCategory;
  price: number;
  rating: number;
  quantity: number;
  images: string;
};
