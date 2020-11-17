import React, { useState } from 'react';
import { BtnContainer, P, Arrow, Div } from './RequestBtn.style';

const RequestBtn = () => {
  const [isHovered, setHovered] = useState(false);
  return (
    <BtnContainer
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={{ scale: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ opacity: { ease: 'easeOut', duration: 3 } }}
    >
      <P>Request Demo</P>
      <Div
        animate={{
          marginLeft: isHovered ? '6px' : '0px',
          scale: isHovered ? 1.2 : 1,
        }}
      >
        <Arrow />
      </Div>
    </BtnContainer>
  );
};

export default RequestBtn;
