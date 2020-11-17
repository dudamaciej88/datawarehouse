import React from 'react';
import Image1 from '../../assets/image1.png';
import Image2 from '../../assets/image2.png';
import Btn from '../Btn/Btn';
import { Container, Headline, H1, P, Img } from './About.style';

const About = () => {
  return (
    <>
      <Container>
        <Headline>
          <H1>Save your data storage here.</H1>
          <P>
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </P>
          <Btn
            animate={{ opacity: 1 }}
            transition={{
              opacity: { delay: 1.5, ease: 'easeOut', duration: 1 },
            }}
          />
        </Headline>
        <Img
          src={Image1}
          alt='woman and diagrams'
          
        ></Img>
      </Container>
    </>
  );
};

export default About;
