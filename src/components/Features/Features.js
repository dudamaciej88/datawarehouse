import React, { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';
import { Container, Container2, Headline, H2, P } from './Features.style';
import FeatureCard from '../FeatureCard/FeatureCard';
import featureData from '../../data/featureData';

const Features = () => {
  const refH2 = useRef(null);
  const refP = useRef(null);
  const controlsH2 = useAnimation();
  const controlsP = useAnimation();

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controlsH2.start('visible');
          }
        }),
      { threshold: 0.4 }
    );
    observer.observe(refH2.current);

    return () => (observer = observer && observer.disconnect());
  });

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controlsP.start('visible');
          }
        }),
      { threshold: 0.4 }
    );
    observer.observe(refP.current);

    return () => (observer = observer && observer.disconnect());
  });

  return (
    <Container>
      <Headline>
        <H2
          ref={refH2}
          animate={controlsH2}
          initial='hidden'
          variants={{
            visible: { scale: 1 },
            hidden: { scale: 0 },
          }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          Features
        </H2>
        <P
          ref={refP}
          animate={controlsP}
          initial='hidden'
          variants={{
            visible: { scale: 1 },
            hidden: { scale: 0 },
          }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse
        </P>
      </Headline>
      <Container2>
        {featureData.map((feature) => (
          <FeatureCard
            key={feature.id}
            backgroundImg={feature.backgroundImg}
            image={feature.image}
            name={feature.name}
            description={feature.description}
          />
        ))}
      </Container2>
    </Container>
  );
};

export default Features;
