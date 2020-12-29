import React, { Component } from "react";
class Author extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <body>
          <div id="main-wrapper" className="page">
            <header id="navigation">
              <div className="navbar navbar-expand-lg sticky-nav" role="banner">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#mainmenu"
                    aria-controls="mainmenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="fa fa-align-justify"></i>
                    </span>
                  </button>
                  <a className="navbar-brand" href="index-2.html">
                    <img
                      className="main-logo img-fluid"
                      src="images/presets/preset1/logo.png"
                      alt="logo"
                    />
                  </a>
                  <nav
                    id="mainmenu"
                    className="navbar-left collapse navbar-collapse justify-content-end"
                  >
                    <ul className="nav navbar-nav">
                      <li className="home dropdown">
                        <a
                          href="#/"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Home
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="index-2.html">Home Default</a>
                          </li>
                          <li>
                            <a href="index2.html">Home Style Two</a>
                          </li>
                          <li>
                            <a href="index3.html">Home Style Three</a>
                          </li>
                          <li>
                            <a href="index4.html">Home Style Four</a>
                          </li>
                          <li>
                            <a href="index5.html">Home Style Five</a>
                          </li>
                          <li>
                            <a href="index1.html">Home Style Six</a>
                          </li>
                        </ul>
                      </li>
                      <li className="business dropdown">
                        <a
                          href="#/"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Business
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#/">Dropdown Demo</a>
                          </li>
                          <li>
                            <a href="#/">Dropdown Demo</a>
                          </li>
                          <li>
                            <a href="#/">Dropdown Demo</a>
                          </li>
                          <li>
                            <a href="#/">Dropdown Demo</a>
                          </li>
                          <li>
                            <a href="#/">Dropdown Demo</a>
                          </li>
                        </ul>
                      </li>
                      <li className="politics dropdown">
                        <a
                          href="#/"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Politics
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#/">Dropdown Demo</a>
                          </li>
                          <li>
                            <a href="#/">Dropdown Demo</a>
                          </li>
                          <li>
                            <a href="#/">Dropdown Demo</a>
                          </li>
                          <li>
                            <a href="#/">Dropdown Demo</a>
                          </li>
                        </ul>
                      </li>
                      <li className="environment dropdown mega-dropdown">
                        <a
                          href="#/"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Environment
                        </a>
                        <div className="dropdown-menu mega-menu">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-3">
                                <h2>Template Features</h2>
                                <ul>
                                  <li>
                                    <a href="#/">Multi Home Variations</a>
                                  </li>
                                  <li>
                                    <a href="#/">Multi Color Menu</a>
                                  </li>
                                  <li>
                                    <a href="#/">Fully Responsive</a>
                                  </li>
                                  <li>
                                    <a href="#/">Mega Dropdown</a>
                                  </li>
                                  <li>
                                    <a href="#/">Creative Design</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3">
                                <h2>Included Pages</h2>
                                <ul>
                                  <li>
                                    <a href="news-details.html">News Details</a>
                                  </li>
                                  <li>
                                    <a href="listing.html">Category Listing</a>
                                  </li>
                                  <li>
                                    <a href="listing-life-style.html">
                                      Category Lifestyle
                                    </a>
                                  </li>
                                  <li>
                                    <a href="listing-sports.html">
                                      Category Sports
                                    </a>
                                  </li>
                                  <li>
                                    <a href="404.html">404 Error</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3">
                                <h2>Menu with image</h2>
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/4.jpg"
                                    alt="Iage"
                                  />
                                </div>
                              </div>
                              <div className="col-md-3">
                                <h2>Menu with video</h2>
                                <div className="entry-thumbnail embed-responsive embed-responsive-16by9">
                                  <iframe
                                    className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/-WlqrkXImsk"
                                    allowFullScreen
                                    title="iftr"
                                  ></iframe>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="world dropdown mega-cat-dropdown">
                        <a
                          href="#/"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          World
                        </a>
                        <div className="dropdown-menu mega-cat-menu">
                          <div className="container">
                            <div className="sub-catagory">
                              <h2 className="section-title">World</h2>
                              <ul className="list-inline">
                                <li>
                                  <a href="#/">Usa</a>
                                </li>
                                <li>
                                  <a href="#/">Asia</a>
                                </li>
                                <li>
                                  <a href="#/">Us</a>
                                </li>
                                <li>
                                  <a href="#/">Politics</a>
                                </li>
                                <li>
                                  <a href="#/">Business</a>
                                </li>
                                <li>
                                  <a href="#/">Press</a>
                                </li>
                                <li>
                                  <a href="#/">Travel</a>
                                </li>
                              </ul>
                            </div>
                            <div className="row">
                              <div className="col-md-3">
                                <div className="post medium-post">
                                  <div className="entry-header">
                                    <div className="entry-thumbnail">
                                      <img
                                        className="img-fluid"
                                        src="images/post/2.jpg"
                                        alt="Iage"
                                      />
                                    </div>
                                  </div>
                                  <div className="post-content">
                                    <div className="entry-meta">
                                      <ul className="list-inline">
                                        <li className="publish-date">
                                          <a href="#/">
                                            <i className="fa fa-clock-o"></i>{" "}
                                            Nov 5, 2018{" "}
                                          </a>
                                        </li>
                                        <li className="views">
                                          <a href="#/">
                                            <i className="fa fa-eye"></i>15k
                                          </a>
                                        </li>
                                        <li className="loves">
                                          <a href="#/">
                                            <i className="fa fa-heart-o"></i>278
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h2 className="entry-title">
                                      <a href="news-details.html">
                                        Apple may be preparing for new Beats
                                        radio stations
                                      </a>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="post medium-post">
                                  <div className="entry-header">
                                    <div className="entry-thumbnail">
                                      <img
                                        className="img-fluid"
                                        src="images/post/6.jpg"
                                        alt="Iage"
                                      />
                                    </div>
                                  </div>
                                  <div className="post-content">
                                    <div className="entry-meta">
                                      <ul className="list-inline">
                                        <li className="publish-date">
                                          <a href="#/">
                                            <i className="fa fa-clock-o"></i>{" "}
                                            Nov 5, 2018{" "}
                                          </a>
                                        </li>
                                        <li className="views">
                                          <a href="#/">
                                            <i className="fa fa-eye"></i>15k
                                          </a>
                                        </li>
                                        <li className="loves">
                                          <a href="#/">
                                            <i className="fa fa-heart-o"></i>278
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h2 className="entry-title">
                                      <a href="news-details.html">
                                        Why is the media so afraid of Facebook?
                                      </a>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="post medium-post">
                                  <div className="entry-header">
                                    <div className="entry-thumbnail">
                                      <img
                                        className="img-fluid"
                                        src="images/post/3.jpg"
                                        alt="Iage"
                                      />
                                    </div>
                                  </div>
                                  <div className="post-content">
                                    <div className="entry-meta">
                                      <ul className="list-inline">
                                        <li className="publish-date">
                                          <a href="#/">
                                            <i className="fa fa-clock-o"></i>{" "}
                                            Nov 5, 2018{" "}
                                          </a>
                                        </li>
                                        <li className="views">
                                          <a href="#/">
                                            <i className="fa fa-eye"></i>15k
                                          </a>
                                        </li>
                                        <li className="loves">
                                          <a href="#/">
                                            <i className="fa fa-heart-o"></i>278
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h2 className="entry-title">
                                      <a href="news-details.html">
                                        Samsung Pay will support online shopping
                                      </a>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="post medium-post">
                                  <div className="entry-header">
                                    <div className="entry-thumbnail">
                                      <img
                                        className="img-fluid"
                                        src="images/post/5.jpg"
                                        alt="Iage"
                                      />
                                    </div>
                                  </div>
                                  <div className="post-content">
                                    <div className="entry-meta">
                                      <ul className="list-inline">
                                        <li className="publish-date">
                                          <a href="#/">
                                            <i className="fa fa-clock-o"></i>{" "}
                                            Nov 5, 2018{" "}
                                          </a>
                                        </li>
                                        <li className="views">
                                          <a href="#/">
                                            <i className="fa fa-eye"></i>15k
                                          </a>
                                        </li>
                                        <li className="loves">
                                          <a href="#/">
                                            <i className="fa fa-heart-o"></i>278
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h2 className="entry-title">
                                      <a href="news-details.html">
                                        The best games for your phone
                                      </a>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="technology dropdown mega-cat-dropdown">
                        <a
                          href="#/"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Technology
                        </a>
                        <div className="dropdown-menu mega-cat-menu">
                          <div className="container">
                            <div className="sub-catagory">
                              <h2 className="section-title">Technology</h2>
                              <ul className="list-inline">
                                <li>
                                  <a href="#/">Apps</a>
                                </li>
                                <li>
                                  <a href="#/">Gear</a>
                                </li>
                                <li>
                                  <a href="#/">Watch</a>
                                </li>
                                <li>
                                  <a href="#/">Tech</a>
                                </li>
                                <li>
                                  <a href="#/">Laptop</a>
                                </li>
                                <li>
                                  <a href="#/">Mobile</a>
                                </li>
                                <li>
                                  <a href="#/">3D Games</a>
                                </li>
                              </ul>
                            </div>
                            <div className="row">
                              <div className="col-md-3">
                                <div className="post medium-post">
                                  <div className="entry-header">
                                    <div className="entry-thumbnail">
                                      <img
                                        className="img-fluid"
                                        src="images/post/technology/6.jpg"
                                        alt="Iage"
                                      />
                                    </div>
                                  </div>
                                  <div className="post-content">
                                    <div className="entry-meta">
                                      <ul className="list-inline">
                                        <li className="publish-date">
                                          <a href="#/">
                                            <i className="fa fa-clock-o"></i>{" "}
                                            Nov 5, 2018{" "}
                                          </a>
                                        </li>
                                        <li className="views">
                                          <a href="#/">
                                            <i className="fa fa-eye"></i>15k
                                          </a>
                                        </li>
                                        <li className="loves">
                                          <a href="#/">
                                            <i className="fa fa-heart-o"></i>278
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h2 className="entry-title">
                                      <a href="news-details.html">
                                        Apple may be preparing for new Beats
                                        radio stations
                                      </a>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="post medium-post">
                                  <div className="entry-header">
                                    <div className="entry-thumbnail">
                                      <img
                                        className="img-fluid"
                                        src="images/post/technology/5.jpg"
                                        alt="Iage"
                                      />
                                    </div>
                                  </div>
                                  <div className="post-content">
                                    <div className="entry-meta">
                                      <ul className="list-inline">
                                        <li className="publish-date">
                                          <a href="#/">
                                            <i className="fa fa-clock-o"></i>{" "}
                                            Nov 5, 2018{" "}
                                          </a>
                                        </li>
                                        <li className="views">
                                          <a href="#/">
                                            <i className="fa fa-eye"></i>15k
                                          </a>
                                        </li>
                                        <li className="loves">
                                          <a href="#/">
                                            <i className="fa fa-heart-o"></i>278
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h2 className="entry-title">
                                      <a href="news-details.html">
                                        Why is the media so afraid of Facebook?
                                      </a>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="post medium-post">
                                  <div className="entry-header">
                                    <div className="entry-thumbnail">
                                      <img
                                        className="img-fluid"
                                        src="images/post/technology/4.jpg"
                                        alt="Iage"
                                      />
                                    </div>
                                  </div>
                                  <div className="post-content">
                                    <div className="entry-meta">
                                      <ul className="list-inline">
                                        <li className="publish-date">
                                          <a href="#/">
                                            <i className="fa fa-clock-o"></i>{" "}
                                            Nov 5, 2018{" "}
                                          </a>
                                        </li>
                                        <li className="views">
                                          <a href="#/">
                                            <i className="fa fa-eye"></i>15k
                                          </a>
                                        </li>
                                        <li className="loves">
                                          <a href="#/">
                                            <i className="fa fa-heart-o"></i>278
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h2 className="entry-title">
                                      <a href="news-details.html">
                                        Samsung Pay will support online shopping
                                      </a>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="post medium-post">
                                  <div className="entry-header">
                                    <div className="entry-thumbnail">
                                      <img
                                        className="img-fluid"
                                        src="images/post/technology/3.jpg"
                                        alt="Iage"
                                      />
                                    </div>
                                  </div>
                                  <div className="post-content">
                                    <div className="entry-meta">
                                      <ul className="list-inline">
                                        <li className="publish-date">
                                          <a href="#/">
                                            <i className="fa fa-clock-o"></i>{" "}
                                            Nov 5, 2018{" "}
                                          </a>
                                        </li>
                                        <li className="views">
                                          <a href="#/">
                                            <i className="fa fa-eye"></i>15k
                                          </a>
                                        </li>
                                        <li className="loves">
                                          <a href="#/">
                                            <i className="fa fa-heart-o"></i>278
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h2 className="entry-title">
                                      <a href="news-details.html">
                                        The best games for your phone
                                      </a>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="sports">
                        <a href="listing-sports.html">Sports</a>
                      </li>
                      <li className="health">
                        <a href="listing.html">Health</a>
                      </li>
                      <li className="entertainment">
                        <a href="listing.html">Entertainment</a>
                      </li>
                      <li className="lifestyle">
                        <a href="listing-life-style.html">Lifestyle</a>
                      </li>
                      <li className="more dropdown">
                        <a
                          href="#/"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Pages +
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="news-details.html">News Details</a>
                          </li>
                          <li>
                            <a href="listing.html">Category Listing</a>
                          </li>
                          <li>
                            <a href="listing-life-style.html">
                              Category Lifestyle
                            </a>
                          </li>
                          <li>
                            <a href="listing-sports.html">Category Sports</a>
                          </li>
                          <li>
                            <a href="404.html">404 Error</a>
                          </li>
                          <li>
                            <a href="author-listing.html">
                              Author Listing <span className="badge">New</span>
                            </a>
                          </li>
                          <li>
                            <a href="author-details.html">
                              Author Details <span className="badge">New</span>
                            </a>
                          </li>
                          <li>
                            <a href="about-us.html">
                              About Us <span className="badge">New</span>
                            </a>
                          </li>
                          <li>
                            <a href="contact-us.html">
                              Contact Us <span className="badge">New</span>
                            </a>
                          </li>
                          <li>
                            <a href="contact-us2.html">
                              Contact Us Two <span className="badge">New</span>
                            </a>
                          </li>
                          <li>
                            <a href="signup.html">
                              Sign Up Page<span className="badge">New</span>
                            </a>
                          </li>
                          <li>
                            <a href="signin.html">
                              Sign In page<span className="badge">New</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <div className="searchNlogin">
                    <ul>
                      <li className="search-icon">
                        <i className="fa fa-search"></i>
                      </li>
                      <li className="dropdown user-panel">
                        <a
                          href="#/"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i className="fa fa-user"></i>
                        </a>
                        <div className="dropdown-menu top-user-section">
                          <div className="top-user-form">
                            <form id="top-login">
                              <div
                                className="input-group"
                                id="top-login-username"
                              >
                                <span className="input-group-addon">
                                  <img
                                    src="images/others/user-icon.png"
                                    alt="Iage"
                                  />
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Username"
                                  required=""
                                />
                              </div>
                              <div
                                className="input-group"
                                id="top-login-password"
                              >
                                <span className="input-group-addon">
                                  <img
                                    src="images/others/password-icon.png"
                                    alt="Iage"
                                  />
                                </span>
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="Password"
                                  required=""
                                />
                              </div>
                              <div>
                                <p className="reset-user">
                                  Forgot <a href="#/">Password/Username?</a>
                                </p>
                                <button
                                  className="btn btn-danger"
                                  type="submit"
                                >
                                  Login
                                </button>
                              </div>
                            </form>
                          </div>
                          <div className="create-account">
                            <a href="#/">Create a New Account</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="search">
                      <form>
                        <input
                          type="text"
                          className="search-form"
                          autocomplete="off"
                          placeholder="Type & Press Enter"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="container">
              <div className="page-breadcrumbs">
                <h1 className="section-title">Author Profile</h1>
              </div>
              <div className="section">
                <div className="row">
                  <div className="col-md-8 col-lg-9">
                    <div id="site-content" className="site-content">
                      <div className="author-details">
                        <div className="author-heading">
                          <div className="author-profile">
                            <div className="author-gravatar">
                              <img
                                className="img-fluid"
                                src="images/others/author4.png"
                                alt="Iage"
                              />
                            </div>
                            <div className="author-name">
                              <h1>Michael Kalinin</h1>
                              <p>Orenburg, Russian Federation</p>
                            </div>
                            <div className="author-social">
                              <p>Find Me</p>
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
                          </div>
                        </div>
                        <div className="author-info">
                          <h3>About Me</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Sed ut
                            perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <h1 className="section-title">My News Press</h1>
                        <div className="section">
                          <div className="row">
                            <div className="col-md-6 col-lg-4">
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/2.jpg"
                                      alt="Iage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018{" "}
                                        </a>
                                      </li>
                                      <li className="views">
                                        <a href="#/">
                                          <i className="fa fa-eye"></i>15k
                                        </a>
                                      </li>
                                      <li className="loves">
                                        <a href="#/">
                                          <i className="fa fa-heart-o"></i>278
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <h2 className="entry-title">
                                    <a href="news-details.html">
                                      Our closest relatives aren't fans of
                                      daylight saving time
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/1.jpg"
                                      alt="Iage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018{" "}
                                        </a>
                                      </li>
                                      <li className="views">
                                        <a href="#/">
                                          <i className="fa fa-eye"></i>15k
                                        </a>
                                      </li>
                                      <li className="loves">
                                        <a href="#/">
                                          <i className="fa fa-heart-o"></i>278
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <h2 className="entry-title">
                                    <a href="news-details.html">
                                      Our closest relatives aren't fans of
                                      daylight saving time
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/3.jpg"
                                      alt="Iage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018{" "}
                                        </a>
                                      </li>
                                      <li className="views">
                                        <a href="#/">
                                          <i className="fa fa-eye"></i>15k
                                        </a>
                                      </li>
                                      <li className="loves">
                                        <a href="#/">
                                          <i className="fa fa-heart-o"></i>278
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <h2 className="entry-title">
                                    <a href="news-details.html">
                                      Our closest relatives aren't fans of
                                      daylight saving time
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/4.jpg"
                                      alt="Iage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018{" "}
                                        </a>
                                      </li>
                                      <li className="views">
                                        <a href="#/">
                                          <i className="fa fa-eye"></i>15k
                                        </a>
                                      </li>
                                      <li className="loves">
                                        <a href="#/">
                                          <i className="fa fa-heart-o"></i>278
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <h2 className="entry-title">
                                    <a href="news-details.html">
                                      Our closest relatives aren't fans of
                                      daylight saving time
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/5.jpg"
                                      alt="Iage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018{" "}
                                        </a>
                                      </li>
                                      <li className="views">
                                        <a href="#/">
                                          <i className="fa fa-eye"></i>15k
                                        </a>
                                      </li>
                                      <li className="loves">
                                        <a href="#/">
                                          <i className="fa fa-heart-o"></i>278
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <h2 className="entry-title">
                                    <a href="news-details.html">
                                      Our closest relatives aren't fans of
                                      daylight saving time
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/6.jpg"
                                      alt="Iage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018{" "}
                                        </a>
                                      </li>
                                      <li className="views">
                                        <a href="#/">
                                          <i className="fa fa-eye"></i>15k
                                        </a>
                                      </li>
                                      <li className="loves">
                                        <a href="#/">
                                          <i className="fa fa-heart-o"></i>278
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <h2 className="entry-title">
                                    <a href="news-details.html">
                                      Our closest relatives aren't fans of
                                      daylight saving time
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="google-add">
                          <div className="add inner-add text-center">
                            <a href="#/">
                              <img
                                className="img-fluid"
                                src="images/post/google-add.jpg"
                                alt="Iage"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="section">
                          <div className="row">
                            <div className="col-md-6 col-lg-4">
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/11.jpg"
                                      alt="Iage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018{" "}
                                        </a>
                                      </li>
                                      <li className="views">
                                        <a href="#/">
                                          <i className="fa fa-eye"></i>15k
                                        </a>
                                      </li>
                                      <li className="loves">
                                        <a href="#/">
                                          <i className="fa fa-heart-o"></i>278
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <h2 className="entry-title">
                                    <a href="news-details.html">
                                      Our closest relatives aren't fans of
                                      daylight saving time
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/8.jpg"
                                      alt="Iage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018{" "}
                                        </a>
                                      </li>
                                      <li className="views">
                                        <a href="#/">
                                          <i className="fa fa-eye"></i>15k
                                        </a>
                                      </li>
                                      <li className="loves">
                                        <a href="#/">
                                          <i className="fa fa-heart-o"></i>278
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <h2 className="entry-title">
                                    <a href="news-details.html">
                                      Our closest relatives aren't fans of
                                      daylight saving time
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/9.jpg"
                                      alt="Iage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018{" "}
                                        </a>
                                      </li>
                                      <li className="views">
                                        <a href="#/">
                                          <i className="fa fa-eye"></i>15k
                                        </a>
                                      </li>
                                      <li className="loves">
                                        <a href="#/">
                                          <i className="fa fa-heart-o"></i>278
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <h2 className="entry-title">
                                    <a href="news-details.html">
                                      Our closest relatives aren't fans of
                                      daylight saving time
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/10.jpg"
                                      alt="Iage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018{" "}
                                        </a>
                                      </li>
                                      <li className="views">
                                        <a href="#/">
                                          <i className="fa fa-eye"></i>15k
                                        </a>
                                      </li>
                                      <li className="loves">
                                        <a href="#/">
                                          <i className="fa fa-heart-o"></i>278
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <h2 className="entry-title">
                                    <a href="news-details.html">
                                      Our closest relatives aren't fans of
                                      daylight saving time
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/12.jpg"
                                      alt="Iage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018{" "}
                                        </a>
                                      </li>
                                      <li className="views">
                                        <a href="#/">
                                          <i className="fa fa-eye"></i>15k
                                        </a>
                                      </li>
                                      <li className="loves">
                                        <a href="#/">
                                          <i className="fa fa-heart-o"></i>278
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <h2 className="entry-title">
                                    <a href="news-details.html">
                                      Our closest relatives aren't fans of
                                      daylight saving time
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/13.jpg"
                                      alt="Iage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018{" "}
                                        </a>
                                      </li>
                                      <li className="views">
                                        <a href="#/">
                                          <i className="fa fa-eye"></i>15k
                                        </a>
                                      </li>
                                      <li className="loves">
                                        <a href="#/">
                                          <i className="fa fa-heart-o"></i>278
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <h2 className="entry-title">
                                    <a href="news-details.html">
                                      Our closest relatives aren't fans of
                                      daylight saving time
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pagination-wrapper">
                      <ul className="pagination">
                        <li>
                          <a href="#/" aria-label="Previous">
                            <span aria-hidden="true">
                              <i className="fa fa-long-arrow-left"></i> Previous
                              Page
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#/">1</a>
                        </li>
                        <li>
                          <a href="#/">2</a>
                        </li>
                        <li className="active">
                          <a href="#/">3</a>
                        </li>
                        <li>
                          <a href="#/">4</a>
                        </li>
                        <li>
                          <a href="#/">5</a>
                        </li>
                        <li>
                          <a href="#/">6</a>
                        </li>
                        <li>
                          <a href="#/">7</a>
                        </li>
                        <li>
                          <a href="#/">8</a>
                        </li>
                        <li>
                          <a href="#/">9</a>
                        </li>
                        <li>
                          <a href="#/">10</a>
                        </li>
                        <li>
                          <a href="#/" aria-label="Next">
                            <span aria-hidden="true">
                              Next Page{" "}
                              <i className="fa fa-long-arrow-right"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-3 tr-sticky">
                    <div id="sitebar" className="theiaStickySidebar">
                      <div className="widget">
                        <div className="add featured-add">
                          <a href="#/">
                            <img
                              className="img-fluid"
                              src="images/post/add/add1.jpg"
                              alt="Iage"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="widget follow-us">
                        <h1 className="section-title title">Follow Us</h1>
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
                          <li>
                            <a href="#/">
                              <i className="fa fa-youtube"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="widget">
                        <h1 className="section-title title">This is Rising!</h1>
                        <ul className="post-list">
                          <li>
                            <div className="post small-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/rising/1.jpg"
                                    alt="Iage"
                                  />
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="video-catagory">
                                  <a href="#/">World</a>
                                </div>
                                <h2 className="entry-title">
                                  <a href="news-details.html">
                                    3 students arrested after body-slamming
                                    principal
                                  </a>
                                </h2>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="post small-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/rising/2.jpg"
                                    alt="Iage"
                                  />
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="video-catagory">
                                  <a href="#/">Business</a>
                                </div>
                                <h2 className="entry-title">
                                  <a href="news-details.html">
                                    3 students arrested after body-slamming
                                    principal
                                  </a>
                                </h2>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="post small-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/rising/3.jpg"
                                    alt="Iage"
                                  />
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="video-catagory">
                                  <a href="#/">Sports</a>
                                </div>
                                <h2 className="entry-title">
                                  <a href="news-details.html">
                                    3 students arrested after body-slamming
                                    principal
                                  </a>
                                </h2>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="post small-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/rising/4.jpg"
                                    alt="Iage"
                                  />
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="video-catagory">
                                  <a href="#/">Technology</a>
                                </div>
                                <h2 className="entry-title">
                                  <a href="news-details.html">
                                    3 students arrested after body-slamming
                                    principal
                                  </a>
                                </h2>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="post small-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/rising/5.jpg"
                                    alt="Iage"
                                  />
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="video-catagory">
                                  <a href="#/">Politics</a>
                                </div>
                                <h2 className="entry-title">
                                  <a href="news-details.html">
                                    3 students arrested after body-slamming
                                    principal
                                  </a>
                                </h2>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="post small-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/rising/6.jpg"
                                    alt="Iage"
                                  />
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="video-catagory">
                                  <a href="#/">Health</a>
                                </div>
                                <h2 className="entry-title">
                                  <a href="news-details.html">
                                    3 students arrested after body-slamming
                                    principal
                                  </a>
                                </h2>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="post small-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/rising/7.jpg"
                                    alt="Iage"
                                  />
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="video-catagory">
                                  <a href="#/">Lifestyle</a>
                                </div>
                                <h2 className="entry-title">
                                  <a href="news-details.html">
                                    3 students arrested after body-slamming
                                    principal
                                  </a>
                                </h2>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="post small-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/rising/8.jpg"
                                    alt="Iage"
                                  />
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="video-catagory">
                                  <a href="#/">Entertainment</a>
                                </div>
                                <h2 className="entry-title">
                                  <a href="news-details.html">
                                    3 students arrested after body-slamming
                                    principal
                                  </a>
                                </h2>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </React.Fragment>
    );
  }
}

export default Author;
