import React, {useState} from 'react';
import {motion} from 'framer-motion'

const Practice = () => {
  const [open, setOpen] = useState(false)

  const variants = {
    hidden: {
      clipPath: 'circle(50px at 50px 0)',
      transition: {
        type: 'spring',
        delay: 0.5,
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      clipPath: 'circle(130px at 50px 0)',
      transition: {
        type: 'spring',
        stiffness: 30,
      }
    }
  }
  return (
    <div className='practice'  >
        <motion.div className="box"
        animate = {open ? "open" : "hidden"}
        variants={variants}        
        ></motion.div>
        {
          open ? console.log('first') : console.log('not')
        }
        <button onClick={()=>setOpen(!open)}>click</button>
    </div>
  )
}

export default Practice