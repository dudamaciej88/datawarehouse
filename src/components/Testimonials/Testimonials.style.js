import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  margin: 0px 20px;
  max-width: 1200px;
  background: #9c69e2;
  border-radius: 50px;
  padding: 0px 20px;
  overflow: hidden;
  @media (min-width: 1200px) {
    margin: 0px auto;
  }
`;

export const H2 = styled(motion.h2)`
  font-size: 2rem;
  font-family: 'Roboto';
  color: white;
  margin: 0px 0px;
  padding: 3rem 0rem;
  @media (min-width: 1200px) {
    font-size: 3rem;
  }
`;
