import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import img9 from "./img/img9.jpg";
import img10 from "./img/img10.jpg";
import Container from "../Container";

import Gallery from "react-photo-gallery";
import HeaderText from "../HeaderText";

const photos = [
  { src: img1, width: 4, height: 3 },
  { src: img2, width: 1, height: 1 },
  { src: img3, width: 4, height: 3 },
  { src: img4, width: 4, height: 3 },
  { src: img5, width: 1, height: 1 },
  { src: img6, width: 4, height: 3 },
  { src: img7, width: 4, height: 3 },
  { src: img8, width: 1, height: 1 },
  { src: img9, width: 4, height: 3 },
  { src: img10, width: 4, height: 3 },
  // Add more images as needed
];

const ImageGallery = () => {
  return (
    <Container>
      <HeaderText>Our Product Gallery</HeaderText>
      <div className="mt-10" data-aos="zoom-in">
        <Gallery photos={photos} />
      </div>
    </Container>
  );
};

export default ImageGallery;
