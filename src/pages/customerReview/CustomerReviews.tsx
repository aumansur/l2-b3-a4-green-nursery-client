import React from "react";
import CustomerReview from "./CustomerReview";
import HeaderText from "../../components/HeaderText";
import Container from "../../components/Container";

const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      name: "John Doe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR78PRLIjGxzCAl4RCz7URy4aLTVi7SuAmMw&s",
      review:
        "The plants I ordered were in excellent condition and arrived quickly. Very satisfied with the service!",
    },
    {
      name: "Jane Smith",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      review:
        "Fantastic variety of plants and great customer support. I will definitely order again!",
    },
    // Add more reviews as needed
  ];

  return (
    <Container className="p-4 md:p-8 ">
      <HeaderText>Customer Reviews</HeaderText>
      <div data-aos="flip-left" className="space-y-4 md:space-y-6">
        {reviews.map((review, index) => (
          <CustomerReview
            key={index}
            name={review.name}
            image={review.image}
            review={review.review}
          />
        ))}
      </div>
    </Container>
  );
};

export default CustomerReviews;
