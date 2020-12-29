import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { get_homposts } from "../redux/action/hompsAction";
import { get_posts } from "../redux/action/postAction";
import { get_cats } from "../redux/action/catsAction";

class Header extends Component {
  state = {};
  myref = React.createRef();
  componentDidMount = async () => {
    if (this.myref.current) {
      window.scrollTo({ top: this.myref.current.offsetTop });
    }
    if (this.props.posts && this.props.posts.length > 0) {
    } else {
      await get_cats();
      await get_homposts();
      await get_posts();
    }
  };

  render() {
    const cats = this.props.cats;
    return (
      <React.Fragment>
        <header id="navigation" ref={this.myref}>
          <div className="navbar navbar-expand-lg sticky-nav" role="banner">
            <div className="container">
              <Link className="secondary-logo" to={{ pathname: "/" }}>
                <img
                  className="img-fluid"
                  src="../images/presets/preset1/logo.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="topbar">
              <div className="container">
                <div id="topbar" className="navbar-header">
                  <Link className="navbar-brand" to={{ pathname: "/" }}>
                    <img
                      className="main-logo img-fluid"
                      src="../images/presets/preset1/logo.png"
                      alt="logo"
                    />
                  </Link>
                  {/* <div id="topbar-right">
                    <div className="dropdown language-dropdown">
                      <a data-toggle="dropdown" href="#/">
                        <span className="change-text">En</span>
                        <i className="fa fa-angle-down"></i>
                      </a>
                      <ul className="dropdown-menu language-change">
                        <li>
                          <a href="#/">EN</a>
                        </li>
                        <li>
                          <a href="#/">FR</a>
                        </li>
                        <li>
                          <a href="#/">GR</a>
                        </li>
                        <li>
                          <a href="#/">ES</a>
                        </li>
                      </ul>
                    </div>
                    <div id="date-time"></div>
                    <div id="weather">
                      <span className="weather-icon">
                        <img
                          src="../images/others/weather.png"
                          alt="Icon"
                          className="img-fluid"
                        />
                      </span>
                      <span className="temp"></span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div id="menubar" className="container">
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
              {/* <a className="navbar-brand d-lg-none" href="index-2.html">
                <img
                  className="main-logo img-fluid"
                  src="../images/presets/preset1/logo.png"
                  alt="logo"
                />
              </a> */}
              <nav
                id="mainmenu"
                className="navbar-left collapse navbar-collapse"
              >
                <ul className="nav navbar-nav">
                  {cats &&
                    cats.length > 0 &&
                    cats.map((cat, ind) => {
                      return (
                        <li className="home dropdown" key={ind}>
                          <Link to={{ pathname: `/category/${cat.cattile}` }}>
                            {cat.catname}
                          </Link>
                          {cat.subcategories && cat.subcategories.length > 0 ? (
                            <ul className="dropdown-menu">
                              {cat.subcategories.map((subca, inde) => {
                                return (
                                  <li key={inde}>
                                    <Link
                                      to={{
                                        pathname: `/category/${subca.title}`,
                                      }}
                                    >
                                      {subca.name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : null}
                        </li>
                      );
                    })}
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    cats: state.cats,
  };
};

export default connect(mapStateToProps)(Header);
