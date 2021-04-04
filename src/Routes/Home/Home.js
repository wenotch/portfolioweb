import { IconButton } from "@material-ui/core";
import React from "react";
import HomeImage from "./../../images/nwanoch.svg";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./Home.css";
function Home() {
  return (
    <div className="container k">
      <div className="leftside">
        <h1>
          Hello! <br className="break" /> I'm <span>Emmanuel Nwanochie</span>
        </h1>
        <h1>I am a Full Stack Web Developer.</h1>

        <IconButton className="viewbtn">
          <Link className="view phone" to="/works">
            View my works
            <ArrowRightAltIcon fontSize="large" className="arrow" />
          </Link>
        </IconButton>
      </div>
      <div className="rightside m" >
        <img src={HomeImage} alt="nwanochie as a web developer" />
      </div>
    </div>
  );
}

export default Home;
