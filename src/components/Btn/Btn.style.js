import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 50px;
  border-radius: 50px;
  background-color: #9c69e2;
  font-family: 'Montserrat';
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  scale: 1;
  opacity: 0;
`;