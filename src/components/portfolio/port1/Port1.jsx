import React from "react";
import movie from "../assetss/movie1.png";
import "./port1.scss";
import i1 from '../assetss/movie1.png';
import i2 from '../assetss/movie2.png';
import i3 from '../assetss/movie3.png';
import i4 from '../assetss/movie4.png';
import i5 from '../assetss/movie5.png';
import i6 from '../assetss/movie6.png';
import i7 from '../assetss/movie7.png';
import { motion} from "framer-motion";

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


const Port1 = () => {


  return (
    <div className="port1">
      <div className="Header">
          <h1>My <span>works...</span></h1>
        </div>
      <motion.div className="container"  variants={variantss} 
          initial="initial" whileInView="animate">
        <div className="imageContainer">
          <img src={movie} alt="Movie" />
        </div>
        <div className="textContainer">
          <h2>Movie Review Site</h2>
          <p>We can see the details of specific movie...</p>
          </div>
      </motion.div>

      <motion.div className="slideContainer" variants={variants} 
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
  );
};

export default Port1;
