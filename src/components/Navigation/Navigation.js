import React from 'react';
import { NavContainer } from './Navigation.style';
import RequestBtn from '../RequestBtn/RequestBtn';
import NaviLink from '../NaviLink/NaviLink';

const Navigation = ({ isOpen, hamburgerClicked }) => {
  return (
    <NavContainer isOpen={isOpen} onClick={hamburgerClicked}>
      <NaviLink isOpen={isOpen} to='/' delay={0.6}>
        About
      </NaviLink>
      <NaviLink isOpen={isOpen} to='/' delay={0.8}>
        Help
      </NaviLink>
      <NaviLink isOpen={isOpen} to='/' delay={1}>
        Features
      </NaviLink>
      <NaviLink isOpen={isOpen} to='/' delay={1.2}>
        Signup
      </NaviLink>
      <RequestBtn />
    </NavContainer>
  );
};

export default Navigation;
