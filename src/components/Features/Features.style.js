import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
  max-width: 1200px;
  @media (min-width: 1200px) {
    margin: 0px auto;
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
  max-width: 1200px;
  @media (min-width: 1200px) {
    margin: 0px auto;
  }
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    width: 620px;
    z-index: 10;
  }
`;

export const H2 = styled(motion.h2)`
  font-size: 2rem;
  font-family: 'Roboto';
  margin-top: 3rem;
  margin-bottom: 0rem;
  @media (min-width: 1200px) {
    font-size: 3rem;
  }
`;

export const P = styled(motion.p)`
  font-family: 'Montserrat';
  font-size: 1rem;
  text-align: center;
  color: #4b5d68;
  max-width: 800px;
  line-height: 160%;
`;
