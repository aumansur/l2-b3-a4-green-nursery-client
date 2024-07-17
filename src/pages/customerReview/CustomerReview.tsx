import React from "react";

type CustomerReviewProps = {
  name: string;
  image: string;
  review: string;
};

const CustomerReview: React.FC<CustomerReviewProps> = ({
  name,
  image,
  review,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
      <img
        src={image}
        alt={`${name}'s picture`}
        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
      />
      <div className="text-center md:text-left">
        <h3 className="text-lg md:text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 mt-2">{review}</p>
      </div>
    </div>
  );
};

export default CustomerReview;
