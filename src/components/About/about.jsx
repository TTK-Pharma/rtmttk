import React from 'react';
import "./about.scss";
import { motion } from 'framer-motion';
import image from "../../assets/meeee.png";

const About = () => {


    return (
        <motion.div className='About' viewport={{ once: false }}>
            <motion.div className='textContainer'
            >
                <motion.h3 className="headLine"
                    initial={{
                        x: "-100px"
                    }}
                    whileInView={{
                        x: "0px",
                        transition: {
                            duration: 1
                        }
                    }}
                >
                    Wet hands. Clean code. One obsession.
                </motion.h3>
                <motion.p className='ab'
                    initial={{
                        x: "100px"
                    }}
                    whileInView={{
                        x: "0px",
                        transition: {
                            duration: 1
                        }
                    }}
                >
                    Life writes its secrets in biology. I learned to read them in code.
                    <br />
                    And somewhere in that translation, I found my place.
                </motion.p>
                <motion.h3 className='h3'>

                    The Story So Far
                </motion.h3>
                <motion.p className='meb'
                    initial={{
                        x: "-150px"
                    }}
                    whileInView={{
                        x: "0px",
                        transition: {
                            duration: 1
                        }
                    }}
                >
                    <motion.p className="p1 ">
                        Most people discover their direction over time - I just had two, running parallel, for as long as I can remember. Biology in one hand. Software in the other. Never a conflict. Always a conversation.
                    </motion.p>
                    <motion.div className="line1" style={{ borderTop: "4px solid #fff", width: "50%", margin: "20px auto" }}></motion.div>
                    <motion.p className="p2">
                        There's something deeply satisfying about understanding a system. How its parts talk to each other. Where it breaks. What holds it together. That feeling is what pulled me into both biology & software.
                    </motion.p>
                    <motion.div className="line2" style={{ borderTop: "4px solid #fff", width: "50%", margin: "20px auto" }}></motion.div>
                    <motion.p className="p3">
                        I spend my time building, reading, and occasionally going down rabbit holes I didn't plan for. Some of them become projects. Some just make me better at asking questions.
                    </motion.p>
                </motion.p>
                <motion.img className='imge' src={image}
                    initial={{
                        x: "150px"
                    }}
                    whileInView={{
                        x: "0px",
                        transition: {
                            duration: 1
                        }
                    }}
                >

                </motion.img>
                <motion.p className="p4"
                    initial={{
                        x: "100px"
                    }}
                    whileInView={{
                        x: "0px",
                        transition: {
                            duration: 1
                        }
                    }}
                >
                    🎓 Tata Trusts Scholar · M.Pharm · CGPA 9.42
                    <motion.p className="p5">
                        JSS College of Pharmacy
                    </motion.p>

                </motion.p>
            </motion.div>
        </motion.div >
    )
}

export default About