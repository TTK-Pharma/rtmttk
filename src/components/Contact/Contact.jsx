import "./contact.scss";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import top from "../../assets/top.png";
import { Link } from "react-scroll";

const variants = {
  initial: {
    y: "200px",
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const formVariants = {
  initial: {
    x: "250px",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const slideTop = {
  initial: {
    y: "12px",
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Contact = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ycw1zl",
        "template_skukefg",
        form.current,
        "9ztcgPTaw421KP9fs"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log ("EmailJs error: "error)
        }
      );
  };

  return (
    <section id="Contact">
      <div className="contact">
        <motion.div
          className="textContainer"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <h1>Let's build together</h1>
          <div className="item">
            <h2>Mail</h2>
            <span>thiruraju05@gmail.com</span>
          </div>
        </motion.div>
        <div className="formContainer">
          <motion.form
            variants={formVariants}
            initial="initial"
            whileInView="animate"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              required
              autoComplete="off"
              placeholder="Name"
              name="name"
            />
            <input
              type="email"
              required
              placeholder="Email"
              autoComplete="off"
              name="email"
            />
            <textarea rows={8} required placeholder="Message" name="message" />
            <button type="submit" value="send">
              Submit
            </button>

            <h2 style={{ color: "red" }}>{error && "Some error {error} "}</h2>
            <h2 style={{ color: "green" }}>{success && "Success"}</h2>
          </motion.form>
        </div>
        <Link
          to="Home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <div className="backtop">
            <motion.img
              src={top}
              alt="Back to top"
              style={{
                height: "30px",
                borderRadius: "40px",
                marginTop: "390px",
                cursor: "pointer",
                marginRight: "30px",
              }}
              variants={slideTop}
              initial="initial"
              animate="animate"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
