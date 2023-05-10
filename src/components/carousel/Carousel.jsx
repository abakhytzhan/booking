import arrowLeft from "./img/arrowLeftLight.svg";
import arrowRight from "./img/arrowRightLight.svg";
import { useState } from "react";

const Carousel = ({ room }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  let dataSlider = room.images?.map((image) => image?.url);

  if (dataSlider.length === 0) {
    dataSlider = [
      "https://thumb.tildacdn.com/tild3366-3662-4761-b836-356639346166/-/format/webp/photo1664884357_8.jpeg",
      "https://thumb.tildacdn.com/tild3666-3939-4339-a332-333163343733/-/format/webp/photo1664884357_6.jpeg",
      "https://thumb.tildacdn.com/tild3864-6465-4665-a136-613930663335/-/format/webp/photo1664884357_5.jpeg",
    ];
  }

  const nextSlide = () => {
    if (slideIndex !== dataSlider?.length) {
      setSlideIndex((slideIndex) => slideIndex + 1);
    } else if (slideIndex === dataSlider?.length) {
      setSlideIndex(() => 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex((slideIndex) => slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(() => dataSlider?.length);
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
          {Array.from({ length: dataSlider?.length }).map((item, index) => (
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
