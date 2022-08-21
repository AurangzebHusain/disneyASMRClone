import React, { useEffect } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImagesData from "../../public/data/sliderImages.json";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autplay: true,
  };

  const sliderImages: any = sliderImagesData;
  return (
    <div>
      <Carousel {...settings}>
        {sliderImages.map((slider: any, index: number) => (
          <Wrap key={index}>
            <a>
              <div>
                <span className="slider-title">{slider.title}</span>
                <span className="slider-subtitle">{slider.subtitle}</span>
                <span className="slider-description">{slider.description}</span>
              </div>
              <img src={slider.img} alt="" />
            </a>
          </Wrap>
        ))}
      </Carousel>
    </div>
  );
};
export const Wrap = styled.div`
  height: 60%;
  width: 100%;
  a {
    position: relative;
    div {
      display: flex;
      width: 30%;
      min-width: 300px;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      position: absolute;
      gap: 20px;
      padding: 0 10px;
      .slider-title {
        font-size: 3rem;
        font-weight: 800;
      }
      .slider-description,
      .slider-subtitle {
        color: rgba(255, 255, 255, 0.8);
      }
    }
    /* display: flex; */
  }
  img {
    margin-left: auto;
    width: 70%;
    height: 100%;
  }
`;
export const Carousel = styled(Slider)`
  width: 95vw;
  margin: 0 auto;
  &:hover {
    button {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  & > button {
    opacity: 0;
    width: 5vw;
    height: 100%;
    z-index: 1;
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
    /* width: 90% !important; */
    /* overflow: initial; */
  }
  .slick-prev {
    left: -50px;
  }
  .slick-next {
    right: -50px;
  }
`;
export default ImageSlider;
