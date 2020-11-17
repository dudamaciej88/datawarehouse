import React from 'react';
import { LinkWrapper, NavLink } from './NaviLink.style';

const NaviLink = ({ isOpen, to, delay, children }) => {
  return (
    <LinkWrapper
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ opacity: window.innerWidth >= 768 ? 1 : isOpen ? 1 : 0 }}
      transition={{ opacity: {delay: delay, ease: 'easeOut', duration: 1 }}}
    >
      <NavLink to={to}>{children}</NavLink>
    </LinkWrapper>
  );
};

export default NaviLink;
