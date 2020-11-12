import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 35px;
  width: 50px;
  margin-left: 20px;
`;

export const PurpleDiv = styled(motion.div)`
  width: 20px;
  background-color: #9c69e2;
  border-radius: 20px;
`;

export const PinkDiv = styled(motion.div)`
  width: 20px;
  background-color: #f063b8;
  border-radius: 20px;
`;
