import React, { useContext } from "react";
import "./Works.css";
import Html from "../../img/html.png";
import Css from "../../img/css.png";
import Reacts from "../../img/React.svg.png";
import JavaScript from "../../img/javaScript.png";
import Bootstrap from "../../img/Bootstrap.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3000, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Html} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Css} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Reacts} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={JavaScript} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Bootstrap} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
