import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import Logo from "./../../images/logo.png";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import MenuOpenOutlinedIcon from "@material-ui/icons/MenuOpenOutlined";
import CloseIcon from "@material-ui/icons/Close";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <nav>
      <div className="left">
        <img src={Logo} className="logo" alt="personal logo" />
      </div>

      <IconButton className="menu" onClick={showSidebar}>
        <MenuOpenOutlinedIcon style={{ fontSize: 40 }} />
      </IconButton>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars" onClick={showSidebar}>
              <CloseIcon style={{ fontSize: 50 }} />
            </Link>
            <div className="small">
              <NavLink
                onClick={showSidebar}
                className="links"
                exact={true}
                activeClassName="is-active"
                to="/"
              >
                <h4>Home</h4>
              </NavLink>
              <NavLink
                onClick={showSidebar}
                className="links"
                activeClassName="is-active"
                to="/about"
              >
                <h4>About</h4>
              </NavLink>
              <NavLink
                onClick={showSidebar}
                className="links"
                activeClassName="is-active"
                to="/works"
              >
                <h4>Projects</h4>
              </NavLink>
              <NavLink
                onClick={showSidebar}
                className="links"
                activeClassName="is-active"
                to="/tech"
              >
                <h4>Tools</h4>
              </NavLink>
              <NavLink
                onClick={showSidebar}
                className="links"
                activeClassName="is-active"
                to="/contact"
              >
                <h4>Contact me</h4>
              </NavLink>
            </div>
            <div className="socials">
              <IconButton>
                <Link>
                  <LinkedInIcon fontSize="large" className="conticons" />
                </Link>
              </IconButton>{" "}
              <IconButton>
                <Link>
                  <WhatsAppIcon fontSize="large" className="conticons" />
                </Link>
              </IconButton>{" "}
              <IconButton>
                <Link>
                  <FacebookIcon fontSize="large" className="conticons" />
                </Link>
              </IconButton>{" "}
              <IconButton>
                <Link>
                  <EmailIcon fontSize="large" className="conticons" />
                </Link>
              </IconButton>
            </div>
          </li>
          <div
            onClick={showSidebar}
            className={sidebar ? "oveerlay active" : "oveerlay"}
          ></div>
        </ul>
      </nav>

      <div className="right">
        <NavLink
          className="links"
          exact={true}
          activeClassName="is-active"
          to="/"
        >
          <h4>Home</h4>
        </NavLink>
        <NavLink className="links" activeClassName="is-active" to="/about">
          <h4>About</h4>
        </NavLink>
        <NavLink className="links" activeClassName="is-active" to="/works">
          <h4>Projects</h4>
        </NavLink>
        <NavLink className="links" activeClassName="is-active" to="/tech">
          <h4>Tools</h4>
        </NavLink>
        <NavLink className="links" activeClassName="is-active" to="/contact">
          <h4>Contact me</h4>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
