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
  overflow: hidden;
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const Headline = styled.div`
  flex-direction: column;
  @media (min-width: 1200px) {
    width: 620px;
    z-index: 10;
  }
`;

export const H1 = styled(motion.h1)`
  font-size: 3rem;
  font-family: 'Roboto';
  max-width: 540px;
  opacity: 0;
  margin-left: -200px;
  margin-right: 200px;
  @media (min-width: 1200px) {
    max-width: 640px;
    width: 640px;
    font-size: 5rem;
  }
`;

export const H2 = styled(motion.h2)`
  font-size: 2rem;
  font-family: 'Roboto';
  @media (min-width: 1200px) {
    margin: 30px 30px;
    font-size: 3rem;
  }
`;

export const P = styled(motion.p)`
  font-family: 'Montserrat';
  font-size: 1.2rem;
  color: #4b5d68;
  line-height: 160%;
  max-width: 800px;
  margin-left: -200px;
  margin-right: 200px;
  opacity: 0;
  @media (min-width: 1200px) {
    max-width: 380px;
  }
`;

export const P2 = styled(motion.p)`
  font-family: 'Montserrat';
  font-size: 1rem;
  color: #4b5d68;
  margin: 0px 0px;
  line-height: 160%;
  @media (min-width: 1200px) {
    margin: 0px 30px;
  }
`;

export const Img = styled(motion.img)`
  position: relative;
  left: 0px;
  top: 10px;
  opacity: 1;
  max-width: 100%;
  left: 300px;
  opacity: 0;
  @media (min-width: 1200px) {
    left: 0px;
    right: 0px;
    top: 100px;
    width: 700px;
  }
`;

export const Container2 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: rgba(240, 99, 184, 0.15);
  border-radius: 50px;
  max-width: 1200px;
  margin: 0px 20px;
  padding: 0px 20px;
  overflow: hidden;
  box-sizing: border-box;
  @media (min-width: 1200px) {
    margin: 0px auto;
    flex-direction: row-reverse;
    justify-content: flex-start;
  }
`;

export const Container3 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1200px) {
    justify-content: flex-start;
  }
`;

export const Img2 = styled(motion.img)`
  width: 100%;
`;
