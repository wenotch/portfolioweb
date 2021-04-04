import { IconButton } from "@material-ui/core";
import React from "react";
import HomeImage from "./../../images/nwanoch.svg";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./Home.css";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { delay: 0, duration: 1 } },
  exit: {
    x: "100vw",
    transition: { ease: "easeInOut" },
  },
};
function Home() {
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
          Hello! <br className="break" /> <div className="ss"></div> I'm{" "}
          <span>Emmanuel Nwanochie</span>
        </h1>
        <h1>I am a Full Stack Web Developer.</h1>

        <IconButton className="viewbtn">
          <Link className="view phone" to="/works">
            View my works
            <ArrowRightAltIcon fontSize="large" className="arrow" />
          </Link>
        </IconButton>
      </div>
      <div className="rightside m4">
        <img src={HomeImage} alt="nwanochie as a web developer" />
      </div>
    </motion.div>
  );
}

export default Home;
