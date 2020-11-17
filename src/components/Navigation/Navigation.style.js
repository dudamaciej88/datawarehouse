import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NavContainer = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #f063b8;
  top: ${(props) => (props.isOpen ? '0px' : '-100vh')};
  left: ${(props) => (props.isOpen ? '0px' : '100vw')};
  border-radius: 0px 0px 0px ${(props) => (props.isOpen ? '0px' : '50%')};
  transition: top 0.5s linear, left 0.5s linear, border-radius 0.7s linear;
  z-index: 50;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: relative;
    margin-left: 20px;
    margin-right: 30px;
    top: 0px;
    left: 0px;
    border-radius: 0;
    height: 2.7rem;
    background-color: transparent;
  }
`;

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
