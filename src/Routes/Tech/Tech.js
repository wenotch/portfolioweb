import { IconButton } from "@material-ui/core";
import React from "react";
import HomeImage from "./../../images/nwanochie-tech.svg";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./Tech.css";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { delay: 0, duration: 1 } },
  exit: {
    x: "100vw",
    transition: { ease: "easeInOut" },
  },
};
function Tech() {
  return (
    <motion.div
      className="container k"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="leftside">
        <h1 className="techj">
          <span>Technologies</span>
        </h1>
        {/* <p>
          It is not just about the tools because they may change. It is about
          the product and the fulfilment of set goal. That remains t
        </p> */}
        <div className="unordered">
          <ul>
            <li>Javascript/C/C++</li>
            <li>ReactJs</li>
            <li>Nodejs</li>
            <li>Expressjs</li>
          </ul>
          <ul>
            <li>MongoDB</li>
            <li>Material-Ui</li>
            <li>Bootstrap</li>
            <li>Saas</li>
          </ul>{" "}
          <ul>
            <li>Adobe Xd</li>
            <li>Css</li>
            <li>Html</li>
          </ul>
        </div>
        <IconButton className="viewbtn">
          <Link className="view" to="/works">
            View my works
            <ArrowRightAltIcon fontSize="large" className="arrow" />
          </Link>
        </IconButton>
      </div>
      <div className="rightside">
        <img src={HomeImage} alt="nwanochie as a web developer" />
      </div>
    </motion.div>
  );
}

export default Tech;
