import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  @media (min-width: 768px) {
    width: 40%;
    margin: 20px 20px;
  }
`;

export const Container2 = styled(motion.div)`
  width: 50%;
  padding: 10px 10px;
`;

export const Img = styled(motion.img)`
  width: 30%;
  height: 120px;
  @media (min-width: 576px) {
    height: 150px;
  }
`;

export const H3 = styled(motion.h3)`
  font-size: 1.6rem;
  font-family: 'Roboto';
`;

export const P = styled(motion.p)`
  font-family: 'Montserrat';
  font-size: 1rem;
  color: #4b5d68;
  line-height: 140%;
`;
