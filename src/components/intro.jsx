import React from "react";
import "./stars.scss";
import bg_img from "../img/img_background.webp"
import Typed from "react-typed";


class Intro extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bg_img+")"}}>
      {/* </div><div id="home" className="intro route bg-image background"> */}  
      <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h4 className="intro-title mb-4">Welcome to Twentyfourloop</h4>
              {/* <h4 className="intro-title mb-4">The Power of People and Technology</h4> */}
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "IT Services",
                      "Enterprise Mangaement",
                      "Financial Consulting",
                      "Management Consulting",
                      "Business and Customer Services[AT&T, Verizon]",
                      "Operation Consulting",
                      "Strategy Consulting",
                      "HR Consulting",



                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#contact"
                  role="button"
                >
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
