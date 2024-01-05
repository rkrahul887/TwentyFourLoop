import React from "react";

import bg_img from "../img/services1.avif";

//Management
import mang1 from "../img/mang1.avif";


import operation1 from "../img/opration1.avif";

import fin1 from "../img/fin1.avif";

import hr1 from "../img/hr1.avif";

import strategy1 from "../img/strategy1.avif";


class Itconsulting extends React.Component {
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
            <div id="itconsulting" className="itconsulting route bg-image " style={{backgroundImage: "url("+bg_img+")"}}>
                <section id="itconsulting" className="about-mf sect-pt4 route">
                {/* <div id="itservices" className="intro route bg-image " style={{backgroundImage: "url("+bg_img+")"}}> */}
                    <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    <div className="title-box text-center">
                        <h3 className="title-a">IT Consulting</h3>
                        <p className="subtitle-a">IT Consulting we offers</p>
                        <div className="line-mf"></div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    {/*Management Consulting*/}
                    <div className="col-md-4">
                    <div className="work-box">
                        <a href={mang1} data-lightbox="gallery-openevent">
                        <div className="work-img">
                            <img src={mang1} alt="" className="img-fluid" />
                        </div>
                        <div className="work-content">
                            <div className="row">
                            <div className="col-sm-8">
                                <h2 className="w-title">Management Consulting</h2>
                            </div>
                            </div>
                        </div>
                        </a>
                        <div style={{ textAlign: "right" }} className="socials">
                        <ul>
                            <li>
                            <a
                                href="#manamgementconsulting"
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

                    {/* Financial Consulting */}

                    <div className="col-md-4">
                    <div className="work-box">
                        <a href={fin1} data-lightbox="gallery-openevent">
                        <div className="work-img">
                            <img src={fin1} alt="" className="img-fluid" />
                        </div>
                        <div className="work-content">
                            <div className="row">
                            <div className="col-sm-8">
                                <h2 className="w-title">Financial Consulting</h2>
                            </div>
                            </div>
                        </div>
                        </a>
                        <div style={{ textAlign: "right" }} className="socials">
                        <ul>
                            <li>
                            <a
                                href="#financialconsulting"
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

                    {/* HR Consulting */} 

                    <div className="col-md-4">
                    <div className="work-box">
                        <a href={hr1} data-lightbox="gallery-openevent">
                        <div className="work-img">
                            <img src={hr1} alt="" className="img-fluid" />
                        </div>
                        <div className="work-content">
                            <div className="row">
                            <div className="col-sm-8">
                                <h2 className="w-title">HR Consulting</h2>
                            </div>
                            </div>
                        </div>
                        </a>
                        <div style={{ textAlign: "right" }} className="socials">
                        <ul>
                            <li>
                            <a
                                href="#hrconsulting"
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
                        <a href={operation1} data-lightbox="gallery-openevent">
                        <div className="work-img">
                            <img src={operation1} alt="" className="img-fluid" />
                        </div>
                        <div className="work-content">
                            <div className="row">
                            <div className="col-sm-8">
                                <h2 className="w-title">Operation Consulting</h2>
                            </div>
                            </div>
                        </div>
                        </a>
                        <div style={{ textAlign: "right" }} className="socials">
                        <ul>
                            <li>
                            <a
                                href="#operationconsulting"
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
                        <a href={strategy1} data-lightbox="gallery-openevent">
                        <div className="work-img">
                            <img src={strategy1} alt="" className="img-fluid" />
                        </div>
                        <div className="work-content">
                            <div className="row">
                            <div className="col-sm-8">
                                <h2 className="w-title">Strategy Consulting</h2>
                            </div>
                            </div>
                        </div>
                        </a>
                        <div style={{ textAlign: "right" }} className="socials">
                        <ul>
                            <li>
                            <a
                                href="#strategyconsulting"
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
  
  export default Itconsulting;