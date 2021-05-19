import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const SliderData = [
  {
    img: 'imgs/slider-0.jpg',
  },
  {
    img: 'imgs/slider-1.jpg',
  },
  {
    img: 'imgs/slider-2.jpg',
  },
];

export default function ImgSlider() {
  const [currImgIdx, setCurrImgIdx] = useState(0);

  const renderSlider = () => {
    return SliderData.map((slide, idx) => {
      if (idx === currImgIdx)
        return (
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            src={slide.img}
            alt=""
          />
        );
      return null;
    });
  };

  const nextSlide = () => {
    setCurrImgIdx(currImgIdx === SliderData.length - 1 ? 0 : currImgIdx + 1);
  };

  const prevSlide = () => {
    return setCurrImgIdx(
      currImgIdx === 0 ? SliderData.length - 1 : currImgIdx - 1
    );
  };

  return (
    <section
      className="Slider-wrapper"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FaArrowAltCircleLeft
        style={{
          position: 'absolute',
          top: '50%',
          left: '32px',
          cursor: 'pointer',
          zIndex: '10',
          height: '50px',
          width: '50px',
        }}
        onClick={() => prevSlide()}
      ></FaArrowAltCircleLeft>
      {renderSlider()}
      <FaArrowAltCircleRight
        style={{
          position: 'absolute',
          top: '50%',
          right: '32px',
          zIndex: '10',
          cursor: 'pointer',
          height: '50px',
          width: '50px',
        }}
        onClick={() => nextSlide()}
      ></FaArrowAltCircleRight>
    </section>
  );
}
