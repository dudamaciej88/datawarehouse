import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { Container, PurpleDiv, PinkDiv } from './Logo.style';

const Logo = () => {
  const [isHovered, setHovered] = useState(false);

  return (
      <Link to='/'>
    <Container
      whileTap={{ scale: 0.8 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <PurpleDiv
        animate={{ height: isHovered ? '35px' : '20px' }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      />
      <PinkDiv
        animate={{ height: isHovered ? '20px' : '35px' }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      />
    </Container>
    </Link>
  );
};

export default Logo;
