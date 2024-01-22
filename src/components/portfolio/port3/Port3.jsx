import climate from '../assetss/climate1.png';
import './port3.scss';
import c1 from '../assetss/climate1.png'
import c2 from '../assetss/climate2.png';
import c3 from '../assetss/climate3.png';
import c4 from '../assetss/climate4.png';
import {motion} from 'framer-motion'



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
    y:"-100px"
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
    y: "200px",
  },
  animate: {
    y: 0,
    transition: {
    duration: 2
    }
  }
}

const Port3 = () => {
  return (
    <div className='port3'>
      <motion.div className="container" variants={variantss} initial="initial"
        whileInView="animate"
      >
      <div className="imageContainer">
        <img src={climate} alt="Movie" />
        
      </div>
      <div className="textContainer">
        <h2>
          Weather reviewing Site
          <a href="https://stalwart-liger-6f25c1.netlify.app/">
          <button  style={{cursor: "pointer", border: "2px solid white", outline: "none",background: "transparent", color: "orangered",
            padding: "5px", fontFamily: "cursive", borderRadius: "6px", fontWeight: "bold", marginLeft: "70px"
          }}>Live Demo</button>
          </a>
        </h2>
        <p>
          Just have a look to safe and happy journey...
        </p>
      </div>

      </motion.div>

      <motion.div className="slideContainer"  variants={variants}
          initial="initial" whileInView="animate"
          
          >
        <motion.img src={c1} alt="1" variants={slideVariant} initial="initial" whileInView="animate"/>
        <motion.img src={c2} alt="2" variants={slideVariant} initial="initial" whileInView="animate"/>
        <motion.img src={c3} alt="3" variants={slideVariant} initial="initial" whileInView="animate"/>
        <motion.img src={c4} alt="4" variants={slideVariant} initial="initial" whileInView="animate"/>
      </motion.div>
    </div>
  )
}

export default Port3