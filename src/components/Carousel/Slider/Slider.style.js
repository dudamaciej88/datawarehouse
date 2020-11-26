import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
position: relative;
  display: flex;
  width: ${props => props.length * 100}%;
  left: ${props => props.activeIndex * -100}%;
  transition: left 1s ease-in-out;
`;

export const Slide = styled(motion.div)`
  position: relative;
  padding: 20px 20px;
  margin: 0px 10px;
  max-width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 20px 0px rgba(122, 105, 226, 0.3);
  border-radius: 20px;
`;

export const H4 = styled(motion.h4)`
  font-size: 1.2rem;
  font-family: 'Roboto';
  margin-bottom: 0.5rem;
`;

export const P1 = styled(motion.p)`
  font-family: 'Montserrat';
  font-size: 0.9rem;
  color: #9c69e2;
`;

export const P2 = styled(motion.p)`
  font-family: 'Montserrat';
  font-size: 1rem;
  color: #4b5d68;
  line-height: 120%;
`;
