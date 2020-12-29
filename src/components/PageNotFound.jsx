import React, { Component } from "react";

class PageNotFound extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <body>
          <div className="error-page text-center">
            <div className="container">
              <div className="logo">
                <a href="#" title="Back To Newspress Home Page">
                  <img
                    className="img-fluid"
                    src="images/logo.png"
                    alt="hjbhjv"
                  />
                </a>
              </div>
              <div className="error-content">
                <img
                  className="img-fluid"
                  src="images/others/error.png"
                  alt="hjbhjv"
                />
                <h1>Something Wrong Here</h1>
                <p>The requested URL /das was not found on this server.</p>
                <a href="index-2.html" className="btn btn-primary">
                  Back Home
                </a>
              </div>
              <div className="copyright">
                <p>Newspress @ 2018</p>
              </div>
            </div>
          </div>
        </body>
      </React.Fragment>
    );
  }
}

export default PageNotFound;
