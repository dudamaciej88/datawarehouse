import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

export const BtnContainer = styled(motion.div)`
  display: none;
  justify-content: center;
  align-items: center;
  height: 60px;
  min-width: 210px;
  border-radius: 50px;
  box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
  margin-right: 0px;
  margin-left: auto;
  opacity: 0;
  cursor: pointer;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const P = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
`;

export const Arrow = styled(ArrowRight)`
  width: 20px;
  height: 14px;
  fill: #9c69e2;
  color: #9c69e2;
  margin-left: 6px;
`;

export const Div = styled(motion.div)`
  margin-left: 0px;
`;
