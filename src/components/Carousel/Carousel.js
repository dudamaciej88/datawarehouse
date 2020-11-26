import React, { useState } from 'react';
import Slider from './Slider/Slider'

const Carousel = ({ dataArr }) => {
  const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState("toRight");
  const dataLength = dataArr.length;

  const goToPrevSlide = () => {
    console.log('prev slide');
    if (activeIndex < 1) {
      setActiveIndex(dataLength - 1);
    } else {
      setActiveIndex((prevState) => prevState - 1);
    }
  };

  const goToNextSlide = () => {
    console.log('next slide');
    if (activeIndex === dataLength - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <div>
        <Slider dataArr={dataArr} activeIndex={activeIndex}/>
      </div>
      <button onClick={goToPrevSlide}>prev</button>
      <button onClick={goToNextSlide}>next</button>
    </div>
  );
};

export default Carousel;
