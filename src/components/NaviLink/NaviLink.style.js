import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const LinkWrapper = styled(motion.div)`
  margin: 20px auto;
  opacity: 0;
  @media (min-width: 768px) {
    margin: 20px 20px;
  }
`;

export const NavLink = styled(Link)`
  color: #212353;
  text-decoration: none;
  font-family: 'Montserrat';
`;