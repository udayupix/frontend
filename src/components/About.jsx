import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <body>
          <div id="main-wrapper" className="page">
            <Header />
            <div className="container">
              <div className="page-breadcrumbs">
                <h1 className="section-title title">About Us</h1>
              </div>
              <div className="about-us welcome-section">
                <div className="row">
                  <div className="col-lg-6 content-section">
                    <div className="about-us-content">
                      <h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate.
                      </p>
                      <p>
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 image-section">
                    <div className="about-us-image">
                      <img
                        className="img-fluid"
                        src="images/others/about-us.jpg"
                        alt="mage"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-us">
                <div className="row">
                  <div className="col-md-4">
                    <div className="about-us-content">
                      <h2>Backgrounds</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="about-us-content">
                      <h2>Our Approach</h2>
                      <p>
                        Duis autem vel eum iriure dolor in hendrerit in
                        vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros et
                        accumsan et iusto odio dignissim qui blandit praesent
                        luptatum zzril delenit
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="about-us-content">
                      <h2>Methodology</h2>
                      <p>
                        Mirum est notare quam littera gothica, quam nunc putamus
                        parum claram, anteposuerit litterarum formas humanitatis
                        per seacula quarta decima et quinta decima. Eodem modo
                        typi, qui nunc nobis videntur parum clari
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="our-team">
                <h1 className="section-title title">NewsPress Team</h1>
                <div className="team-members">
                  <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-2">
                      <div className="single-member">
                        <div className="member-image">
                          <div className="overlay">
                            <ul className="list-inline social-icons">
                              <li>
                                <a href="#/">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-linkedin"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img
                            className="img-fluid"
                            src="images/others/member1.jpg"
                            alt="mage"
                          />
                        </div>
                        <h3>Leaf Corcoran</h3>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                      <div className="single-member">
                        <div className="member-image">
                          <div className="overlay">
                            <ul className="list-inline social-icons">
                              <li>
                                <a href="#/">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-pinterest"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img
                            className="img-fluid"
                            src="images/others/member2.jpg"
                            alt="mage"
                          />
                        </div>
                        <h3>Mike Lewis</h3>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                      <div className="single-member">
                        <div className="member-image">
                          <div className="overlay">
                            <ul className="list-inline social-icons">
                              <li>
                                <a href="#/">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-youtube"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img
                            className="img-fluid"
                            src="images/others/member3.jpg"
                            alt="mage"
                          />
                        </div>
                        <h3>Julie MacKay</h3>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                      <div className="single-member">
                        <div className="member-image">
                          <div className="overlay">
                            <ul className="list-inline social-icons">
                              <li>
                                <a href="#/">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-linkedin"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-pinterest"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img
                            className="img-fluid"
                            src="images/others/member4.jpg"
                            alt="mage"
                          />
                        </div>
                        <h3>Christine Marqu</h3>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                      <div className="single-member">
                        <div className="member-image">
                          <div className="overlay">
                            <ul className="list-inline social-icons">
                              <li>
                                <a href="#/">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-linkedin"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img
                            className="img-fluid"
                            src="images/others/member5.jpg"
                            alt="mage"
                          />
                        </div>
                        <h3>Loren Heiman</h3>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                      <div className="single-member">
                        <div className="member-image">
                          <div className="overlay">
                            <ul className="list-inline social-icons">
                              <li>
                                <a href="#/">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-linkedin"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img
                            className="img-fluid"
                            src="images/others/member6.jpg"
                            alt="mage"
                          />
                        </div>
                        <h3>Chris Taylor</h3>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                      <div className="single-member">
                        <div className="member-image">
                          <div className="overlay">
                            <ul className="list-inline social-icons">
                              <li>
                                <a href="#/">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-youtube"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-pinterest"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img
                            className="img-fluid"
                            src="images/others/member7.jpg"
                            alt="mage"
                          />
                        </div>
                        <h3>Leaf Corcoran</h3>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                      <div className="single-member">
                        <div className="member-image">
                          <div className="overlay">
                            <ul className="list-inline social-icons">
                              <li>
                                <a href="#/">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-pinterest"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img
                            className="img-fluid"
                            src="images/others/member8.jpg"
                            alt="mage"
                          />
                        </div>
                        <h3>Alex Posey</h3>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                      <div className="single-member">
                        <div className="member-image">
                          <div className="overlay">
                            <ul className="list-inline social-icons">
                              <li>
                                <a href="#/">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-linkedin"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img
                            className="img-fluid"
                            src="images/others/member9.jpg"
                            alt="mage"
                          />
                        </div>
                        <h3>Teddy Newell</h3>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                      <div className="single-member">
                        <div className="member-image">
                          <div className="overlay">
                            <ul className="list-inline social-icons">
                              <li>
                                <a href="#/">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-youtube"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-pinterest"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img
                            className="img-fluid"
                            src="images/others/member10.jpg"
                            alt="mage"
                          />
                        </div>
                        <h3>Eli Amesefe</h3>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                      <div className="single-member">
                        <div className="member-image">
                          <div className="overlay">
                            <ul className="list-inline social-icons">
                              <li>
                                <a href="#/">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-pinterest"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img
                            className="img-fluid"
                            src="images/others/member1.jpg"
                            alt="mage"
                          />
                        </div>
                        <h3>Leaf Corcoran</h3>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                      <div className="single-member">
                        <div className="member-image">
                          <div className="overlay">
                            <ul className="list-inline social-icons">
                              <li>
                                <a href="#/">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-linkedin"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#/">
                                  <i className="fa fa-youtube"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img
                            className="img-fluid"
                            src="images/others/member11.jpg"
                            alt="mage"
                          />
                        </div>
                        <h3>Andrei Patru</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonials">
                <div
                  id="testimonial"
                  className="carousel carousel-fade slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="item carousel-item active">
                      <img
                        className="img-fluid img-circle"
                        src="images/others/t1.jpg"
                        alt="mage"
                      />
                      <h3>
                        Karol Cichoń <span>Founder, Leo Inc</span>
                      </h3>
                      <h4>
                        “Wow!! It's really awesome. Nice and Clean design.It's
                        really impressive. I am really appreciate your project.”
                      </h4>
                    </div>
                    <div className="item carousel-item">
                      <img
                        className="img-fluid img-circle"
                        src="images/others/member5.jpg"
                        alt="mage"
                      />
                      <h3>
                        Andrei Piterson <span>CEO, SRT BD</span>
                      </h3>
                      <h4>
                        “Wow!! It's really awesome. Nice and Clean design.It's
                        really impressive. I am really appreciate your project.”
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </body>
      </React.Fragment>
    );
  }
}

export default About;
