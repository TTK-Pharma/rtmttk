import React, { useRef } from 'react';
import './parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({type}) => {

    const ref = useRef()

    const {scrollYProgress}  = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const xText = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);
    const ybg = useTransform(scrollYProgress, [0,1], ["0%", "100%"])
  return (
    <div className='parallax' ref={ref}>
        <motion.h1 style={{y: xText}}>{type==='services' ? 'What We Do' : 'What We Did'}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" style={{y: xText}}></motion.div>
        <motion.div className="stars" style={{x: ybg}}></motion.div>
    </div>
  )
}

export default Parallax