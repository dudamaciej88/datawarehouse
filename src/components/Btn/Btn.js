import React from 'react'
import { Button } from './Btn.style';

const Btn = ({ animate, transition }) => {
    return (
        <Button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      transition={{ scale: { ease: 'easeOut', duration: 0.5 }, ...transition}}
      animate={animate}
    >
      Learn more
    </Button>
    )
}

export default Btn
