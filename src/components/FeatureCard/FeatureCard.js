import React from 'react';
import { Container, Container2, Img, H3, P } from './FeatureCard.style';
import Btn from '../Btn/Btn';

const FeatureCard = ({ backgroundImg, image, name, description }) => {
  return (
    <Container backgroundImg={backgroundImg}>
      <Img src={image} alt=''></Img>
      <Container2>
        <H3>{name}</H3>
        <P>{description}</P>
        <Btn animate={{ opacity: 1 }}/>
      </Container2>
    </Container>
  );
};

export default FeatureCard;
