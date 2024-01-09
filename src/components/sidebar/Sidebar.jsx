import React, { useState } from "react";
import { motion } from "framer-motion";
import "./sidebar.scss";
import { Link } from "react-scroll";
import open from "../../assets/menu.png";
import close from "../../assets/close.png";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <motion.div className="sidebar">
        
          {show ? (
            <motion.div
              className="links"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Link
                to="Home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <motion.p
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setShow(false)}
                >
                  {" "}
                  HomePage
                </motion.p>
              </Link>

              <Link
                to="Services"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={800}
                offset={10}
              >
                <motion.p
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setShow(false)}
                >
                  My Services
                </motion.p>
              </Link>

              <Link
                to="Portfolio"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <motion.p
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setShow(false)}
                >
                  Portfolio
                </motion.p>
              </Link>

              <Link
                to="Contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <motion.p
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setShow(false)}
                >
                  Contact Me
                </motion.p>
              </Link>
            </motion.div>
          ) : (
            <motion.div
            className="links2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="Home"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <motion.p
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.5 }}
                onClick={() => setShow(false)}
              >
                {" "}
                HomePage
              </motion.p>
            </Link>

            <Link
              to="Services"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={800}
              offset={10}
            >
              <motion.p
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.5 }}
                onClick={() => setShow(false)}
              >
                My Services
              </motion.p>
            </Link>

            <Link
              to="Portfolio"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <motion.p
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.5 }}
                onClick={() => setShow(false)}
              >
                Portfolio
              </motion.p>
            </Link>

            <Link
              to="Contact"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <motion.p
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.5 }}
                onClick={() => setShow(false)}
              >
                Contact Me
              </motion.p>
            </Link>
          </motion.div>
          )}
        
      </motion.div>
      <button onClick={() => setShow(!show)} className="button">
        {show ? (
          <motion.img
            src={close}
            className="close"
            alt="ToggleOpen"
            transition={{ duration: 0.5 }}
            animate={{ scale: 1.5 }}
          />
        ) : (
          <motion.img
            src={open}
            className="open"
            alt="ToggleClose"
            transition={{ duration: 0.5 }}
          />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
