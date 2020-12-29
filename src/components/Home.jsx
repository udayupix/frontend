import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import OwlCarousel from "react-owl-carousel";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import moment from "moment";
import { Link } from "react-router-dom";

class Home extends Component {
  state = { loader: false };

  componentDidMount = async () => {
    this.setState({ loader: true });
    setTimeout(() => {
      this.setState({ loader: false });
    }, 3000);
  };

  render() {
    const { loader } = this.state;
    const width = window.innerWidth;
    const homposts = this.props.homposts;
    return (
      <React.Fragment>
        {loader ? (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Loader type="Circles" color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
          <body>
            <div id="main-wrapper" className="page">
              <Header />
              <br />
              <br />
              <div className="container">
                <div className="section">
                  <div className="row">
                    <div className="site-content col-lg-9">
                      <div className="row">
                        <div className="col-md-8">
                          {/* <div id="home-slider"> */}
                          {homposts &&
                          homposts.nin &&
                          homposts.nin.length > 0 ? (
                            <OwlCarousel
                              id="home-slider"
                              className="owl-theme"
                              autoplay
                              loop
                              items={1}
                              dots={false}
                              autoplayHoverPause={true}
                              autoplayTimeout={1500}
                            >
                              {homposts.nin.map((ni, ind) => {
                                return (
                                  <div className="post feature-post" key={ind}>
                                    <div className="entry-header">
                                      <div className="entry-thumbnail">
                                        <img
                                          className="img-fluid"
                                          src={ni.image}
                                          alt="someim"
                                          style={{ width: 572, height: 350 }}
                                        />
                                      </div>
                                      <div className="catagory world">
                                        <Link
                                          to={{
                                            pathname: `/category/${
                                              ni.categorytitle
                                                ? ni.categorytitle
                                                : ni.subcategorytitle
                                            }`,
                                          }}
                                        >
                                          {ni.category
                                            ? ni.category
                                            : ni.subcategory}
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="publish-date">
                                            <i className="fa fa-clock-o"></i>
                                            <a href="#/">
                                              {moment(ni.date).format("ll")}
                                            </a>
                                          </li>
                                          <li className="views">
                                            <i className="fa fa-eye"></i>
                                            <a href="#/">{ni.author}</a>
                                          </li>
                                          <li className="loves">
                                            <i className="fa fa-heart-o"></i>
                                            <a href="#/">278</a>
                                          </li>
                                          <li className="comments">
                                            <i className="fa fa-comment-o"></i>
                                            <a href="#/">189</a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <Link
                                          to={{ pathname: `/${ni.sitetitle}` }}
                                        >
                                          {ni.title}
                                        </Link>
                                      </h2>
                                    </div>
                                  </div>
                                );
                              })}
                            </OwlCarousel>
                          ) : null}
                          {/* </div> */}
                        </div>
                        {homposts && homposts.onee && homposts.onee.length > 0 && (
                          <div className="col-md-4">
                            <div className="post feature-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src={homposts.onee[0].image}
                                    alt="someim"
                                    style={{ width: 350, height: 360 }}
                                  />
                                </div>
                                <div className="catagory health">
                                  <span>
                                    <Link
                                      to={{
                                        pathname: homposts.onee[0].categorytitle
                                          ? `/category/${homposts.onee[0].categorytitle}`
                                          : `/category/${homposts.onee[0].subcategorytitle}`,
                                      }}
                                    >
                                      {homposts.onee[0].category
                                        ? homposts.onee[0].category
                                        : homposts.onee[0].subcategory}
                                    </Link>
                                  </span>
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="entry-meta">
                                  <ul className="list-inline">
                                    <li className="publish-date">
                                      <i className="fa fa-clock-o"></i>
                                      <a href="#/">
                                        {moment(homposts.onee[0].date).format(
                                          "ll"
                                        )}
                                      </a>
                                    </li>
                                    <li className="views">
                                      <i className="fa fa-eye"></i>
                                      <a href="#/">{homposts.onee[0].author}</a>
                                    </li>
                                    <li className="loves">
                                      <i className="fa fa-heart-o"></i>
                                      <a href="#/">278</a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="entry-title">
                                  <Link to={`/${homposts.onee[0].sitetitle}`}>
                                    {homposts.onee[0].title}
                                  </Link>
                                </h2>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="row">
                        {homposts &&
                          homposts.thr &&
                          homposts.thr.length > 0 &&
                          homposts.thr.map((the, ite) => {
                            return (
                              <div className="col-md-4" key={ite}>
                                <div className="post feature-post">
                                  <div className="entry-header">
                                    <div className="entry-thumbnail">
                                      <img
                                        className="img-fluid"
                                        src={the.image}
                                        alt="someim"
                                        style={{ width: 350, height: 225 }}
                                      />
                                    </div>
                                    <div className="catagory technology">
                                      <span>
                                        <Link
                                          to={{
                                            pathname: `/category/${
                                              the.categorytitle
                                                ? the.categorytitle
                                                : the.subcategorytitle
                                            }`,
                                          }}
                                        >
                                          {the.category
                                            ? the.category
                                            : the.subcategory}
                                        </Link>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="post-content">
                                    <div className="entry-meta">
                                      <ul className="list-inline">
                                        <li className="publish-date">
                                          <i className="fa fa-clock-o"></i>
                                          <a href="#/">
                                            {moment(the.date).format("ll")}{" "}
                                          </a>
                                        </li>
                                        <li className="views">
                                          <i className="fa fa-eye"></i>
                                          <a href="#/">{the.author}</a>
                                        </li>
                                        <li className="loves">
                                          <i className="fa fa-heart-o"></i>
                                          <a href="#/">278</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <h2 className="entry-title">
                                      <Link
                                        to={{ pathname: `/${the.sitetitle}` }}
                                      >
                                        {the.title}
                                      </Link>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                      <div className="add featured-add">
                        <a href="#/">
                          <img
                            className="img-fluid"
                            src="../images/post/add/add1.jpg"
                            alt="someim"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section add inner-add">
                  <a href="#/">
                    <img
                      className="img-fluid"
                      src="../images/post/add/add2.jpg"
                      alt="someim"
                    />
                  </a>
                </div>
                <div className="section">
                  <div className="latest-news-wrapper">
                    <h1 className="section-title">Latest News</h1>
                    <div id="latest-news">
                      {homposts && homposts.late && homposts.late.length > 0 ? (
                        <OwlCarousel
                          id="latest-news"
                          className="owl-theme"
                          loop={true}
                          items={width > 500 ? 4 : 1}
                          autoplayHoverPause={true}
                          autoplay
                          autoplayTimeout={1500}
                          dots={false}
                          margin={5}
                        >
                          {homposts.late.map((nu, iu) => {
                            return (
                              <div className="post medium-post" key={iu}>
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src={nu.image}
                                      alt="someim"
                                      style={{ width: 358, height: 180 }}
                                    />
                                  </div>
                                  <div className="catagory politics">
                                    <span>
                                      <Link
                                        to={{
                                          pathname: `/category/${
                                            nu.categorytitle
                                              ? nu.categorytitle
                                              : nu.subcategorytitle
                                          }`,
                                        }}
                                      >
                                        {nu.category
                                          ? nu.category
                                          : nu.subcategory}
                                      </Link>
                                    </span>
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i>
                                          {moment(nu.date).format("ll")}
                                        </a>
                                      </li>
                                      <li className="views">
                                        <a href="#/">
                                          <i className="fa fa-eye"></i>
                                          {nu.author}
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
                                    <Link to={{ pathname: `/${nu.sitetitle}` }}>
                                      {nu.title}
                                    </Link>
                                  </h2>
                                </div>
                              </div>
                            );
                          })}
                        </OwlCarousel>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="section">
                  <div className="row">
                    <div className="col-md-8 col-lg-9">
                      <div id="site-content">
                        <div className="row">
                          <div className="col-lg-8 col-md-6 tr-sticky">
                            <div className="left-content theiaStickySidebar">
                              <div className="section world-news">
                                <h1 className="section-title title">
                                  Best To Invest
                                </h1>
                                <div className="post">
                                  {homposts &&
                                    homposts.besto &&
                                    homposts.besto.length > 0 &&
                                    homposts.besto.map((bsto, bis) => {
                                      return (
                                        <React.Fragment key={bis}>
                                          <div className="entry-header">
                                            <div className="entry-thumbnail">
                                              <img
                                                className="img-fluid"
                                                src={bsto.image}
                                                alt="someim"
                                              />
                                            </div>
                                          </div>

                                          <div className="post-content">
                                            <div className="entry-meta">
                                              <ul className="list-inline">
                                                <li className="publish-date">
                                                  <a href="#/">
                                                    <i className="fa fa-clock-o"></i>
                                                    {moment(bsto.date).format(
                                                      "ll"
                                                    )}
                                                  </a>
                                                </li>
                                                <li className="views">
                                                  <a href="#/">
                                                    <i className="fa fa-eye"></i>
                                                    {bsto.author}
                                                  </a>
                                                </li>
                                                <li className="loves">
                                                  <a href="#/">
                                                    <i className="fa fa-heart-o"></i>
                                                    278
                                                  </a>
                                                </li>
                                                <li className="comments">
                                                  <i className="fa fa-comment-o"></i>
                                                  <a href="#/">189</a>
                                                </li>
                                              </ul>
                                            </div>
                                            <h2 className="entry-title">
                                              <Link
                                                to={{
                                                  pathname: `/${bsto.sitetitle}`,
                                                }}
                                              >
                                                {bsto.title}
                                              </Link>
                                            </h2>
                                            <div className="entry-content">
                                              <p>
                                                Text of the printing and
                                                typesetting industry orem Ipsum
                                                has been the industry standard
                                                dummy text ever since the when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book ......
                                              </p>
                                            </div>
                                          </div>
                                        </React.Fragment>
                                      );
                                    })}
                                  {homposts &&
                                    homposts.bestt &&
                                    homposts.bestt.length > 0 &&
                                    homposts.bestt.map((bstt, bisstt) => {
                                      return (
                                        <React.Fragment key={bisstt}>
                                          <div className="list-post">
                                            <ul>
                                              <li>
                                                <Link
                                                  to={{
                                                    pathname: `/${bstt.sitetitle}`,
                                                  }}
                                                >
                                                  {bstt.title}
                                                  <i className="fa fa-angle-right"></i>
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </React.Fragment>
                                      );
                                    })}
                                </div>
                              </div>
                              <div className="section technology-news">
                                <h1 className="section-title">IPO</h1>
                                <div className="row">
                                  <div className="col-lg-8">
                                    {homposts &&
                                      homposts.ipooo &&
                                      homposts.ipooo.length > 0 &&
                                      homposts.ipooo.map((ippo, ippi) => {
                                        return (
                                          <React.Fragment key={ippi}>
                                            <div className="post">
                                              <div className="entry-header">
                                                <div className="entry-thumbnail">
                                                  <img
                                                    className="img-fluid"
                                                    src={ippo.image}
                                                    alt="someim"
                                                  />
                                                </div>
                                              </div>
                                              <div className="post-content">
                                                <div className="entry-meta">
                                                  <ul className="list-inline">
                                                    <li className="publish-date">
                                                      <a href="#/">
                                                        <i className="fa fa-clock-o"></i>
                                                        {moment(
                                                          ippo.date
                                                        ).format("ll")}
                                                      </a>
                                                    </li>
                                                    <li className="views">
                                                      <a href="#/">
                                                        <i className="fa fa-eye"></i>
                                                        {ippo.author}
                                                      </a>
                                                    </li>
                                                    <li className="loves">
                                                      <a href="#/">
                                                        <i className="fa fa-heart-o"></i>
                                                        278
                                                      </a>
                                                    </li>
                                                    <li className="comments">
                                                      <i className="fa fa-comment-o"></i>
                                                      <a href="#/">189</a>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <h2 className="entry-title">
                                                  <Link
                                                    to={{
                                                      pathname: `/${ippo.sitetitle}`,
                                                    }}
                                                  >
                                                    {ippo.title}
                                                  </Link>
                                                </h2>
                                                <div className="entry-content">
                                                  <p>
                                                    Text of the printing and
                                                    typesetting industry orem
                                                    Ipsum has been the industry
                                                    standard dummy text ever
                                                    since....
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </React.Fragment>
                                        );
                                      })}
                                  </div>
                                  <div className="col-lg-4">
                                    {homposts &&
                                      homposts.ipott &&
                                      homposts.ipott.length > 0 &&
                                      homposts.ipott.map((ipto, ipti) => {
                                        return (
                                          <React.Fragment key={ipti}>
                                            <div className="post small-post">
                                              <div className="entry-header">
                                                <div className="entry-thumbnail">
                                                  <img
                                                    className="img-fluid"
                                                    src={ipto.image}
                                                    alt="someim"
                                                  />
                                                </div>
                                              </div>
                                              <div className="post-content">
                                                <div className="entry-meta">
                                                  <ul className="list-inline">
                                                    <li className="publish-date">
                                                      <a href="#/">
                                                        <i className="fa fa-clock-o"></i>
                                                        {moment(
                                                          ipto.date
                                                        ).format("ll")}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <h2 className="entry-title">
                                                  <Link
                                                    to={{
                                                      pathname: `/${ipto.sitetitle}`,
                                                    }}
                                                  >
                                                    {ipto.title}
                                                  </Link>
                                                </h2>
                                              </div>
                                            </div>
                                          </React.Fragment>
                                        );
                                      })}
                                  </div>
                                </div>
                              </div>
                              <div className="section add inner-add">
                                <a href="#/">
                                  <img
                                    className="img-fluid"
                                    src="../images/post/add/add4.jpg"
                                    alt="someim"
                                  />
                                </a>
                              </div>
                              <div className="section lifestyle-section">
                                <h1 className="section-title">NEWS</h1>
                                <div className="row">
                                  <div className="col-lg-6">
                                    {homposts &&
                                      homposts.newso &&
                                      homposts.newso.length > 0 &&
                                      homposts.newso.map((newss, nws) => {
                                        return (
                                          <React.Fragment key={nws}>
                                            <div className="post medium-post">
                                              <div className="entry-header">
                                                <div className="entry-thumbnail">
                                                  <img
                                                    className="img-fluid"
                                                    src={newss.image}
                                                    alt="someim"
                                                    style={{
                                                      width: 450,
                                                      height: 150,
                                                    }}
                                                  />
                                                </div>
                                              </div>
                                              <div className="post-content">
                                                <div className="entry-meta">
                                                  <ul className="list-inline">
                                                    <li className="publish-date">
                                                      <a href="#/">
                                                        <i className="fa fa-clock-o"></i>
                                                        {moment(
                                                          newss.date
                                                        ).format("ll")}
                                                      </a>
                                                    </li>
                                                    <li className="views">
                                                      <a href="#/">
                                                        <i className="fa fa-eye"></i>
                                                        15k
                                                      </a>
                                                    </li>
                                                    <li className="loves">
                                                      <a href="#/">
                                                        <i className="fa fa-heart-o"></i>
                                                        278
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <h2 className="entry-title">
                                                  <Link
                                                    to={{
                                                      pathname: `/${newss.sitetitle}`,
                                                    }}
                                                  >
                                                    {newss.title}
                                                  </Link>
                                                </h2>
                                              </div>
                                            </div>
                                          </React.Fragment>
                                        );
                                      })}
                                  </div>
                                  <div className="col-lg-6">
                                    {homposts &&
                                      homposts.newst &&
                                      homposts.newst.length > 0 &&
                                      homposts.newst.map((nwss, nwes) => {
                                        return (
                                          <React.Fragment key={nwes}>
                                            <div className="post medium-post">
                                              <div className="entry-header">
                                                <div className="entry-thumbnail">
                                                  <img
                                                    className="img-fluid"
                                                    src={nwss.image}
                                                    alt="someim"
                                                    style={{
                                                      width: 450,
                                                      height: 150,
                                                    }}
                                                  />
                                                </div>
                                              </div>
                                              <div className="post-content">
                                                <div className="entry-meta">
                                                  <ul className="list-inline">
                                                    <li className="publish-date">
                                                      <a href="#/">
                                                        <i className="fa fa-clock-o"></i>
                                                        {moment(
                                                          nwss.date
                                                        ).format("ll")}
                                                      </a>
                                                    </li>
                                                    <li className="views">
                                                      <a href="#/">
                                                        <i className="fa fa-eye"></i>
                                                        {nwss.author}
                                                      </a>
                                                    </li>
                                                    <li className="loves">
                                                      <a href="#/">
                                                        <i className="fa fa-heart-o"></i>
                                                        278
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <h2 className="entry-title">
                                                  <Link
                                                    to={{
                                                      pathname: `/${nwss.sitetitle}`,
                                                    }}
                                                  >
                                                    {nwss.title}
                                                  </Link>
                                                </h2>
                                              </div>
                                            </div>
                                          </React.Fragment>
                                        );
                                      })}
                                  </div>
                                </div>
                              </div>

                              <div className="section health-section">
                                <h1 className="section-title">MUTUAL FUNDS</h1>

                                <div className="health-feature">
                                  {homposts &&
                                    homposts.mutufo &&
                                    homposts.mutufo.length > 0 &&
                                    homposts.mutufo.map((muut, muuf) => {
                                      return (
                                        <React.Fragment key={muuf}>
                                          <div className="post">
                                            <div className="entry-header">
                                              <div className="entry-thumbnail">
                                                <img
                                                  className="img-fluid"
                                                  src={muut.image}
                                                  alt="someim"
                                                />
                                              </div>
                                            </div>
                                            <div className="post-content">
                                              <div className="entry-meta">
                                                <ul className="list-inline">
                                                  <li className="publish-date">
                                                    <a href="#/">
                                                      <i className="fa fa-clock-o"></i>
                                                      {moment(muut.date).format(
                                                        "ll"
                                                      )}
                                                    </a>
                                                  </li>
                                                  <li className="views">
                                                    <a href="#/">
                                                      <i className="fa fa-eye"></i>
                                                      {muut.author}
                                                    </a>
                                                  </li>
                                                  <li className="loves">
                                                    <a href="#/">
                                                      <i className="fa fa-heart-o"></i>
                                                      278
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                              <h2 className="entry-title">
                                                <Link
                                                  to={{
                                                    pathname: `/${muut.sitetitle}`,
                                                  }}
                                                >
                                                  {muut.title}
                                                </Link>
                                              </h2>
                                            </div>
                                          </div>
                                        </React.Fragment>
                                      );
                                    })}
                                </div>

                                <div className="row">
                                  <div className="col-lg-6">
                                    {homposts &&
                                      homposts.mutufto &&
                                      homposts.mutufto.length > 0 &&
                                      homposts.mutufto.map((mutfto, muto) => {
                                        return (
                                          <React.Fragment key={muto}>
                                            <div className="post small-post">
                                              <div className="entry-header">
                                                <div className="entry-thumbnail">
                                                  <img
                                                    className="img-fluid"
                                                    src={mutfto.image}
                                                    alt="someim"
                                                    style={{
                                                      width: 95,
                                                      height: 95,
                                                    }}
                                                  />
                                                </div>
                                              </div>
                                              <div className="post-content">
                                                <div className="entry-meta">
                                                  <ul className="list-inline">
                                                    <li className="publish-date">
                                                      <a href="#/">
                                                        <i className="fa fa-clock-o"></i>
                                                        {moment(
                                                          mutfto.date
                                                        ).format("ll")}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <h2 className="entry-title">
                                                  <Link
                                                    to={{
                                                      pathname: `/${mutfto.sitetitle}`,
                                                    }}
                                                  >
                                                    {mutfto.title}
                                                  </Link>
                                                </h2>
                                              </div>
                                            </div>
                                          </React.Fragment>
                                        );
                                      })}
                                  </div>
                                  <div className="col-lg-6">
                                    {homposts &&
                                      homposts.mutuftt &&
                                      homposts.mutuftt.length > 0 &&
                                      homposts.mutuftt.map((mutftt, mutt) => {
                                        return (
                                          <React.Fragment key={mutt}>
                                            <div className="post small-post">
                                              <div className="entry-header">
                                                <div className="entry-thumbnail">
                                                  <img
                                                    className="img-fluid"
                                                    src={mutftt.image}
                                                    alt="someim"
                                                    style={{
                                                      width: 95,
                                                      height: 95,
                                                    }}
                                                  />
                                                </div>
                                              </div>
                                              <div className="post-content">
                                                <div className="entry-meta">
                                                  <ul className="list-inline">
                                                    <li className="publish-date">
                                                      <a href="#/">
                                                        <i className="fa fa-clock-o"></i>
                                                        {moment(
                                                          mutftt.date
                                                        ).format("ll")}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <h2 className="entry-title">
                                                  <Link
                                                    to={{
                                                      pathname: `/${mutftt.sitetitle}`,
                                                    }}
                                                  >
                                                    {mutftt.title}
                                                  </Link>
                                                </h2>
                                              </div>
                                            </div>
                                          </React.Fragment>
                                        );
                                      })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 tr-sticky">
                            <div className="middle-content theiaStickySidebar">
                              <div className="section sports-section">
                                <h1 className="section-title title">
                                  What is ?
                                </h1>
                                {homposts &&
                                  homposts.whats &&
                                  homposts.whats.length > 0 &&
                                  homposts.whats.map((wht, whit) => {
                                    return (
                                      <React.Fragment key={whit}>
                                        <div
                                          className="post medium-post"
                                          key={whit}
                                        >
                                          <div className="entry-header">
                                            <div className="entry-thumbnail">
                                              <img
                                                className="img-fluid"
                                                src={wht.image}
                                                alt="someim"
                                              />
                                            </div>
                                          </div>
                                          <div className="post-content">
                                            <div className="entry-meta">
                                              <ul className="list-inline">
                                                <li className="publish-date">
                                                  <a href="#/">
                                                    <i className="fa fa-clock-o"></i>{" "}
                                                    {moment(wht.date).format(
                                                      "ll"
                                                    )}
                                                  </a>
                                                </li>
                                                <li className="views">
                                                  <a href="#/">
                                                    <i className="fa fa-eye"></i>
                                                    15k
                                                  </a>
                                                </li>
                                                <li className="loves">
                                                  <a href="#/">
                                                    <i className="fa fa-heart-o"></i>
                                                    278
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                            <h2 className="entry-title">
                                              <Link
                                                to={{
                                                  pathname: `/${wht.sitetitle}`,
                                                }}
                                              >
                                                {wht.title}
                                              </Link>
                                            </h2>
                                          </div>
                                        </div>
                                      </React.Fragment>
                                    );
                                  })}
                              </div>
                              <div className="section">
                                <div className="add inner-add">
                                  <a href="#/">
                                    <img
                                      className="img-fluid"
                                      src="../images/post/add/add5.jpg"
                                      alt="someim"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-3 tr-sticky">
                      <div id="sitebar" className="theiaStickySidebar">
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
                          <div className="add">
                            <a href="#/">
                              <img
                                className="img-fluid"
                                src="../images/post/add/add3.jpg"
                                alt="someim"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="widget">
                          <h1 className="section-title title">
                            This is Rising!
                          </h1>
                          {homposts &&
                          homposts.rising &&
                          homposts.rising.length > 0 ? (
                            <ul className="post-list">
                              {homposts.rising.map((lit, lat) => {
                                return (
                                  <React.Fragment key={lat}>
                                    <li>
                                      <div className="post small-post">
                                        <div className="entry-header">
                                          <div className="entry-thumbnail">
                                            <img
                                              className="img-fluid"
                                              src={lit.image}
                                              alt="someim"
                                            />
                                          </div>
                                        </div>
                                        <div className="post-content">
                                          <div className="video-catagory">
                                            <Link
                                              to={{
                                                pathname: `/category/${
                                                  lit.categorytitle
                                                    ? lit.categorytitle
                                                    : lit.subcategorytitle
                                                }`,
                                              }}
                                            >
                                              {lit.category
                                                ? lit.category
                                                : lit.subcategory}
                                            </Link>
                                          </div>
                                          <h2 className="entry-title">
                                            <Link
                                              to={{
                                                pathname: `/${lit.sitetitle}`,
                                              }}
                                            >
                                              {lit.title}
                                            </Link>
                                          </h2>
                                        </div>
                                      </div>
                                    </li>
                                  </React.Fragment>
                                );
                              })}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </body>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    cats: state.cats,
    homposts: state.homposts,
  };
};

export default connect(mapStateToProps)(Home);
