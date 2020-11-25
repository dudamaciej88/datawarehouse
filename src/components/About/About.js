import React, { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';
import Image1 from '../../assets/image1.png';
import Image2 from '../../assets/image2.png';
import Btn from '../Btn/Btn';
import {
  Container,
  Container2,
  Container3,
  Headline,
  H1,
  H2,
  P,
  P2,
  Img,
  Img2,
} from './About.style';

const About = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible');
          }
        }),
      { threshold: 0.1 }
    );
    observer.observe(ref.current);

    return () => (observer = observer && observer.disconnect());
  });

  return (
    <>
      <Container>
        <Headline>
          <H1
            animate={{ marginLeft: '0px', marginRight: '0px', opacity: 1 }}
            transition={{ delay: 0.5, ease: 'easeOut', duration: 1 }}
          >
            Save your data storage here.
          </H1>
          <P
            animate={{ marginLeft: '0px', marginRight: '0px', opacity: 1 }}
            transition={{ delay: 1, ease: 'easeOut', duration: 1 }}
          >
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </P>
          <Btn
            animate={{ opacity: 1 }}
            transition={{
              opacity: { delay: 2, ease: 'easeOut', duration: 1 },
            }}
          />
        </Headline>
        <Img
          src={Image1}
          alt='woman and diagrams'
          animate={{
            left: window.innerWidth < 1200 ? '0px' : '-250px',
            right: window.innerWidth < 1200 ? '0px' : '250px',
            opacity: 1,
          }}
          transition={{ delay: 1.5, ease: 'easeOut', duration: 1 }}
        ></Img>
      </Container>
      <Container2
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={{
          visible: { scale: 1 },
          hidden: { scale: 0 },
        }}
        transition={{ ease: 'easeOut', duration: 1, delayChildren: 1 }}
      >
        <Container3
          initial='hidden'
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          <H2>We are a high-level data storage bank</H2>
          <P2>
            The place to store various data that you can access at any time
            through the internet and where you can carry it. This very flexible
            storage area has a high level of security. To enter into your own
            data you must enter the password that you created when you
            registered in this Data Warehouse.
          </P2>
        </Container3>
        <Img2
          src={Image2}
          initial='hidden'
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ ease: 'easeOut', duration: 1, delay: 1.5 }}
        ></Img2>
      </Container2>
    </>
  );
};

export default About;
