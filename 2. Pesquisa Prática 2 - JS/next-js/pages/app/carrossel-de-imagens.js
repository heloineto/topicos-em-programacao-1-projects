import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const CarrosselData = [
  {
    image:
      'https://images.unsplash.com/photo-1566890284709-98c05574b637?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
  },
  {
    image:
      'https://images.unsplash.com/photo-1598209279122-8541213a0387?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
  },
  {
    image:
      'https://images.unsplash.com/photo-1566844267849-4e16d34971a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
  },
];

export default function CarrosselDeImagens() {
  const [currImgIdx, setCurrImgIdx] = useState(0);

  const renderCarrossel = () => {
    return CarrosselData.map((slide, idx) => {
      if (idx === currImgIdx)
        return (
          <img
            style={{
              width: '900px',
              height: '500px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
            src={slide.image}
            alt=""
          />
        );
      return null;
    });
  };

  const nextSlide = () => {
    setCurrImgIdx(currImgIdx === CarrosselData.length - 1 ? 0 : currImgIdx + 1);
  };

  const prevSlide = () => {
    return setCurrImgIdx(
      currImgIdx === 0 ? CarrosselData.length - 1 : currImgIdx - 1
    );
  };

  return (
    <section
      className="carrossel-wrapper"
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
      {renderCarrossel()}
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
