import React from "react";
import Cards from "./Cards/Cards";
import "./Works.css";
import Nwanoch from "./../../images/nwanoch.png";
import Zentrum from "./../../images/zentrum.png";
import Gray2green from "./../../images/gray2green.png";
import Tinder from "./../../images/tinder.png";
import Mech from "./../../images/mech.png";
import Afri from "./../../images/afristudent.png";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { delay: 0, duration: 1 } },
  exit: {
    x: "100vw",
    transition: { ease: "easeInOut" },
  },
};
function Works() {
  return (
    <motion.div
      className="projects"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Projects</h1>
      <div className="works">
        <div className="row">
          <Cards
            className="cards"
            src={Zentrum}
            text="The official website of zentrum a startup who recently participated in the  acumen rockerfeller foundation 2020   cohort   zentrumit.com"
            title="Zentrum"
            link="/"
            span=" Html, Css and Javascript."
          />

          <Cards
            className="cards"
            src={Nwanoch}
            title="Portfolio"
            text="This is my portfolio website. it is currently here. Nwanochie.com "
            link="/"
            span="Reactjs, MongoDB, Express and Nodejs."
          />
          <Cards
            className="cards"
            src={Afri}
            title="African Students"
            text="A student organization website, to help establish her online presence.
Built with "
            link="/"
            span=" Html, Css and Javascript."
          />
        </div>

        <div className="row">
          <Cards
            className="cards"
            src={Gray2green}
            title="Gray2green"
            text="A website for a climate activism movement in Nigeria. Built with. Gray2green.org"
            link="/"
            span=" Html, Css and Javascript."
          />
          <Cards
            className="cards"
            src={Mech}
            title="Unn Mechanical Conference"
            text="Built for mechanical engineering department University of nigeria nsukka, to facilitate communication of during her 2020 conference. Built with "
            link="/"
            span="Html, Css and Javascript."
          />
          <Cards
            className="cards"
            src={Tinder}
            title="Tinder Clone"
            text="Clone of the tinder dating website. made using "
            link="/"
            span="Reactjs, MongoDB, Express and Nodejs."
          />
        </div>

        {/* <div className="row">
          <Cards
            className="cards"
            src={Flowa}
            title="Flowa"
            text="A platform where users can post there favorite flowers with tips on how to grow and maintain them. Built with "
            link="/"
            span=" Reactjs, MongoDB, Express and Nodejs."
          />
        </div> */}
      </div>
    </motion.div>
  );
}

export default Works;
