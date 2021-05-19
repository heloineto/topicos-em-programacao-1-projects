import React from 'react';
import { Link } from 'react-router-dom';
import ImgSlider from '../ImgSlider';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CardsSection />
      <RecentWorkSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero mx-8">
      <div className="hero-img-wrapper relative">
        <div className="hero-img-text-wrapper z-10 absolute bottom-0 right-0 mb-12 mr-12 text-white font-medium flex flex-col items-end">
          <div className="hero-img-title bg-green-400 mb-3 w-max p-3">
            XTH-3000
          </div>
          <div className="hero-img-subtitle bg-black bg-opacity-50 w-max p-3">
            As melhores imagens do mercado, direto para você!
          </div>
        </div>
        <div className="hero-img-overlay bg-white bg-opacity-25 w-full h-full absolute"></div>
        <ImgSlider />
      </div>
    </section>
  );
}

function CardsSection() {
  const renderCards = () => {
    return [...Array(3).keys()].map((idx) => {
      return (
        <div key={idx} className="card-wrapper">
          <div className="p-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full object-cover h-52"
                src={`imgs/card-${idx}.jpg`}
                alt="Girl 1"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 w-full text-center">
                  Lorem Ipsum
                </div>
                <p className="text-gray-700 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicingelit. Totam
                  error fugit blanditiis mollitiandaelaboriosam saepe!
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section>
      <div className="cards-wrapper flex flex-row justify-between">
        {renderCards()}
      </div>
    </section>
  );
}

function RecentWorkSection() {
  const renderItems = () => {
    return [...Array(4).keys()].map((idx) => {
      const imgSize = 300 + 100 * idx;

      return (
        <li key={idx} className="relative block group">
          <img
            src={`https://picsum.photos/${imgSize}/${imgSize}`}
            width="300"
            height="300"
            className="object-cover pointer-events-none group-hover:opacity-75"
            alt=""
          />
          <Link
            className="absolute bottom-0 bg-white bg-opacity-50 w-full text-center text-gray-700 py-4"
            to=""
          >
            {`Imagem ${idx + 1}`}
          </Link>
        </li>
      );
    });
  };

  return (
    <section className="hero mx-8">
      <div className="font-bold text-3xl mb-2 w-full text-center">
        Trabalhos Recentes
      </div>
      <p className="text-gray-700 text-center mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam error
        fugit blanditiis mollitiandae laboriosam saepe!
      </p>

      <ul className="flex flex-row justify-center">{renderItems()}</ul>
    </section>
  );
}
