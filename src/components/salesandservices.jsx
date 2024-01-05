import React from "react";

import bg_img from "../img/services1.avif";

//Management
import atandt2 from "../img/atandt2.jpeg";


import verizon from "../img/verizon.jpeg";



class Salesandservices extends React.Component {
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
            <div id="salesandservices" className="salesandservices route bg-image " style={{backgroundImage: "url("+bg_img+")"}}>
                <section id="salesandservices" className="about-mf sect-pt4 route">
                {/* <div id="itservices" className="intro route bg-image " style={{backgroundImage: "url("+bg_img+")"}}> */}
                    <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    <div className="title-box text-center">
                        <h3 className="title-a">Sales & Services</h3>
                        <p className="subtitle-a">Sales & Services we offers</p>
                        <div className="line-mf"></div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    {/*Management Consulting*/}
                    <div className="col-md-4">
                    <div className="work-box">
                        <a href={atandt2} data-lightbox="gallery-openevent">
                        <div className="work-img">
                            <img src={atandt2} alt="" className="img-fluid" />
                        </div>
                        <div className="work-content">
                            <div className="row">
                            <div className="col-sm-8">
                                <h2 className="w-title">Customer Services</h2>
                            </div>
                            </div>
                        </div>
                        </a>
                        <div style={{ textAlign: "right" }} className="socials">
                        <ul>
                            <li>
                            <a
                                href="#customerservices"
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
                        <a href={verizon} data-lightbox="gallery-openevent">
                        <div className="work-img">
                            <img src={verizon} alt="" className="img-fluid" />
                        </div>
                        <div className="work-content">
                            <div className="row">
                            <div className="col-sm-8">
                                <h2 className="w-title">Business Services</h2>
                            </div>
                            </div>
                        </div>
                        </a>
                        <div style={{ textAlign: "right" }} className="socials">
                        <ul>
                            <li>
                            <a
                                href="#businessservices"
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
  
  export default Salesandservices;