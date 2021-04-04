import { IconButton } from "@material-ui/core";
import React from "react";
import HomeImage from "./../../images/nwanoch.jpg";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./About.css";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { delay: 0, duration: 1 } },
  exit: {
    x: "100vw",
    transition: { ease: "easeInOut" },
  },
};
function About() {
  return (
    <motion.div
      className="container k"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="leftside">
        <h1>
          <span>About me</span>
        </h1>
        <p>
          A full-stack web developer based in Enugu. I use{" "}
          <span> React, Nodejs, Expressjs, MongoDb </span>among other tools to
          create robust, scalable and maintable websites. I genuinely have
          interest in helping businesses and individuals create platforms for
          reaching out to the audience and also ensuring that
          customers/audiences get the best experience . I aspire to
          <span> build stuff.</span>
        </p>

        <IconButton className="viewbtn">
          <Link className="view" to="/contact">
            Contact me
            <ArrowRightAltIcon fontSize="large" className="arrow" />
          </Link>
        </IconButton>
      </div>
      <div className="rightside nwaa">
        <img
          src={HomeImage}
          className="nwan"
          alt="nwanochie as a web developer"
        />
      </div>
    </motion.div>
  );
}

export default About;
