import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import LinkedIn from "../../img/linkedin.png";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>gouthamsamineni@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/goutham_samineni/">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://wwwhttps://www.linkedin.com/in/goutham-samineni-099534251/.facebook.com">
            {/* <LinkedIn color="white" size={"3rem"} /> */}
          </a>
          <a href="https://github.com/saminenigowtham">
            <Gitub color="white" size={"3rem"} />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
