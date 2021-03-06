import React, { useState } from 'react';
import { HeaderContainer } from './Header.style';
import Logo from '../Logo/Logo';
import Hamburger from '../Hamburger/Hamburger';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderContainer>
      <Logo />
      <Hamburger
        isOpen={isOpen}
        hamburgerClicked={() => setIsOpen((prevState) => !prevState)}
      />
      <Navigation
        isOpen={isOpen}
        hamburgerClicked={() => setIsOpen((prevState) => !prevState)}
      />
    </HeaderContainer>
  );
};

export default Header;
