import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import bg_img from "../img/img_background.webp"

class Intro extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bg_img+")"}}>
      {/* </div><div id="home" className="intro route bg-image background"> */}
        
      </div>
    );
  }
}

export default Intro;
