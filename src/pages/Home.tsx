import CategorySection from "@/components/category/CategorySection";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import HeroSection from "@/components/hero/Carousel";

import CustomerReviews from "@/pages/customerReview/CustomerReviews";
import ProductsCards from "@/components/products/ProductCards";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <ProductsCards />
      <CustomerReviews />
      <ImageGallery />
    </div>
  );
};

export default Home;
