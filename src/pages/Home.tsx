import CategorySection from "@/components/category/CategorySection";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import HeroSection from "@/components/hero/Carousel";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <ImageGallery />
    </div>
  );
};

export default Home;
