import React from "react";

import bg_img from "../img/services1.avif";

//iot
import iot2 from "../img/iot2.avif";


import EM1 from "../img/EM1.png";

import ai1 from "../img/AIML.avif";

import auto1 from "../img/auto1.avif";

import qa1 from "../img/qa1.avif";


class Itservices extends React.Component {
    // render() {
    //   return (
    //     <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bg_img+")"}}>
    //     {/* </div><div id="home" className="intro route bg-image background"> */}
          
    //     </div>
    //   );
    // }
    constructor() {
        super();
        this.state = {
          skills: [
            
          ],
          about_me: [
            {
              id: "first-p-about",
              content:
                "Twentyfourloop is a telecom space company, enjoy the reach of Twentyfourloop. Our network is built by people like you. We’re a human network that reaches across the globe and works behind the scenes. We anticipate, lead, and believe that listening is where learning begins. In crisis and in celebration, we come together—lifting up our communities and striving to make an impact to move the world forward. Open your mind to better possibilities",
            }
          ],
        };
      }
    
      render() {
        return (
            <div id="itservices" className="itservices route bg-image " style={{backgroundImage: "url("+bg_img+")"}}>
                <section id="itservices" className="about-mf sect-pt4 route">
                {/* <div id="itservices" className="intro route bg-image " style={{backgroundImage: "url("+bg_img+")"}}> */}
                    <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    <div className="title-box text-center">
                        <h3 className="title-a">IT Services</h3>
                        <p className="subtitle-a">IT Services we offers</p>
                        <div className="line-mf"></div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    {/*AI/ML Services*/}
                    <div className="col-md-4">
                    <div className="work-box">
                        <a href={ai1} data-lightbox="gallery-openevent">
                        <div className="work-img">
                            <img src={ai1} alt="" className="img-fluid" />
                        </div>
                        <div className="work-content">
                            <div className="row">
                            <div className="col-sm-8">
                                <h2 className="w-title">AI/ML Services</h2>
                            </div>
                            </div>
                        </div>
                        </a>
                        <div style={{ textAlign: "right" }} className="socials">
                        <ul>
                            <li>
                            <a
                                href="#itservices"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="read-more">
                                Read More
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    {/* Internet of Things */}

                    <div className="col-md-4">
                    <div className="work-box">
                        <a href={iot2} data-lightbox="gallery-openevent">
                        <div className="work-img">
                            <img src={iot2} alt="" className="img-fluid" />
                        </div>
                        <div className="work-content">
                            <div className="row">
                            <div className="col-sm-8">
                                <h2 className="w-title">Internet of Things</h2>
                            </div>
                            </div>
                        </div>
                        </a>
                        <div style={{ textAlign: "right" }} className="socials">
                        <ul>
                            <li>
                            <a
                                href="https://github.com/rkrahulmishra887/Open-Event-Server-Project"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="read-more">
                                Read More
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    {/* Enterprise Management*/}

                    <div className="col-md-4">
                    <div className="work-box">
                        <a href={EM1} data-lightbox="gallery-openevent">
                        <div className="work-img">
                            <img src={EM1} alt="" className="img-fluid" />
                        </div>
                        <div className="work-content">
                            <div className="row">
                            <div className="col-sm-8">
                                <h2 className="w-title">Enterprise Management</h2>
                            </div>
                            </div>
                        </div>
                        </a>
                        <div style={{ textAlign: "right" }} className="socials">
                        <ul>
                            <li>
                            <a
                                href="https://github.com/rkrahulmishra887/Open-Event-Server-Project"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="read-more">
                                Read More
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="work-box">
                        <a href={auto1} data-lightbox="gallery-openevent">
                        <div className="work-img">
                            <img src={auto1} alt="" className="img-fluid" />
                        </div>
                        <div className="work-content">
                            <div className="row">
                            <div className="col-sm-8">
                                <h2 className="w-title">Automation</h2>
                            </div>
                            </div>
                        </div>
                        </a>
                        <div style={{ textAlign: "right" }} className="socials">
                        <ul>
                            <li>
                            <a
                                href="#itservices"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="read-more">
                                Read More
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="work-box">
                        <a href={qa1} data-lightbox="gallery-openevent">
                        <div className="work-img">
                            <img src={qa1} alt="" className="img-fluid" />
                        </div>
                        <div className="work-content">
                            <div className="row">
                            <div className="col-sm-8">
                                <h2 className="w-title">Quality Engineering</h2>
                            </div>
                            </div>
                        </div>
                        </a>
                        <div style={{ textAlign: "right" }} className="socials">
                        <ul>
                            <li>
                            <a
                                href="#itservices"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="read-more">
                                Read More
                                </span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    </div>
            </div>
            </section>
        </div>
        );
      }
  }
  
  export default Itservices;