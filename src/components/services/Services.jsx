import React from 'react';
import './services.scss';
import ui from '../../assets/uii.jpg';
import dev from '../../assets/developer.jpg';
import hands from '../../assets/group.webp';
import { motion } from 'framer-motion';

const Services = () => {
  const textVariants = {
    initial:{x: '200px'},
    animate:{
      x: 0,
      transition:{
        duration: 1
      }
    }
    
  }
  
  return (
    <motion.div className='services'>
        <motion.div className="textContainer" 
          initial={{
            x: "200px"
          }}
        whileInView={
          {
            x: 0,
            transition: {
              duration: 1
            }
          }
        } >
            <motion.p>
            My pharmacy background prescribes innovative  <br /> web solutions  for a healthier online world.
            </motion.p>
        </motion.div>
        <motion.div className="titleContainer">
            <h1>My <span>Services...</span></h1>
        </motion.div>
        <motion.div className="listContainer">
          <motion.div className="box1"
            initial={{
              x: "-250px"
            }}
            whileInView={
              {
                x: 0,
                transition: {
                  duration: 2
                }
              }
            }
          >
          <img src={dev} alt="Dev" style={{height: '120px'}}/>
            <h2>Web Development</h2>
            <h5>
              Transforming Ideas into Impactful Web Experiences.
            </h5>
            <p>
            Whether you're seeking a brand-new website, an engaging e-commerce platform, , I'm committed to delivering a high-quality product that exceeds your expectations.
            </p>
            
          </motion.div>

          <motion.div className="box2"
            initial={{
              x: "250px"
            }}
            whileInView={
              {
                x: 0,
                transition: {
                  duration: 2
                }
              }
            }
          >
            <img src={ui} alt="UI" style={{height: '120px'}}/>
              <h2>UI Design</h2>
              <h5>
                Transforming Ideas into Pixel-Perfect Experiences.
              </h5>
             <p>
               Whether you're seeking a captivating website, or a user-friendly dashboard to streamline your workflows, I'm here to guide you every step of the journey.
              </p>
          </motion.div>
        </motion.div>
        <motion.div className='hands'
          initial={{
            y: "200px"
          }}
          whileInView={
            {
              y: 0,
              transition: {
                duration: 2              }
            }
          }
        >
          <img src={hands} alt="Together" />
        </motion.div>
        <motion.div className='work'
          initial={{
            y: "200px"
          }}
          whileInView={
            {
              y: 0,
              transition: {
                duration: 2              }
            }
          }
        >
          Let's work together to bring your vision to life and make a positive impact on the web.
        </motion.div>
    </motion.div>
  )
}

export default Services