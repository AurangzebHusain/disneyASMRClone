import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autplay: true,
  };

  const sliderImages = [
    "/public/images/slider-badag.jpg",
    "/public/images/slider-badging.jpg",
    "/public/images/slider-scale.jpg",
    "/public/images/slider-scales.jpg",
  ];

  return (
    <div>
      hello
      <Carousel {...settings}>
        {sliderImages.map((img) => (
          <Wrap>
            <a>
              <img src={img} alt="" />
            </a>
          </Wrap>
        ))}
      </Carousel>
    </div>
  );
};
export const Wrap = styled.div`
  height: 100%;
`;
export const Carousel = styled(Slider)`
  width: 90%;
  margin: 0 auto;
  & > button {
    opacity: 0;
    width: 5vw;
    height: 100%;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -50px;
  }
  .slick-next {
    right: -60px;
  }
`;
export default ImageSlider;
