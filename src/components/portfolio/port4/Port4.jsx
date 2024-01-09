import React from "react";
import netflix from '../assetss/homePage3.png'
import './port4.scss';
import h1 from '../assetss/homePage1.png';
import h2 from '../assetss/homePage2.png';
import h3 from '../assetss/homePage3.png';
import h4 from '../assetss/homePage4.png';
import h5 from '../assetss/homePage5.png';
import h6 from '../assetss/homePage6.png';
import h7 from '../assetss/homePage7.png';
import { motion } from "framer-motion";
const variants = {
  initial: {
    y: "200px",
  },
  animate: {
    y: 0,
    transition: {
    duration: 2
    }
  }
}

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
    y: "10px",
    transition:{
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
}

const Port4 = () => {
  return (
    <div className="port4">
      <motion.div className="container" variants={variantss} initial="initial" whileInView="animate">
        <div className="imageContainer">
          <img src={netflix} alt="Movie" />
        </div>
        <div className="textContainer">
          <h2>Netflix Homepage</h2>
          <p>This is my first work...</p>
        </div>
      </motion.div>

      <motion.div className="slideContainer" variants={variants} 
          initial="initial" whileInView="animate"
          
          >
        <motion.img src={h1} alt="1" variants={slideVariant} initial="initial" animate="animate"/>
        <motion.img src={h2} alt="2" variants={slideVariant} initial="initial" animate="animate"/>
        <motion.img src={h3} alt="3" variants={slideVariant} initial="initial" animate="animate"/>
        <motion.img src={h4} alt="4" variants={slideVariant} initial="initial" animate="animate"/>
        <motion.img src={h5} alt="5" variants={slideVariant} initial="initial" animate="animate"/>
        <motion.img src={h6} alt="6" variants={slideVariant} initial="initial" animate="animate"/>
        <motion.img src={h7} alt="7" variants={slideVariant} initial="initial" animate="animate"/>
      </motion.div>

      {/* <h2>
        Loading.....
      </h2> */}
    </div>
  );
};

export default Port4;
