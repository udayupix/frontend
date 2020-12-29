import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import moment from "moment";
import { Link } from "react-router-dom";
import DocumentMeta from "react-document-meta";

class ListingSports extends Component {
  state = { titl: "" };

  render() {
    const titl = this.props.match.params.cate;
    const newdata =
      this.props.posts &&
      this.props.posts.filter(
        (po) =>
          po.categorytitle.includes(titl) || po.subcategorytitle.includes(titl)
      );
    const meta = {
      title: `Stock Investor | ${
        titl && titl.toUpperCase().split("-").join(" ")
      }`,
    };
    return (
      <React.Fragment>
        <DocumentMeta {...meta}>
          <body>
            <div id="main-wrapper" className="page">
              <Header />
              <div className="container">
                <div className="page-breadcrumbs">
                  <h1 className="section-title">
                    {titl ? titl.toUpperCase().split("-").join(" ") : ""}
                  </h1>
                </div>
                <div className="section">
                  <div className="row">
                    <div className="col-md-12 col-lg-9">
                      <div id="site-content" className="site-content">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 tr-sticky">
                            <div className="left-content theiaStickySidebar">
                              <div className="sports-news">
                                {newdata && newdata.length > 0 ? (
                                  <div className="post">
                                    <div className="entry-header">
                                      <div className="entry-thumbnail">
                                        <img
                                          className="img-fluid"
                                          src={newdata[0].image}
                                          alt="someim"
                                          style={{ width: 980, height: 450 }}
                                        />
                                      </div>
                                    </div>
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="publish-date">
                                            <Link>
                                              <i className="fa fa-clock-o"></i>
                                              {moment(newdata[0].date).format(
                                                "ll"
                                              )}
                                            </Link>
                                          </li>
                                          <li className="views">
                                            <Link>
                                              <i className="fa fa-eye"></i>
                                              {newdata[0].author}
                                            </Link>
                                          </li>
                                          <li className="loves">
                                            <Link>
                                              <i className="fa fa-heart-o"></i>
                                              278
                                            </Link>
                                          </li>
                                          <li className="comments">
                                            <i className="fa fa-comment-o"></i>
                                            <Link>189</Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <Link to={`/${newdata[0].sitetitle}`}>
                                          {newdata[0].title}
                                        </Link>
                                      </h2>
                                      <div className="entry-content">
                                        <p>
                                          Claritas est etiam processus
                                          dynamicus, qui sequitur mutationem
                                          consuetudium lectorum. Mirum est
                                          notare quam littera gothica, quam nunc
                                          putamus parum claram, anteposuerit
                                          litterarum formas humanitatis per
                                          seacula quarta decima et quinta
                                          decima. Eodem modo typi, qui nunc
                                          nobis videntur parum clari, fiant
                                          sollemnes in futurum.....
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="section">
                            <div className="row">
                              {newdata &&
                                newdata.length >= 4 &&
                                newdata.slice(1, 7).map((nwd, nul) => {
                                  return (
                                    <React.Fragment key={nul}>
                                      <div className="col-md-6 col-lg-4">
                                        <div className="post medium-post">
                                          <div className="entry-header">
                                            <div className="entry-thumbnail">
                                              <img
                                                className="img-fluid"
                                                src={nwd.image}
                                                alt="someim"
                                                style={{
                                                  width: 450,
                                                  height: 158,
                                                }}
                                              />
                                            </div>
                                          </div>
                                          <div className="post-content">
                                            <div className="entry-meta">
                                              <ul className="list-inline">
                                                <li className="publish-date">
                                                  <Link>
                                                    <i className="fa fa-clock-o"></i>
                                                    {moment(nwd.date).format(
                                                      "ll"
                                                    )}
                                                  </Link>
                                                </li>
                                                <li className="views">
                                                  <Link>
                                                    <i className="fa fa-eye"></i>
                                                    {nwd.author}
                                                  </Link>
                                                </li>
                                                <li className="loves">
                                                  <Link>
                                                    <i className="fa fa-heart-o"></i>
                                                    278
                                                  </Link>
                                                </li>
                                              </ul>
                                            </div>
                                            <h2 className="entry-title">
                                              <Link to={`/${nwd.sitetitle}`}>
                                                {nwd.title}
                                              </Link>
                                            </h2>
                                          </div>
                                        </div>
                                      </div>
                                    </React.Fragment>
                                  );
                                })}
                            </div>
                          </div>
                          <div className="google-add">
                            <div className="add inner-add text-center">
                              <Link>
                                <img
                                  className="img-fluid"
                                  src="../images/post/google-add.jpg"
                                  alt="someim"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="section">
                            <div className="row">
                              {newdata &&
                                newdata.length > 8 &&
                                newdata
                                  .slice(7, newdata.length)
                                  .map((nwd, nul) => {
                                    return (
                                      <React.Fragment key={nul}>
                                        <div className="col-md-6 col-lg-4">
                                          <div className="post medium-post">
                                            <div className="entry-header">
                                              <div className="entry-thumbnail">
                                                <img
                                                  className="img-fluid"
                                                  src={nwd.image}
                                                  alt="someim"
                                                  style={{
                                                    width: 450,
                                                    height: 158,
                                                  }}
                                                />
                                              </div>
                                            </div>
                                            <div className="post-content">
                                              <div className="entry-meta">
                                                <ul className="list-inline">
                                                  <li className="publish-date">
                                                    <Link>
                                                      <i className="fa fa-clock-o"></i>
                                                      {moment(nwd.date).format(
                                                        "ll"
                                                      )}
                                                    </Link>
                                                  </li>
                                                  <li className="views">
                                                    <Link>
                                                      <i className="fa fa-eye"></i>
                                                      {nwd.author}
                                                    </Link>
                                                  </li>
                                                  <li className="loves">
                                                    <Link>
                                                      <i className="fa fa-heart-o"></i>
                                                      278
                                                    </Link>
                                                  </li>
                                                </ul>
                                              </div>
                                              <h2 className="entry-title">
                                                <Link to={`/${nwd.sitetitle}`}>
                                                  {nwd.title}
                                                </Link>
                                              </h2>
                                            </div>
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
                    <div className="col-md-4 col-lg-3 tr-sticky">
                      <div id="sitebar" className="theiaStickySidebar">
                        <div className="widget">
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
                        <div className="widget follow-us">
                          <h1 className="section-title title">Follow Us</h1>
                          <ul className="list-inline social-icons">
                            <li>
                              <Link>
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link>
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link>
                                <i className="fa fa-google-plus"></i>
                              </Link>
                            </li>
                            <li>
                              <Link>
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link>
                                <i className="fa fa-youtube"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="widget">
                          <h1 className="section-title title">
                            This is Rising!
                          </h1>
                          <ul className="post-list">
                            <li>
                              <div className="post small-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="../images/post/rising/1.jpg"
                                      alt="someim"
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
                                      src="../images/post/rising/2.jpg"
                                      alt="someim"
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
                                      src="../images/post/rising/3.jpg"
                                      alt="someim"
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
                                      src="../images/post/rising/4.jpg"
                                      alt="someim"
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
                                      src="../images/post/rising/5.jpg"
                                      alt="someim"
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
                                      src="../images/post/rising/6.jpg"
                                      alt="someim"
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
                                      src="../images/post/rising/7.jpg"
                                      alt="someim"
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
                                      src="../images/post/rising/8.jpg"
                                      alt="someim"
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
                            <li>
                              <div className="post small-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="../images/post/7.jpg"
                                      alt="someim"
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
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </body>
        </DocumentMeta>
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

export default connect(mapStateToProps)(ListingSports);
