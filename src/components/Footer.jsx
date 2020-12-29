import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <div className="footer-top">
            <div className="container text-center">
              <div className="logo-icon">
                <img
                  className="img-fluid"
                  src="../images/presets/preset1/logo-icon.png"
                  alt="newim"
                />
              </div>
            </div>
          </div>
          <div className="footer-menu">
            <div className="container">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#/">Home</a>
                </li>
                <li>
                  <a href="#/">About</a>
                </li>
                <li>
                  <a href="#/">Products</a>
                </li>
                <li>
                  <a href="#/">Career</a>
                </li>
                <li>
                  <a href="#/">Advertisement</a>
                </li>
                <li>
                  <a href="#/">Team</a>
                </li>
                <li>
                  <a href="#/">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom-widgets">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="widget">
                    <h2>Category</h2>
                    <ul>
                      <li>
                        <a href="#/">Business</a>
                      </li>
                      <li>
                        <a href="#/">Politics</a>
                      </li>
                      <li>
                        <a href="#/">Sports</a>
                      </li>
                      <li>
                        <a href="#/">World</a>
                      </li>
                      <li>
                        <a href="#/">Technology</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#/">Environment</a>
                      </li>
                      <li>
                        <a href="#/">Health</a>
                      </li>
                      <li>
                        <a href="#/">Entertainment</a>
                      </li>
                      <li>
                        <a href="#/">Lifestyle</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="widget">
                    <h2>Editions</h2>
                    <ul>
                      <li>
                        <a href="#/">United States</a>
                      </li>
                      <li>
                        <a href="#/">China</a>
                      </li>
                      <li>
                        <a href="#/">India</a>
                      </li>
                      <li>
                        <a href="#/">Maxico</a>
                      </li>
                      <li>
                        <a href="#/">Middle East</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="widget">
                    <h2>Tag</h2>
                    <ul>
                      <li>
                        <a href="#/">Gallery</a>
                      </li>
                      <li>
                        <a href="#/">Sports</a>
                      </li>
                      <li>
                        <a href="#/">Featured</a>
                      </li>
                      <li>
                        <a href="#/">World</a>
                      </li>
                      <li>
                        <a href="#/">Fashion</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#/">Environment</a>
                      </li>
                      <li>
                        <a href="#/">Health</a>
                      </li>
                      <li>
                        <a href="#/">Entertainment</a>
                      </li>
                      <li>
                        <a href="#/">Lifestyle</a>
                      </li>
                      <li>
                        <a href="#/">Business</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#/">Tech</a>
                      </li>
                      <li>
                        <a href="#/">Movie</a>
                      </li>
                      <li>
                        <a href="#/">Music</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="widget">
                    <h2>Products</h2>
                    <ul>
                      <li>
                        <a href="#/">Ebook</a>
                      </li>
                      <li>
                        <a href="#/">Baby Product</a>
                      </li>
                      <li>
                        <a href="#/">Magazine</a>
                      </li>
                      <li>
                        <a href="#/">Sports Elements</a>
                      </li>
                      <li>
                        <a href="#/">Technology</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container text-center">
              <p>
                <a href="#/">Stock Investor </a>&copy; 2020
              </p>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
