import React, { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';
import { Container, Container2, Img, H3, P } from './FeatureCard.style';


const FeatureCard = ({ backgroundImg, image, name, description }) => {
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
    <Container
      backgroundImg={backgroundImg}
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={{
        visible: { scale: 1 },
        hidden: { scale: 0 },
      }}
      transition={{ ease: 'easeOut', duration: 1, delayChildren: 1 }}
    >
      <Img
        src={image}
        alt=''
        initial='hidden'
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ ease: 'easeOut', duration: 1.5 }}
      ></Img>
      <Container2
        initial='hidden'
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        <H3>{name}</H3>
        <P>{description}</P>
        
      </Container2>
    </Container>
  );
};

export default FeatureCard;
