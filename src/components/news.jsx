import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import DocumentMeta from "react-document-meta";
import moment from "moment";

class News extends Component {
  state = {};

  render() {
    const posts =
      this.props.posts &&
      this.props.posts.filter(
        (po) => po.sitetitle === this.props.match.params.title
      )[0];
    const meta = {
      title: `Stock Investor | ${posts && posts.title}`,
      description: `${posts && posts.title}`,
      meta: {
        name: {
          keywords: `${posts && posts.tags.join(", ")}`,
        },
      },
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
                    {posts
                      ? posts.category
                        ? posts.category
                        : posts.subcategory
                      : ""}
                  </h1>
                </div>
                <div className="section">
                  <div className="row">
                    {posts ? (
                      <div className="col-md-8 col-lg-9">
                        <div id="site-content" className="site-content">
                          <div className="row">
                            <div className="col">
                              <div className="left-content">
                                <div className="details-news">
                                  <div className="post">
                                    <div className="entry-header">
                                      <div className="entry-thumbnail">
                                        <img
                                          className="img-fluid"
                                          src={posts && posts.image}
                                          alt="someim"
                                          style={{ width: 871, height: 497 }}
                                        />
                                      </div>
                                    </div>
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="posted-by">
                                            <i className="fa fa-user"></i> by{" "}
                                            <a href="#/">
                                              {posts && posts.author}
                                            </a>
                                          </li>
                                          <li className="publish-date">
                                            <a href="#/">
                                              <i className="fa fa-clock-o"></i>
                                              {posts &&
                                                moment(posts.date).format("ll")}
                                            </a>
                                          </li>
                                          <li className="views">
                                            <a href="#/">
                                              <i className="fa fa-eye"></i>
                                              {posts && posts.tags.join(", ")}
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
                                        {posts && posts.title}
                                      </h2>
                                      <div
                                        className="entry-content"
                                        dangerouslySetInnerHTML={{
                                          __html: posts && posts.description,
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <div className="row">
                      <div className="col-sm-12">
                        <div className="post google-add">
                          <div className="add inner-add text-center">
                            <a href="#/">
                              <img
                                className="img-fluid"
                                src="images/post/google-add.jpg"
                                alt="someim"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="comments-wrapper">
                          <h1 className="section-title title">Comments</h1>
                          <ul className="media-list">
                            <li className="media">
                              <div className="media-left">
                                <a href="#/">
                                  <img
                                    className="media-object"
                                    src="images/others/author2.png"
                                    alt="someim"
                                  />
                                </a>
                              </div>
                              <div className="media-body">
                                <h2>
                                  <a href="#/">Axel Bouaziz</a>
                                </h2>
                                <h3 className="date">
                                  <a href="#/">15 December 2018</a>
                                </h3>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam, eaque ipsa quae
                                  ab illo inventore veritatis et quasi
                                  architecto beatae vitae dicta sunt explicabo.{" "}
                                </p>
                                <a className="replay" href="#/">
                                  Replay
                                </a>
                              </div>
                            </li>
                            <li className="media">
                              <div className="media-left">
                                <a href="#/">
                                  <img
                                    className="media-object"
                                    src="images/others/author.png"
                                    alt="someim"
                                  />
                                </a>
                              </div>
                              <div className="media-body">
                                <h2>
                                  <a href="#/">Axel Bouaziz</a>
                                </h2>
                                <h3 className="date">
                                  <a href="#/">15 December 2018</a>
                                </h3>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam, eaque ipsa quae
                                  ab illo inventore veritatis et quasi
                                  architecto beatae vitae dicta sunt explicabo.{" "}
                                </p>
                                <a className="replay" href="#/">
                                  Replay
                                </a>
                              </div>
                            </li>
                            <li className="media">
                              <div className="media-left">
                                <a href="#/">
                                  <img
                                    className="media-object"
                                    src="images/others/author1.png"
                                    alt="someim"
                                  />
                                </a>
                              </div>
                              <div className="media-body">
                                <h2>
                                  <a href="#/">Axel Bouaziz</a>
                                </h2>
                                <h3 className="date">
                                  <a href="#/">15 December 2018</a>
                                </h3>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam, eaque ipsa quae
                                  ab illo inventore veritatis et quasi
                                  architecto beatae vitae dicta sunt explicabo.{" "}
                                </p>
                                <a className="replay" href="#/">
                                  Replay
                                </a>
                              </div>
                            </li>
                            <li className="media media-child">
                              <div className="media-left">
                                <a href="#/">
                                  <img
                                    className="media-object"
                                    src="images/others/author3.png"
                                    alt="someim"
                                  />
                                </a>
                              </div>
                              <div className="media-body">
                                <h2>
                                  <a href="#/">Axel Bouaziz</a>
                                </h2>
                                <h3 className="date">
                                  <a href="#/">15 December 2018</a>
                                </h3>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam, eaque ipsa quae
                                  ab illo inventore.
                                </p>
                                <a className="replay" href="#/">
                                  Replay
                                </a>
                              </div>
                            </li>
                          </ul>
                          <div className="comments-box">
                            <h1 className="section-title title">
                              Leave a Comment
                            </h1>
                            <form
                              id="comment-form"
                              name="comment-form"
                              method="post"
                            >
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Name</label>
                                    <input
                                      type="text"
                                      name="name"
                                      className="form-control"
                                      required="required"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Email</label>
                                    <input
                                      type="email"
                                      name="email"
                                      className="form-control"
                                      required="required"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>Subject</label>
                                    <input
                                      type="text"
                                      name="subject"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="form-group">
                                    <label>Your Text</label>
                                    <textarea
                                      name="comment"
                                      id="comment"
                                      required="required"
                                      className="form-control"
                                      rows="5"
                                    ></textarea>
                                  </div>
                                  <div className="text-center">
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                    >
                                      Send{" "}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="section">
                          <h1 className="section-title">More in Worlds</h1>
                          <div className="row">
                            <div className="col-md-6 col-lg-4">
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/1.jpg"
                                      alt="someim"
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
                                    <a href="#/">
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
                                      src="images/post/2.jpg"
                                      alt="someim"
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
                                      alt="someim"
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
                                      alt="someim"
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
                                      alt="someim"
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
                                      alt="someim"
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
                  */}
                      </div>
                    ) : (
                      <div className="col-md-8 col-lg-9"></div>
                    )}
                    <div className="col-md-4 col-lg-3 tr-sticky">
                      <div id="sitebar" className="theiaStickySidebar">
                        <div className="widget">
                          <div className="add featured-add">
                            <a href="#/">
                              <img
                                className="img-fluid"
                                src="images/post/add/add1.jpg"
                                alt="someim"
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
                                      src="images/post/rising/1.jpg"
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
                                      src="images/post/rising/2.jpg"
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
                                      src="images/post/rising/3.jpg"
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
                                      src="images/post/rising/4.jpg"
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
                                      src="images/post/rising/5.jpg"
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
                                      src="images/post/rising/6.jpg"
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
                                      src="images/post/rising/7.jpg"
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
                                      src="images/post/rising/8.jpg"
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
                                      src="images/post/7.jpg"
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
  };
};

export default connect(mapStateToProps)(News);
