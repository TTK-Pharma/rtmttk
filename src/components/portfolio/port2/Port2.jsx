import React from 'react';
import {motion} from 'framer-motion'
import food from '../assetss/food1.png';
import './port2.scss';
import i1 from '../assetss/food1.png';
import i2 from '../assetss/foo2.png';
import i3 from '../assetss/food3.png';
import i4 from '../assetss/food4.png';
import i5 from '../assetss/food5.png';
import i6 from '../assetss/food6.png';
import i7 from '../assetss/food7.png';


const variantss = {
  initial: {
    y: "200px",
  },
  animate: {
    y: 0,
    transition: {
    duration: 1
    }
  }
}

const slideVariant = {
  initial: {
    y:"-300px"
  },
  animate: {
    y: "0",
    transition:{
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
}

const variants = {
  initial: {
    y: "300px",
  },
  animate: {
    y: 0,
    transition: {
    duration: 2
    }
  }
}

const Port2 = () => {
  return (
    <div className='port2'>
      <motion.div className="container" variants={variantss} initial="initial" whileInView="animate">
        <div className="imageContainer">
          <img src={food} alt="Movie" />
        </div>
        <div className="textContainer">
          <h2>
            Food Ordering Site
          </h2>
          <p>
            We can taste the cuisines from anywhere by just Clicking...
          </p>
        </div>
      </motion.div>
      {/* variants={variants} */}
      <motion.div className="slideContainer"  variants={variants}
          initial="initial" whileInView="animate"
          
          >
        <motion.img src={i1} alt="1" variants={slideVariant} initial="initial" animate="animate"/>
        <motion.img src={i2} alt="2" variants={slideVariant} initial="initial" animate="animate"/>
        <motion.img src={i3} alt="3" variants={slideVariant} initial="initial" animate="animate"/>
        <motion.img src={i4} alt="4" variants={slideVariant} initial="initial" animate="animate"/>
        <motion.img src={i5} alt="5" variants={slideVariant} initial="initial" animate="animate"/>
        <motion.img src={i6} alt="6" variants={slideVariant} initial="initial" animate="animate"/>
        <motion.img src={i7} alt="7" variants={slideVariant} initial="initial" animate="animate"/>
      </motion.div>
    </div>
  )
}

export default Port2