// CategoryCard.js

type TCategory = {
  title: string;
  imageUrl: string;
};
const CategoryCard = ({ title, imageUrl }: TCategory) => {
  return (
    <div className="relative overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="w-full h-full bg-gradient-to-t from-black to-transparent flex items-end p-4">
          <div className="text-white text-lg flex text-center items-center justify-center font-bold">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
