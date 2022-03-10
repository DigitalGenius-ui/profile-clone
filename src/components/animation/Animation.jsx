import React from 'react';
import {motion} from 'framer-motion';

const animations = {
    initial : {opacity : 0, y : 20},
    animate : {opacity : 1, y : 0},
    exit : {opacity : 1, y : -20},
}
const Animation = ({children, transition, delay}) => {
  return (
    <motion.div variants={animations}
    initial="initial" animate='animate' exit="exit"
    transition={{duration : transition, delay : delay}}
    >
        {children}
    </motion.div>
  )
}

export default Animation