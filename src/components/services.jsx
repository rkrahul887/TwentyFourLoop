import React from "react";

//it solution
import it1 from "../img/it_solution_img.avif";

//it consultation
import consult2 from "../img/consultation3.avif";

//sales & services
import sales1 from "../img/sales1.avif";

import bg_img from "../img/services1.avif";


class Services extends React.Component {
  render() {
    return (
      <div id="services" className="services route bg-image " style={{backgroundImage: "url("+bg_img+")"}}>
        <section id="services" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Services</h3>
                  <p className="subtitle-a">Services we provide</p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              {/*IT Services*/}
              <div className="col-md-4">
              <div className="work-box">
                  <a href={it1} data-lightbox="gallery-openevent">
                    <div className="work-img">
                      <img src={it1} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">IT Services</h2>
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

              {/* IT Consultation */}

              <div className="col-md-4">
              <div className="work-box">
                  <a href={consult2} data-lightbox="gallery-openevent">
                    <div className="work-img">
                      <img src={consult2} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">IT Consultation</h2>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div style={{ textAlign: "right" }} className="socials">
                    <ul>
                      <li>
                        <a
                          href="#itconsulting"
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

              {/* Sales & Services */}

              <div className="col-md-4">
                <div className="work-box">
                  <a href={sales1} data-lightbox="gallery-openevent">
                    <div className="work-img">
                      <img src={sales1} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Sales & Services</h2>
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
              </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Services;
