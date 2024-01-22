import React from "react";
import "./Me.scss";
import me from "../../assets/rtmttk.png";
import { motion } from "framer-motion";
import resume from "../../ThiruKumaran.pdf";
import { Link } from "react-scroll";

const Me = () => {
  const textVariants = {
    initial: {
      opacity: 0,
      x: -500,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const slideVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-250%",
      transition: {
        duration: 20,
        repeatType: "mirror",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="me">
      <div className="contentContainer">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Thiru Kumaran</motion.h2>
          <motion.h1 variants={textVariants}>
            Pharmacist and Web develop<span>er</span>
          </motion.h1>
          <motion.div className="Cbutton" variants={textVariants}>
            <a href={resume} download="ThiruKumaran">
              <motion.button variants={textVariants}>Download Cv</motion.button>
            </a>
            <Link
              to="Contact"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <motion.button variants={textVariants} className="Ccbutton">Contact me</motion.button>
            </Link>
          </motion.div>
          
        </motion.div>
      </div>
      <motion.div
        className="slidingContainer"
        variants={slideVariants}
        initial="initial"
        animate="animate"
      >
        Pharmacist Develop<span>er</span>
      </motion.div>

      <motion.div
        className="imageContainer"
        initial={{
          y: "-100%",
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <img src={me} alt="Image" />
      </motion.div>
    </div>
  );
};

export default Me;
