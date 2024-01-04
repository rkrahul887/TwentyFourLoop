import React from "react";
import myImage from "../img/twentyforloop_about_img.jpeg";
import aboutimg from "../img/about1.avif"
import about_bg from "../img/about2.avif";
import bg_img from "../img/services1.avif";

class About extends React.Component {
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
      about_me2: [
        {
          id: "second-p-about",
          content:
            "Twentyfourloop is the trusted technology partner of businesses worldwide enabling them to leverage IT as a strategic asset. Empowered by technology expertise, immaculate execution capabilities, and unwavering focus on the customer needs; we have been able to nurture success in multiple technologies and verticals.",
        }
      ],
    };
  }

  render() {
    return (
      <div id="about" className="about route bg-image " style={{backgroundImage: "url("+bg_img+")"}}>
        <section id="about" className="about-mf sect-pt4 route" >
          <div className="container">
            <div className="row" >
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row" style={{backgroundImage: "url("+about_bg+")"}}>
                        <div
                          className="col-sm-6 col-md-5"
                          style={{ margin: "0 auto" }}
                        >
                          <div
                            className="about-img"
                            style={{ textAlign: "center" } }
                          >
                            <img
                              src={aboutimg}
                              className="img-fluid rounded b-shadow-a"
                              alt=""
                            />
                          </div>
                          <div
                            className="about-img"
                            style={{ textAlign: "center" }}
                          >
                            <img
                              src={myImage}
                              className="img-fluid rounded b-shadow-a"
                              alt=""
                            />
                          </div>
                        </div>
                        {/* <div className="col-sm-6 col-md-7">
                                                  <div className="about-info">
                                                  <p><span class="title-s">Name: </span> <span>Frank Izquierdo</span></p>
                                                  <p><span class="title-s">Profile: </span> <span>full stack developer</span></p>
                                                  <p><span class="title-s">Email: </span> <span>contact@example.com</span></p>
                                                  <p><span class="title-s">Phone: </span> <span>(617) 557-0089</span></p>
                                                  </div>
                                              </div> */}
                      </div>
                      <div className="skill-mf">
                        {/* <p className="title-s">Skill</p> */}
                        {this.state.skills.map((skill) => {
                          return (
                            <React.Fragment key={skill.id}>
                              <span>{skill.content}</span>{" "}
                              <span className="pull-right">
                                {skill.porcentage}
                              </span>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: skill.porcentage }}
                                  aria-valuenow={skill.value}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">About</h5>
                        </div>
                        {this.state.about_me2.map((content) => {
                          return (
                            <p className="lead" key={content.id}>
                              {content.content}
                            </p>
                          );
                        })}
                        {this.state.about_me.map((content) => {
                          return (
                            <p className="lead" key={content.id}>
                              {content.content}
                            </p>
                          );
                        })}
                      </div>
                      
                    </div>
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

export default About;
