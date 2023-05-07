import mountains from "./img/mountains.png";
import care from "./img/care-client-safe.png";
import atmosphere from "./img/atmosphere.png";
import publicIcon from "./img/public-icon.png";
import { useState } from "react";
import arrowLeft from "./img/arrowLeftLight.svg";
import arrowRight from "./img/arrowRightLight.svg";
import phone from "./img/phone.png";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const dataSlider = [atmosphere, care, phone, mountains, publicIcon];

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex((slideIndex) => slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(() => 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex((slideIndex) => slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(() => dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <>
      <div className="container-slider">
        <img src={dataSlider[slideIndex - 1]} className="image" alt="slider" />

        <img
          src={arrowLeft}
          className="arrowLeft"
          onClick={prevSlide}
          alt="arrowLeft"
        ></img>
        <img
          src={arrowRight}
          className="arrowRight"
          onClick={nextSlide}
          alt="arrowRight"
        ></img>
        <div className="container-dots">
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              key={index}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
