import { IconButton } from "@material-ui/core";
import React from "react";
import HomeImage from "./../../images/nwanochie-cpu.svg";
import { Link } from "react-router-dom";
import "./Contact.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
function Contact() {
  return (
    <div className="container contt k">
      <div className="leftside">
        <h1>
          <span>Contact</span>
        </h1>
        <p className="contat">
          {" "}
          Reach out through any of the channels. Would be glad.{" "}
        </p>
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
        <div className="form">
          <form action="/contact" method="post">
            <div className="inpu">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="inpu">
              <textarea placeholder="Message" />
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
      <div className="rightside">
        <img src={HomeImage} alt="nwanochie as a web developer" />
      </div>
    </div>
  );
}

export default Contact;
