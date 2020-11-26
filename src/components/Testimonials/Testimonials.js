import React from 'react';
import { Container, H2 } from './Testimonials.style';
import Carousel from '../Carousel/Carousel';
import testimonialsData from '../../data/testimonialsData';

const Testimonials = () => {
  return (
    <Container>
      <H2>Testimonials</H2>
      <Carousel dataArr={testimonialsData} />
    </Container>
  );
};

export default Testimonials;
