import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/1363636142/photo/blooming-flowers-in-pots-and-on-shelves-in-the-garden-center.jpg?s=612x612&w=0&k=20&c=dJPHJUFQotG3YH0J4aFaxoV1PJzhM3HVLvVf90Eha3k=" // Replace with your image URL
            alt="Green Nursery"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 md:pl-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-600">
            About Us
          </h2>
          <p className="mt-4 text-gray-700">
            Welcome to our Green Nursery! We are passionate about plants and
            dedicated to providing our customers with a diverse selection of
            high-quality plants, trees, and shrubs. Our mission is to inspire
            and support the love of gardening in our community by offering a
            wide range of plants and expert advice.
          </p>
          <p className="mt-4 text-gray-700">
            Our team is committed to ensuring that every plant we sell is
            healthy and ready to thrive in your garden. Whether you are a
            seasoned gardener or just starting out, we are here to help you find
            the perfect plants for your space.
          </p>
          <p className="mt-4 text-gray-700">
            Join us in our journey to make the world greener, one plant at a
            time!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
