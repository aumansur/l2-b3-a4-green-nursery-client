// CategorySection.js

import Container from "../Container";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Herbs",
    imageUrl:
      "https://img.iproperty.com.my/angel/750x1000-fit/wp-content/uploads/sites/2/2019/09/39459638_m-1.jpg",
  },
  {
    title: "Shrubs",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuJfiohWoZRkXXS3NYL3A0oBO1RzaBEa00a6xqbbBuV8g9iQnpxkpfnojmLufoFp5wdQ&usqp=CAU",
  },
  {
    title: "Tress",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUImHCTRxHl5dJ4IUd9KPw3XmJHka-Ia3iQw&s",
  },
  {
    title: "Climbers",
    imageUrl:
      "https://www.jacksonsnurseries.co.uk/images/companies/1/Climbing%20plants%20against%20brick%20wall.jpg",
  },
  {
    title: "Creepers",
    imageUrl:
      "https://m.media-amazon.com/images/I/71-xVGV9uRL._AC_UF894,1000_QL80_.jpg",
  },
  // Add more categories as needed
];

const CategorySection = () => {
  return (
    <Container className=" mt-10 h-fit">
      <h1 className=" text-4xl font-bold text-green-500 text-center">
        Categories
      </h1>
      <div className="container mx-auto py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </Container>
  );
};

export default CategorySection;
