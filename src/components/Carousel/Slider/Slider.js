import React from 'react';
import { Container, Slide, H4, P1, P2 } from './Slider.style';

const Slider = ({ dataArr = [], activeIndex, direction }) => {
  

  return (
    <Container length={dataArr.length} activeIndex={activeIndex}>
      {dataArr.map((s, index) => (
        <Slide
          key={index}
        >
          <H4>{s.name}</H4>
          <P1>{s.company}</P1>
          <P2>{s.description}</P2>
        </Slide>
      ))}
    </Container>
  );
};

export default Slider;
