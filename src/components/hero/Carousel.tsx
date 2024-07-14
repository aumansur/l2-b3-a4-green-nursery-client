import { Carousel } from "antd";

import { NavLink } from "react-router-dom";

const images = [
  "https://i.ibb.co/gvyvg6v/12.jpg",
  "https://i.ibb.co/VqTjPxP/images-2.jpg",
  "https://i.ibb.co/0YkXPgq/countyline-banner-2400-2.jpg",
  "https://i.ibb.co/DtQBT9n/banner1-2000x560.jpg",
  "https://i.ibb.co/rkyXdGV/2021-06-04-cru-title.jpg",
];

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "full",

  height: "10vh",
  //   background: "transparent",
  background: "linear-gradient(to top, var(--tw-gradient-stops))",

  textAlign: "center",
};

const HeroSection = () => {
  return (
    <div>
      <Carousel effect="scrollx" swipe arrows infinite={true} autoplay>
        {images.map((image, index) => (
          <div
            style={contentStyle}
            key={index}
            className="relative rounded-lg ">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[75vh] object-cover rounded-lg"
            />
            <div className="absolute inset-0  bg-gradient-to-t from-black to-transparent  opacity-90"></div>
            <div className="absolute text-white inset-0 flex flex-col gap-8 items-center justify-center">
              <h3 className=" text-center text-white text-6xl px-28 font-bold">
                Our nursery online store offers everything
              </h3>
              <button className="my-primary-btn-outline">
                <NavLink className="hover:text-white" to="/products">
                  See more
                </NavLink>
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
