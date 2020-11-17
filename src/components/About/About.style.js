import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px auto;
  padding: 0px 20px;
  box-sizing: border-box;
  
`;

export const Headline = styled.div`
  flex-direction: column;
`;

export const H1 = styled(motion.h1)`
  font-size: 3rem;
  font-family: 'Roboto';
  max-width: 540px;
`;

export const P = styled(motion.p)`
  font-family: 'Montserrat';
  font-size: 1.2rem;
  color: #4b5d68;
  line-height: 160%;
  max-width: 728px;
`;

export const Img = styled(motion.img)`
  position: relative;
  left: 0px;
  top: 10px;
  opacity: 1;
  max-width: 100%;
`;
