import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import OwlCarousel from "react-owl-carousel";

class NewOne extends Component {
  state = {};
  render() {
    const width = window.innerWidth;
    return (
      <React.Fragment>
        <body>
          <div id="main-wrapper" className="page">
            <Header />
            <br /> <br />
            <div className="container">
              <div className="section">
                <div className="row">
                  <div className="site-content col-lg-9">
                    <div className="row">
                      <div className="col-md-8">
                        <div id="home-slider">
                          <OwlCarousel
                            id="home-slider"
                            className="owl-theme"
                            loop={true}
                            items={1}
                          >
                            <div className="post feature-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/slider/1.jpg"
                                    alt="mage"
                                  />
                                </div>
                                <div className="catagory world">
                                  <a href="#/">World</a>
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="entry-meta">
                                  <ul className="list-inline">
                                    <li className="publish-date">
                                      <i className="fa fa-clock-o"></i>
                                      <a href="#/"> Nov 1, 2018 </a>
                                    </li>
                                    <li className="views">
                                      <i className="fa fa-eye"></i>
                                      <a href="#/">15k</a>
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
                                  <a href="news-details.html">
                                    We Are Seeing The Effects Of The Minimum
                                    Wage Rise In San Francisco
                                  </a>
                                </h2>
                              </div>
                            </div>
                            <div className="post feature-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/slider/7.jpg"
                                    alt="mage"
                                  />
                                </div>
                                <div className="catagory sports">
                                  <a href="#/">Sports</a>
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="entry-meta">
                                  <ul className="list-inline">
                                    <li className="publish-date">
                                      <i className="fa fa-clock-o"></i>
                                      <a href="#/"> Nov 1, 2018 </a>
                                    </li>
                                    <li className="views">
                                      <i className="fa fa-eye"></i>
                                      <a href="#/">15k</a>
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
                                  <a href="news-details.html">
                                    The 20 moments in sports that tried to break
                                    the Internet in 2018
                                  </a>
                                </h2>
                              </div>
                            </div>
                            <div className="post feature-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/slider/13.jpg"
                                    alt="mage"
                                  />
                                </div>
                                <div className="catagory entertainment">
                                  <a href="#/">Entertainment</a>
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="entry-meta">
                                  <ul className="list-inline">
                                    <li className="publish-date">
                                      <i className="fa fa-clock-o"></i>
                                      <a href="#/"> Nov 1, 2018 </a>
                                    </li>
                                    <li className="views">
                                      <i className="fa fa-eye"></i>
                                      <a href="#/">15k</a>
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
                                  <a href="news-details.html">
                                    The best games in 2018 for your new iPhone,
                                    iPad, or Android phone
                                  </a>
                                </h2>
                              </div>
                            </div>
                            <div className="post feature-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/slider/12.jpg"
                                    alt="mage"
                                  />
                                </div>
                                <div className="catagory world">
                                  <a href="#/">World</a>
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="entry-meta">
                                  <ul className="list-inline">
                                    <li className="publish-date">
                                      <i className="fa fa-clock-o"></i>
                                      <a href="#/"> Nov 1, 2018 </a>
                                    </li>
                                    <li className="views">
                                      <i className="fa fa-eye"></i>
                                      <a href="#/">15k</a>
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
                                  <a href="news-details.html">
                                    The Force Awakens doubles previous Christmas
                                    Day record with $49.3 million box office
                                  </a>
                                </h2>
                              </div>
                            </div>
                            <div className="post feature-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/slider/14.jpg"
                                    alt="mage"
                                  />
                                </div>
                                <div className="catagory sports">
                                  <a href="#/">Sports</a>
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="entry-meta">
                                  <ul className="list-inline">
                                    <li className="publish-date">
                                      <i className="fa fa-clock-o"></i>
                                      <a href="#/"> Nov 1, 2018 </a>
                                    </li>
                                    <li className="views">
                                      <i className="fa fa-eye"></i>
                                      <a href="#/">15k</a>
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
                                  <a href="news-details.html">
                                    Bran Stark is all grown up in new 'Game of
                                    Thrones' Season 6 photo
                                  </a>
                                </h2>
                              </div>
                            </div>
                            <div className="post feature-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/slider/10.jpg"
                                    alt="mage"
                                  />
                                </div>
                                <div className="catagory entertainment">
                                  <a href="#/">Entertainment</a>
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="entry-meta">
                                  <ul className="list-inline">
                                    <li className="publish-date">
                                      <i className="fa fa-clock-o"></i>
                                      <a href="#/"> Nov 1, 2018 </a>
                                    </li>
                                    <li className="views">
                                      <i className="fa fa-eye"></i>
                                      <a href="#/">15k</a>
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
                                  <a href="news-details.html">
                                    Watch directors Quentin Tarantino and Paul
                                    Thomas Anderson geek out over 70mm film
                                  </a>
                                </h2>
                              </div>
                            </div>
                            <div className="post feature-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/slider/11.jpg"
                                    alt="mage"
                                  />
                                </div>
                                <div className="catagory world">
                                  <a href="#/">World</a>
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="entry-meta">
                                  <ul className="list-inline">
                                    <li className="publish-date">
                                      <i className="fa fa-clock-o"></i>
                                      <a href="#/"> Nov 1, 2018 </a>
                                    </li>
                                    <li className="views">
                                      <i className="fa fa-eye"></i>
                                      <a href="#/">15k</a>
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
                                  <a href="news-details.html">
                                    'Affluenza' teen arrested in Mexican resort
                                    after weeks on the run
                                  </a>
                                </h2>
                              </div>
                            </div>
                            <div className="post feature-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/slider/8.jpg"
                                    alt="mage"
                                  />
                                </div>
                                <div className="catagory sports">
                                  <a href="#/">Sports</a>
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="entry-meta">
                                  <ul className="list-inline">
                                    <li className="publish-date">
                                      <i className="fa fa-clock-o"></i>
                                      <a href="#/"> Nov 1, 2018 </a>
                                    </li>
                                    <li className="views">
                                      <i className="fa fa-eye"></i>
                                      <a href="#/">15k</a>
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
                                  <a href="news-details.html">
                                    Peyton Manning deserved a better ending --
                                    if he's telling the truth
                                  </a>
                                </h2>
                              </div>
                            </div>
                            <div className="post feature-post">
                              <div className="entry-header">
                                <div className="entry-thumbnail">
                                  <img
                                    className="img-fluid"
                                    src="images/post/slider/9.jpg"
                                    alt="mage"
                                  />
                                </div>
                                <div className="catagory entertainment">
                                  <a href="#/">Entertainment</a>
                                </div>
                              </div>
                              <div className="post-content">
                                <div className="entry-meta">
                                  <ul className="list-inline">
                                    <li className="publish-date">
                                      <i className="fa fa-clock-o"></i>
                                      <a href="#/"> Nov 1, 2018 </a>
                                    </li>
                                    <li className="views">
                                      <i className="fa fa-eye"></i>
                                      <a href="#/">15k</a>
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
                                  <a href="news-details.html">
                                    44 books on 44 presidents: Welcome, folks,
                                    to the Adams administration
                                  </a>
                                </h2>
                              </div>
                            </div>
                          </OwlCarousel>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="post feature-post">
                          <div className="entry-header">
                            <div className="entry-thumbnail">
                              <img
                                className="img-fluid"
                                src="images/post/slider/2.jpg"
                                alt="mage"
                              />
                            </div>
                            <div className="catagory health">
                              <span>
                                <a href="#/">Health</a>
                              </span>
                            </div>
                          </div>
                          <div className="post-content">
                            <div className="entry-meta">
                              <ul className="list-inline">
                                <li className="publish-date">
                                  <i className="fa fa-clock-o"></i>
                                  <a href="#/"> Nov 7, 2018 </a>
                                </li>
                                <li className="views">
                                  <i className="fa fa-eye"></i>
                                  <a href="#/">15k</a>
                                </li>
                                <li className="loves">
                                  <i className="fa fa-heart-o"></i>
                                  <a href="#/">278</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="entry-title">
                              <a href="news-details.html">
                                Manhunt intensifies for fugitive in Kentucky,
                                Tennessee
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="post feature-post">
                          <div className="entry-header">
                            <div className="entry-thumbnail">
                              <img
                                className="img-fluid"
                                src="images/post/slider/3.jpg"
                                alt="mage"
                              />
                            </div>
                            <div className="catagory technology">
                              <span>
                                <a href="#/">Technology</a>
                              </span>
                            </div>
                          </div>
                          <div className="post-content">
                            <div className="entry-meta">
                              <ul className="list-inline">
                                <li className="publish-date">
                                  <i className="fa fa-clock-o"></i>
                                  <a href="#/"> Nov 2, 2018 </a>
                                </li>
                                <li className="views">
                                  <i className="fa fa-eye"></i>
                                  <a href="#/">15k</a>
                                </li>
                                <li className="loves">
                                  <i className="fa fa-heart-o"></i>
                                  <a href="#/">278</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="entry-title">
                              <a href="news-details.html">
                                Japan in four gorgeous Pokémon-themed colors
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="post feature-post">
                          <div className="entry-header">
                            <div className="entry-thumbnail">
                              <img
                                className="img-fluid"
                                src="images/post/slider/5.jpg"
                                alt="mage"
                              />
                            </div>
                            <div className="catagory entertainment">
                              <a href="#/">Entertainment</a>
                            </div>
                          </div>
                          <div className="post-content">
                            <div className="entry-meta">
                              <ul className="list-inline">
                                <li className="publish-date">
                                  <i className="fa fa-clock-o"></i>
                                  <a href="#/"> Nov 3, 2018 </a>
                                </li>
                                <li className="views">
                                  <i className="fa fa-eye"></i>
                                  <a href="#/">15k</a>
                                </li>
                                <li className="loves">
                                  <i className="fa fa-heart-o"></i>
                                  <a href="#/">278</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="entry-title">
                              <a href="news-details.html">
                                We finally found out how BB-8 really works
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="post feature-post">
                          <div className="entry-header">
                            <div className="entry-thumbnail">
                              <img
                                className="img-fluid"
                                src="images/post/slider/6.jpg"
                                alt="mage"
                              />
                            </div>
                            <div className="catagory politics">
                              <span>
                                <a href="#/">Politics</a>
                              </span>
                            </div>
                          </div>
                          <div className="post-content">
                            <div className="entry-meta">
                              <ul className="list-inline">
                                <li className="publish-date">
                                  <i className="fa fa-clock-o"></i>
                                  <a href="#/"> Nov 5, 2018 </a>
                                </li>
                                <li className="views">
                                  <i className="fa fa-eye"></i>
                                  <a href="#/">15k</a>
                                </li>
                                <li className="loves">
                                  <i className="fa fa-heart-o"></i>
                                  <a href="#/">278</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="entry-title">
                              <a href="news-details.html">
                                And the most streamed Beatles song on Spotify
                                is..
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 d-none d-lg-block">
                    <div className="add featured-add">
                      <a href="#/">
                        <img
                          className="img-fluid"
                          src="images/post/add/add1.jpg"
                          alt="mage"
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
                    src="images/post/add/add2.jpg"
                    alt="mage"
                  />
                </a>
              </div>
              <div className="section">
                <div className="latest-news-wrapper">
                  <h1 className="section-title">Latest News</h1>
                  <div id="latest-news">
                    <OwlCarousel
                      id="home-slider"
                      className="owl-theme"
                      loop={true}
                      items={width > 500 ? 4 : 1}
                    >
                      <div className="post medium-post">
                        <div className="entry-header">
                          <div className="entry-thumbnail">
                            <img
                              className="img-fluid"
                              src="images/post/1.jpg"
                              alt="mage"
                            />
                          </div>
                          <div className="catagory politics">
                            <span>
                              <a href="#/">Politics</a>
                            </span>
                          </div>
                        </div>
                        <div className="post-content">
                          <div className="entry-meta">
                            <ul className="list-inline">
                              <li className="publish-date">
                                <a href="#/">
                                  <i className="fa fa-clock-o"></i> Nov 5, 2018
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
                              Our closest relatives aren't fans of daylight
                              saving time
                            </a>
                          </h2>
                        </div>
                      </div>
                      <div className="post medium-post">
                        <div className="entry-header">
                          <div className="entry-thumbnail">
                            <img
                              className="img-fluid"
                              src="images/post/2.jpg"
                              alt="mage"
                            />
                          </div>
                          <div className="catagory world">
                            <a href="#/">World</a>
                          </div>
                        </div>
                        <div className="post-content">
                          <div className="entry-meta">
                            <ul className="list-inline">
                              <li className="publish-date">
                                <a href="#/">
                                  <i className="fa fa-clock-o"></i> Nov 5, 2018
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
                              44 books on 44 presidents: Welcome, folks, to the
                              Adams
                            </a>
                          </h2>
                        </div>
                      </div>
                      <div className="post medium-post">
                        <div className="entry-header">
                          <div className="entry-thumbnail">
                            <img
                              className="img-fluid"
                              src="images/post/4.jpg"
                              alt="mage"
                            />
                          </div>
                          <div className="catagory health">
                            <span>
                              <a href="#/">Health</a>
                            </span>
                          </div>
                        </div>
                        <div className="post-content">
                          <div className="entry-meta">
                            <ul className="list-inline">
                              <li className="publish-date">
                                <a href="#/">
                                  <i className="fa fa-clock-o"></i> Nov 5, 2018
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
                              And the most streamed Beatles song on Spotify
                              is...
                            </a>
                          </h2>
                        </div>
                      </div>
                      <div className="post medium-post">
                        <div className="entry-header">
                          <div className="entry-thumbnail">
                            <img
                              className="img-fluid"
                              src="images/post/3.jpg"
                              alt="mage"
                            />
                          </div>
                          <div className="catagory sports">
                            <span>
                              <a href="#/">Sports</a>
                            </span>
                          </div>
                        </div>
                        <div className="post-content">
                          <div className="entry-meta">
                            <ul className="list-inline">
                              <li className="publish-date">
                                <a href="#/">
                                  <i className="fa fa-clock-o"></i> Nov 5, 2018
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
                              NBA suspends Matt Barnes for attack on Derek
                              Fisher
                            </a>
                          </h2>
                        </div>
                      </div>
                      <div className="post medium-post">
                        <div className="entry-header">
                          <div className="entry-thumbnail">
                            <img
                              className="img-fluid"
                              src="images/post/5.jpg"
                              alt="mage"
                            />
                          </div>
                          <div className="catagory politics">
                            <span>
                              <a href="#/">Politics</a>
                            </span>
                          </div>
                        </div>
                        <div className="post-content">
                          <div className="entry-meta">
                            <ul className="list-inline">
                              <li className="publish-date">
                                <a href="#/">
                                  <i className="fa fa-clock-o"></i> Nov 5, 2018
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
                              At Facebook who suggests tags for all of your
                              photos
                            </a>
                          </h2>
                        </div>
                      </div>
                      <div className="post medium-post">
                        <div className="entry-header">
                          <div className="entry-thumbnail">
                            <img
                              className="img-fluid"
                              src="images/post/6.jpg"
                              alt="mage"
                            />
                          </div>
                          <div className="catagory entertainment">
                            <span>
                              <a href="#/">Entertainment</a>
                            </span>
                          </div>
                        </div>
                        <div className="post-content">
                          <div className="entry-meta">
                            <ul className="list-inline">
                              <li className="publish-date">
                                <a href="#/">
                                  <i className="fa fa-clock-o"></i> Nov 5, 2018
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
                              Suspicion of plotting New Year's Eve attacks in
                              Belgium
                            </a>
                          </h2>
                        </div>
                      </div>
                      <div className="post medium-post">
                        <div className="entry-header">
                          <div className="entry-thumbnail">
                            <img
                              className="img-fluid"
                              src="images/post/9.jpg"
                              alt="mage"
                            />
                          </div>
                          <div className="catagory sports">
                            <span>
                              <a href="#/">Sports</a>
                            </span>
                          </div>
                        </div>
                        <div className="post-content">
                          <div className="entry-meta">
                            <ul className="list-inline">
                              <li className="publish-date">
                                <a href="#/">
                                  <i className="fa fa-clock-o"></i> Nov 5, 2018
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
                              Someone has calculated the total cost of saving
                              Matt
                            </a>
                          </h2>
                        </div>
                      </div>
                      <div className="post medium-post">
                        <div className="entry-header">
                          <div className="entry-thumbnail">
                            <img
                              className="img-fluid"
                              src="images/post/8.jpg"
                              alt="mage"
                            />
                          </div>
                          <div className="catagory politics">
                            <span>
                              <a href="#/">Politics</a>
                            </span>
                          </div>
                        </div>
                        <div className="post-content">
                          <div className="entry-meta">
                            <ul className="list-inline">
                              <li className="publish-date">
                                <a href="#/">
                                  <i className="fa fa-clock-o"></i> Nov 5, 2018
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
                              Homemade lightsaber made with laser can cut wires
                            </a>
                          </h2>
                        </div>
                      </div>
                      <div className="post medium-post">
                        <div className="entry-header">
                          <div className="entry-thumbnail">
                            <img
                              className="img-fluid"
                              src="images/post/10.jpg"
                              alt="mage"
                            />
                          </div>
                          <div className="catagory entertainment">
                            <span>
                              <a href="#/">Entertainment</a>
                            </span>
                          </div>
                        </div>
                        <div className="post-content">
                          <div className="entry-meta">
                            <ul className="list-inline">
                              <li className="publish-date">
                                <a href="#/">
                                  <i className="fa fa-clock-o"></i> Nov 5, 2018
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
                              Our closest relatives aren't fans of daylight
                              saving time
                            </a>
                          </h2>
                        </div>
                      </div>
                    </OwlCarousel>
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
                              <h1 className="section-title title">Worlds</h1>
                              <div className="world-nav cat-menu">
                                <ul className="list-inline">
                                  <li className="active">
                                    <a href="listing.html">Us</a>
                                  </li>
                                  <li>
                                    <a href="listing.html">Crime</a>
                                  </li>
                                  <li>
                                    <a href="listing.html">Local</a>
                                  </li>
                                  <li>
                                    <a href="listing.html">Offbet</a>
                                  </li>
                                  <li>
                                    <a href="listing.html">Openion</a>
                                  </li>
                                  <li>
                                    <a href="listing.html">See All</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/w1.jpg"
                                      alt="mage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018
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
                                      <li className="comments">
                                        <i className="fa fa-comment-o"></i>
                                        <a href="#/">189</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <h2 className="entry-title">
                                    <a href="news-details.html">
                                      We Are Seeing The Effects Of The Minimum
                                      Wage Rise In San Francisco
                                    </a>
                                  </h2>
                                  <div className="entry-content">
                                    <p>
                                      Text of the printing and typesetting
                                      industry orem Ipsum has been the industry
                                      standard dummy text ever since the when an
                                      unknown printer took a galley of type and
                                      scrambled it to make a type specimen book
                                      ......
                                    </p>
                                  </div>
                                </div>
                                <div className="list-post">
                                  <ul>
                                    <li>
                                      <a href="#/">
                                        Detroit natives wary as recovery
                                        threatens to push them out
                                        <i className="fa fa-angle-right"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#/">
                                        NBA impersonator does incredible Curry &
                                        Green impressions
                                        <i className="fa fa-angle-right"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#/">
                                        Cellular carriers could gain some
                                        surprising competitors
                                        <i className="fa fa-angle-right"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="section technology-news">
                              <h1 className="section-title">Technology</h1>
                              <div className="cat-menu">
                                <a href="listing.html">See all</a>
                              </div>
                              <div className="row">
                                <div className="col-lg-8">
                                  <div className="post">
                                    <div className="entry-header">
                                      <div className="entry-thumbnail">
                                        <img
                                          className="img-fluid"
                                          src="images/post/t1.jpg"
                                          alt="mage"
                                        />
                                      </div>
                                    </div>
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="publish-date">
                                            <a href="#/">
                                              <i className="fa fa-clock-o"></i>{" "}
                                              Nov 15, 2018
                                            </a>
                                          </li>
                                          <li className="views">
                                            <a href="#/">
                                              <i className="fa fa-eye"></i>15k
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
                                        <a href="news-details.html">
                                          We Are Seeing The Effects Of The
                                          Minimum Wage Rise In San Francisco
                                        </a>
                                      </h2>
                                      <div className="entry-content">
                                        <p>
                                          Text of the printing and typesetting
                                          industry orem Ipsum has been the
                                          industry standard dummy text ever
                                          since....
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="post small-post">
                                    <div className="entry-header">
                                      <div className="entry-thumbnail">
                                        <img
                                          className="img-fluid"
                                          src="images/post/t2.jpg"
                                          alt="mage"
                                        />
                                      </div>
                                    </div>
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="publish-date">
                                            <a href="#/">
                                              <i className="fa fa-clock-o"></i>{" "}
                                              Nov 15, 2018
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          Samsung Pay will support online shop
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="post small-post">
                                    <div className="entry-header">
                                      <div className="entry-thumbnail">
                                        <img
                                          className="img-fluid"
                                          src="images/post/t3.jpg"
                                          alt="mage"
                                        />
                                      </div>
                                    </div>
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="publish-date">
                                            <a href="#/">
                                              <i className="fa fa-clock-o"></i>{" "}
                                              Nov 15, 2018
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          Why is the media so afraid of
                                          Facebook?
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="section add inner-add">
                              <a href="#/">
                                <img
                                  className="img-fluid"
                                  src="images/post/add/add4.jpg"
                                  alt="mage"
                                />
                              </a>
                            </div>
                            <div className="section photo-gallery">
                              <h1 className="section-title title">
                                Photo Gallery
                              </h1>
                              <div className="cat-menu">
                                <a href="listing.html">See all</a>
                              </div>
                              <div
                                id="photo-gallery"
                                className="carousel slide carousel-fade post"
                                data-ride="carousel"
                              >
                                <div className="carousel-inner">
                                  <div className="carousel-item active">
                                    <a href="#/">
                                      <img
                                        className="img-fluid"
                                        src="images/gallery/1.jpg"
                                        alt="mage"
                                      />
                                    </a>
                                    <h2>
                                      <a href="#/">
                                        No one can agree on how a dog is
                                        supposed to wear human pants
                                      </a>
                                    </h2>
                                  </div>
                                  <div className="carousel-item">
                                    <a href="#/">
                                      <img
                                        className="img-fluid"
                                        src="images/gallery/1.jpg"
                                        alt="mage"
                                      />
                                    </a>
                                    <h2>
                                      <a href="#/">
                                        500-pound elephant seal causes traffic
                                        jam while repeatedly
                                      </a>
                                    </h2>
                                  </div>
                                  <div className="carousel-item">
                                    <a href="#/">
                                      <img
                                        className="img-fluid"
                                        src="images/gallery/1.jpg"
                                        alt="mage"
                                      />
                                    </a>
                                    <h2>
                                      <a href="#/">
                                        I rode a Metroboard electric skateboard
                                        30 miles around Manhattan
                                      </a>
                                    </h2>
                                  </div>
                                  <div className="carousel-item">
                                    <a href="#/">
                                      <img
                                        className="img-fluid"
                                        src="images/gallery/4.jpg"
                                        alt="mage"
                                      />
                                    </a>
                                    <h2>
                                      <a href="#/">
                                        The super creepy side of the Internet of
                                        Things and smart homes
                                      </a>
                                    </h2>
                                  </div>
                                  <div className="carousel-item">
                                    <a href="#/">
                                      <img
                                        className="img-fluid"
                                        src="images/gallery/5.jpg"
                                        alt="mage"
                                      />
                                    </a>
                                    <h2>
                                      <a href="#/">
                                        Mirum est notare quam littera gothica,
                                        quam nunc putamus parum claram
                                      </a>
                                    </h2>
                                  </div>
                                  <div className="carousel-item">
                                    <a href="#/">
                                      <img
                                        className="img-fluid"
                                        src="images/gallery/6.jpg"
                                        alt="mage"
                                      />
                                    </a>
                                    <h2>
                                      <a href="#/">
                                        Someone has calculated the total cost of
                                        saving Matt Damon
                                      </a>
                                    </h2>
                                  </div>
                                  <div className="carousel-item">
                                    <a href="#/">
                                      <img
                                        className="img-fluid"
                                        src="images/gallery/7.jpg"
                                        alt="mage"
                                      />
                                    </a>
                                    <h2>
                                      <a href="#/">
                                        Wet wedding: Yorkshire couple dons
                                        wellies to tie the knot in flooded town
                                      </a>
                                    </h2>
                                  </div>
                                  <div className="carousel-item">
                                    <a href="#/">
                                      <img
                                        className="img-fluid"
                                        src="images/gallery/8.jpg"
                                        alt="mage"
                                      />
                                    </a>
                                    <h2>
                                      <a href="#/">
                                        This dog is so stoked for his Christmas
                                        present he can hardly stand it
                                      </a>
                                    </h2>
                                  </div>
                                  <div className="carousel-item">
                                    <a href="#/">
                                      <img
                                        className="img-fluid"
                                        src="images/gallery/9.jpg"
                                        alt="mage"
                                      />
                                    </a>
                                    <h2>
                                      <a href="#/">
                                        The world's richest people lost $19
                                        billion in 2018, but Jeff Bezos
                                      </a>
                                    </h2>
                                  </div>
                                </div>
                                <ol className="gallery-indicators carousel-indicators">
                                  <li
                                    data-target="#photo-gallery"
                                    data-slide-to="0"
                                    className="active"
                                  >
                                    <img
                                      className="img-fluid"
                                      src="images/gallery/thumb1.png"
                                      alt="mage"
                                    />
                                  </li>
                                  <li
                                    data-target="#photo-gallery"
                                    data-slide-to="1"
                                  >
                                    <img
                                      className="img-fluid"
                                      src="images/gallery/thumb2.png"
                                      alt="mage"
                                    />
                                  </li>
                                  <li
                                    data-target="#photo-gallery"
                                    data-slide-to="2"
                                  >
                                    <img
                                      className="img-fluid"
                                      src="images/gallery/thumb3.png"
                                      alt="mage"
                                    />
                                  </li>
                                  <li
                                    data-target="#photo-gallery"
                                    data-slide-to="3"
                                  >
                                    <img
                                      className="img-fluid"
                                      src="images/gallery/thumb4.png"
                                      alt="mage"
                                    />
                                  </li>
                                  <li
                                    data-target="#photo-gallery"
                                    data-slide-to="4"
                                  >
                                    <img
                                      className="img-fluid"
                                      src="images/gallery/thumb5.png"
                                      alt="mage"
                                    />
                                  </li>
                                  <li
                                    data-target="#photo-gallery"
                                    data-slide-to="5"
                                  >
                                    <img
                                      className="img-fluid"
                                      src="images/gallery/thumb6.png"
                                      alt="mage"
                                    />
                                  </li>
                                  <li
                                    data-target="#photo-gallery"
                                    data-slide-to="6"
                                  >
                                    <img
                                      className="img-fluid"
                                      src="images/gallery/thumb7.png"
                                      alt="mage"
                                    />
                                  </li>
                                  <li
                                    data-target="#photo-gallery"
                                    data-slide-to="7"
                                  >
                                    <img
                                      className="img-fluid"
                                      src="images/gallery/thumb8.png"
                                      alt="mage"
                                    />
                                  </li>
                                  <li
                                    data-target="#photo-gallery"
                                    data-slide-to="8"
                                  >
                                    <img
                                      className="img-fluid"
                                      src="images/gallery/thumb9.png"
                                      alt="mage"
                                    />
                                  </li>
                                </ol>
                                <div className="gallery-turner">
                                  <a
                                    className="left-photo"
                                    href="#photo-gallery"
                                    role="button"
                                    data-slide="prev"
                                  >
                                    <i className="fa fa-angle-left"></i>
                                  </a>
                                  <a
                                    className="right-photo"
                                    href="#photo-gallery"
                                    role="button"
                                    data-slide="next"
                                  >
                                    <i className="fa fa-angle-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="section lifestyle-section">
                              <h1 className="section-title">Life Style</h1>
                              <div className="cat-menu">
                                <a href="listing-life-style.html">See all</a>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="post medium-post">
                                    <div className="entry-header">
                                      <div className="entry-thumbnail">
                                        <img
                                          className="img-fluid"
                                          src="images/post/lifestyle/1.jpg"
                                          alt="mage"
                                        />
                                      </div>
                                    </div>
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="publish-date">
                                            <a href="#/">
                                              <i className="fa fa-clock-o"></i>{" "}
                                              Nov 15, 2018
                                            </a>
                                          </li>
                                          <li className="views">
                                            <a href="#/">
                                              <i className="fa fa-eye"></i>15k
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
                                        <a href="news-details.html">
                                          Naomi & Liev hit the beach, plus more
                                          new celeb pics
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="post medium-post">
                                    <div className="entry-header">
                                      <div className="entry-thumbnail">
                                        <img
                                          className="img-fluid"
                                          src="images/post/lifestyle/2.jpg"
                                          alt="mage"
                                        />
                                      </div>
                                    </div>
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="publish-date">
                                            <a href="#/">
                                              <i className="fa fa-clock-o"></i>{" "}
                                              Nov 15, 2018
                                            </a>
                                          </li>
                                          <li className="views">
                                            <a href="#/">
                                              <i className="fa fa-eye"></i>15k
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
                                        <a href="news-details.html">
                                          18 Great Performances in Mediocre
                                          Movies in 2018
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="post medium-post">
                                    <div className="entry-header">
                                      <div className="entry-thumbnail">
                                        <img
                                          className="img-fluid"
                                          src="images/post/lifestyle/3.jpg"
                                          alt="mage"
                                        />
                                      </div>
                                    </div>
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="publish-date">
                                            <a href="#/">
                                              <i className="fa fa-clock-o"></i>{" "}
                                              Nov 15, 2018
                                            </a>
                                          </li>
                                          <li className="views">
                                            <a href="#/">
                                              <i className="fa fa-eye"></i>15k
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
                                        <a href="news-details.html">
                                          How the stars celebrated Christmas on
                                          Instagram
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="post medium-post">
                                    <div className="entry-header">
                                      <div className="entry-thumbnail">
                                        <img
                                          className="img-fluid"
                                          src="images/post/lifestyle/4.jpg"
                                          alt="mage"
                                        />
                                      </div>
                                    </div>
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="publish-date">
                                            <a href="#/">
                                              <i className="fa fa-clock-o"></i>{" "}
                                              Nov 15, 2018
                                            </a>
                                          </li>
                                          <li className="views">
                                            <a href="#/">
                                              <i className="fa fa-eye"></i>15k
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
                                        <a href="news-details.html">
                                          Celeb Role Models You Can Feel Good
                                          About
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="section health-section">
                              <h1 className="section-title">Health</h1>
                              <div className="cat-menu">
                                <a href="listing-life-style.html">See all</a>
                              </div>
                              <div className="health-feature">
                                <div className="post">
                                  <div className="entry-header">
                                    <div className="entry-thumbnail">
                                      <img
                                        className="img-fluid"
                                        src="images/post/health/1.jpg"
                                        alt="mage"
                                      />
                                    </div>
                                  </div>
                                  <div className="post-content">
                                    <div className="entry-meta">
                                      <ul className="list-inline">
                                        <li className="publish-date">
                                          <a href="#/">
                                            <i className="fa fa-clock-o"></i>{" "}
                                            Nov 15, 2018
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
                                        HealthNews Salutes: Direct Relief
                                        International
                                      </a>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="post small-post">
                                    <div className="entry-header">
                                      <div className="entry-thumbnail">
                                        <img
                                          className="img-fluid"
                                          src="images/post/health/2.jpg"
                                          alt="mage"
                                        />
                                      </div>
                                    </div>
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="publish-date">
                                            <a href="#/">
                                              <i className="fa fa-clock-o"></i>{" "}
                                              Nov 15, 2018
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          EBreakfast Cereal: The Marketing of
                                          Sugar
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="post small-post">
                                    <div className="entry-header">
                                      <div className="entry-thumbnail">
                                        <img
                                          className="img-fluid"
                                          src="images/post/health/3.jpg"
                                          alt="mage"
                                        />
                                      </div>
                                    </div>
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="publish-date">
                                            <a href="#/">
                                              <i className="fa fa-clock-o"></i>{" "}
                                              Nov 15, 2018
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          Giving Holiday Thanks for Pumpkins
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="post small-post">
                                    <div className="entry-header">
                                      <div className="entry-thumbnail">
                                        <img
                                          className="img-fluid"
                                          src="images/post/health/4.jpg"
                                          alt="mage"
                                        />
                                      </div>
                                    </div>
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="publish-date">
                                            <a href="#/">
                                              <i className="fa fa-clock-o"></i>{" "}
                                              Nov 15, 2018
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          Aerobic Exercise: The Best Weapon
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="post small-post">
                                    <div className="entry-header">
                                      <div className="entry-thumbnail">
                                        <img
                                          className="img-fluid"
                                          src="images/post/health/5.jpg"
                                          alt="mage"
                                        />
                                      </div>
                                    </div>
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="publish-date">
                                            <a href="#/">
                                              <i className="fa fa-clock-o"></i>{" "}
                                              Nov 15, 2018
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          Minimum drink price 'may breach EU
                                          law'
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 tr-sticky">
                          <div className="middle-content theiaStickySidebar">
                            <div className="section sports-section">
                              <h1 className="section-title title">Sports</h1>
                              <div className="cat-menu">
                                <a href="listing-sports.html">See all</a>
                              </div>
                              <div className="football-result post">
                                <div className="featured-result">
                                  <h2 className="league-name">
                                    Premier League
                                  </h2>
                                  <div className="row">
                                    <div className="col-4">
                                      <img
                                        className="img-fluid"
                                        src="images/gallery/league1.png"
                                        alt="mage"
                                      />
                                      <span className="match-result">3</span>
                                    </div>
                                    <div className="col-4">
                                      <span className="verses">VS</span>
                                      <span className="match-time">90:00</span>
                                    </div>
                                    <div className="col-4">
                                      <img
                                        className="img-fluid"
                                        src="images/gallery/league2.png"
                                        alt="mage"
                                      />
                                      <span className="match-result">0</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="league-result">
                                  <ul>
                                    <li>
                                      <div className="row">
                                        <div className="col-4">
                                          <img
                                            className="img-fluid"
                                            src="images/gallery/team1.png"
                                            alt="mage"
                                          />
                                          <span className="team-name">Bra</span>
                                        </div>
                                        <div className="col-4">
                                          <span className="match-result">
                                            3-2
                                          </span>
                                        </div>
                                        <div className="col-4">
                                          <span className="team-name">Arg</span>
                                          <img
                                            className="img-fluid"
                                            src="images/gallery/team2.png"
                                            alt="mage"
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="row">
                                        <div className="col-4">
                                          <img
                                            className="img-fluid"
                                            src="images/gallery/team2.png"
                                            alt="mage"
                                          />
                                          <span className="team-name">Arg</span>
                                        </div>
                                        <div className="col-4">
                                          <span className="match-result">
                                            5-4
                                          </span>
                                        </div>
                                        <div className="col-4">
                                          <span className="team-name">Bra</span>
                                          <img
                                            className="img-fluid"
                                            src="images/gallery/team1.png"
                                            alt="mage"
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="row">
                                        <div className="col-4">
                                          <img
                                            className="img-fluid"
                                            src="images/gallery/team1.png"
                                            alt="mage"
                                          />
                                          <span className="team-name">Bra</span>
                                        </div>
                                        <div className="col-4">
                                          <span className="match-result">
                                            1-2
                                          </span>
                                        </div>
                                        <div className="col-4">
                                          <span className="team-name">Arg</span>
                                          <img
                                            className="img-fluid"
                                            src="images/gallery/team2.png"
                                            alt="mage"
                                          />
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/others/sports1.jpg"
                                      alt="mage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018
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
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/sports/2.jpg"
                                      alt="mage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018
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
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/sports/1.jpg"
                                      alt="mage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018
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
                            <div className="section">
                              <div className="add inner-add">
                                <a href="#/">
                                  <img
                                    className="img-fluid"
                                    src="images/post/add/add5.jpg"
                                    alt="mage"
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="section video-section">
                              <h1 className="section-title title">
                                Watch Video
                              </h1>
                              <div className="cat-menu">
                                <a href="listing.html">See all</a>
                              </div>
                              <div className="post video-post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail embed-responsive embed-responsive-16by9">
                                    <iframe
                                      className="embed-responsive-item"
                                      src="https://www.youtube.com/embed/-WlqrkXImsk"
                                      allowFullScreen
                                      title="hierty"
                                    ></iframe>
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="video-catagory">
                                    <a href="#/">World</a>
                                  </div>
                                  <h2 className="entry-title">
                                    <a href="news-details.html">
                                      Our closest relatives aren't fans of
                                      daylight saving time
                                    </a>
                                  </h2>
                                </div>
                              </div>
                              <div className="video-post-list">
                                <ul>
                                  <li>
                                    <div className="post video-post small-post">
                                      <div className="entry-header">
                                        <div className="entry-thumbnail embed-responsive embed-responsive-16by9">
                                          <iframe
                                            className="embed-responsive-item"
                                            src="https://www.youtube.com/embed/-WlqrkXImsk"
                                            allowFullScreen
                                            title="hgsdhjgfhdjg"
                                          ></iframe>
                                        </div>
                                      </div>
                                      <div className="post-content">
                                        <div className="video-catagory">
                                          <a href="#/">World</a>
                                        </div>
                                        <h2 className="entry-title">
                                          <a href="news-details.html">
                                            Our closest relatives aren't fans of
                                            daylight saving time
                                          </a>
                                        </h2>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="post video-post small-post">
                                      <div className="entry-header">
                                        <div className="entry-thumbnail embed-responsive embed-responsive-16by9">
                                          <iframe
                                            className="embed-responsive-item"
                                            src="https://www.youtube.com/embed/-WlqrkXImsk"
                                            allowFullScreen
                                            title="hjdgbsfjhdsbh"
                                          ></iframe>
                                        </div>
                                      </div>
                                      <div className="post-content">
                                        <div className="video-catagory">
                                          <a href="#/">Business</a>
                                        </div>
                                        <h2 className="entry-title">
                                          <a href="news-details.html">
                                            3 students arrested after
                                            body-slamming principal
                                          </a>
                                        </h2>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="post video-post small-post">
                                      <div className="entry-header">
                                        <div className="entry-thumbnail embed-responsive embed-responsive-16by9">
                                          <iframe
                                            className="embed-responsive-item"
                                            src="https://www.youtube.com/embed/-WlqrkXImsk"
                                            allowFullScreen
                                            title="jhgdsfchjabdsjb"
                                          ></iframe>
                                        </div>
                                      </div>
                                      <div className="post-content">
                                        <div className="video-catagory">
                                          <a href="#/">World</a>
                                        </div>
                                        <h2 className="entry-title">
                                          <a href="news-details.html">
                                            Our closest relatives aren't fans of
                                            daylight saving time
                                          </a>
                                        </h2>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="section business-section">
                              <h1 className="section-title">Business</h1>
                              <div className="cat-menu">
                                <a href="listing.html">See all</a>
                              </div>
                              <div className="post medium-post">
                                <div className="entry-header">
                                  <div className="entry-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src="images/post/business/4.jpg"
                                      alt="mage"
                                    />
                                  </div>
                                </div>
                                <div className="post-content">
                                  <div className="entry-meta">
                                    <ul className="list-inline">
                                      <li className="publish-date">
                                        <a href="#/">
                                          <i className="fa fa-clock-o"></i> Nov
                                          15, 2018
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
                                      We are seeing the effects of the minimum
                                      wage san francisco
                                    </a>
                                  </h2>
                                </div>
                              </div>
                              <div className="stock-exchange text-center">
                                <div className="stock-exchange-zone">
                                  <a href="#/">
                                    <img
                                      className="img-fluid"
                                      src="images/gallery/stock.png"
                                      alt="mage"
                                    />
                                  </a>
                                </div>
                                <div className="stock-header">
                                  <div className="row">
                                    <div className="col-4">Name</div>
                                    <div className="col-4">Price</div>
                                    <div className="col-4">%+/-</div>
                                  </div>
                                </div>
                                <div className="stock-reports">
                                  <div className="com-details">
                                    <div className="row">
                                      <div className="col-4 com-name">BP</div>
                                      <div className="col-4 current-price">
                                        388.65
                                      </div>
                                      <div className="col-4 current-result">
                                        +0.58 <i className="fa fa-caret-up"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="com-details">
                                    <div className="row">
                                      <div className="col-4 com-name">
                                        Royal Ba...
                                      </div>
                                      <div className="col-4 current-price">
                                        318.25
                                      </div>
                                      <div className="col-4 current-result">
                                        +0.32 <i className="fa fa-caret-up"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="com-details">
                                    <div className="row">
                                      <div className="col-4 com-name">
                                        Inmarsat
                                      </div>
                                      <div className="col-4 current-price">
                                        214.19
                                      </div>
                                      <div className="col-4 current-result">
                                        -0.43{" "}
                                        <i className="fa fa-caret-down"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
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
                              src="images/post/add/add3.jpg"
                              alt="mage"
                            />
                          </a>
                        </div>
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
                                    alt="mage"
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
                                    alt="mage"
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
                                    alt="mage"
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
                                    alt="mage"
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
                                    alt="mage"
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
                                    alt="mage"
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
                                    alt="mage"
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
                                    alt="mage"
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
                                    alt="mage"
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
                      <div className="widget">
                        <div className="add">
                          <a href="#/">
                            <img
                              className="img-fluid"
                              src="images/post/add/add6.jpg"
                              alt="mage"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="widget weather-widget">
                        <div id="weather-widget">
                          <span className="weather-icon">
                            <img
                              src="images/others/weather.png"
                              alt="Icon"
                              className="img-fluid"
                            />
                          </span>
                          <span className="temp"></span>
                          <span className="weather-humidity">87%</span>
                          <span className="weather-wind">3.6 MPH</span>
                        </div>
                      </div>
                      <div className="widget meta-widget">
                        <h1 className="section-title title">Widget</h1>
                        <div className="meta-tab">
                          <ul
                            className="nav nav-tabs nav-justified"
                            role="tablist"
                          >
                            <li role="presentation">
                              <a href="#author" data-toggle="tab">
                                <i className="fa fa-user"></i>Authors
                              </a>
                            </li>
                            <li role="presentation" className="active">
                              <a href="#comment" data-toggle="tab">
                                <i className="fa fa-comment-o"></i>Comments
                              </a>
                            </li>
                            <li role="presentation">
                              <a href="#tag" data-toggle="tab">
                                <i className="fa fa-inbox"></i>Tag
                              </a>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div
                              role="tabpanel"
                              className="tab-pane"
                              id="author"
                            >
                              <ul className="authors-post">
                                <li>
                                  <div className="post small-post">
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="post-author">
                                            <a href="#/">Jhon Due,</a>
                                          </li>
                                          <li className="publish-date">
                                            <a href="#/">Dec 11, 2018 </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          3 students arrested after
                                          body-slamming principal
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="post small-post">
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="post-author">
                                            <a href="#/">Matt Cloey</a>
                                          </li>
                                          <li className="publish-date">
                                            <a href="#/">Dec 15, 2018 </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          3 students arrested after
                                          body-slamming principal
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="post small-post">
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="post-author">
                                            <a href="#/">KOlony Wispe</a>
                                          </li>
                                          <li className="publish-date">
                                            <a href="#/">Nov 25, 2018 </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          3 students arrested after
                                          body-slamming principal
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="post small-post">
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="post-author">
                                            <a href="#/">Matt Cloey</a>,
                                          </li>
                                          <li className="publish-date">
                                            <a href="#/">Nov 5, 2018 </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          3 students arrested after
                                          body-slamming principal
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="post small-post">
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="post-author">
                                            <a href="#/">Mike Tinson</a>,
                                          </li>
                                          <li className="publish-date">
                                            <a href="#/">Nov 18, 2018 </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          3 students arrested after
                                          body-slamming principal
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div
                              role="tabpanel"
                              className="tab-pane active show"
                              id="comment"
                            >
                              <ul className="comment-list">
                                <li>
                                  <div className="post small-post">
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="post-author">
                                            <a href="#/">Matt Cloey ,</a>
                                          </li>
                                          <li className="publish-date">
                                            <a href="#/">Dec 15, 2018 </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          3 students arrested after
                                          body-slamming principal
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="post small-post">
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="post-author">
                                            <a href="#/">Jhon Due ,</a>
                                          </li>
                                          <li className="publish-date">
                                            <a href="#/">Dec 11, 2018 </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          3 students arrested after
                                          body-slamming principal
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="post small-post">
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="post-author">
                                            <a href="#/">KOlony Wispe ,</a>
                                          </li>
                                          <li className="publish-date">
                                            <a href="#/">Nov 25, 2018 </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          3 students arrested after
                                          body-slamming principal
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="post small-post">
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="post-author">
                                            <a href="#/">KOlony Wispe</a>
                                          </li>
                                          <li className="publish-date">
                                            <a href="#/">Nov 25, 2018 </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          3 students arrested after
                                          body-slamming principal
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="post small-post">
                                    <div className="post-content">
                                      <div className="entry-meta">
                                        <ul className="list-inline">
                                          <li className="post-author">
                                            <a href="#/">Mike Tinson ,</a>
                                          </li>
                                          <li className="publish-date">
                                            <a href="#/">Nov 18, 2018 </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <h2 className="entry-title">
                                        <a href="news-details.html">
                                          3 students arrested after
                                          body-slamming principal
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="tag">
                              <ul className="list-inline tag-cloud">
                                <li>
                                  <a href="#/">Business</a>
                                </li>
                                <li>
                                  <a href="#/">Creative</a>
                                </li>
                                <li>
                                  <a href="#/">Marketing</a>
                                </li>
                                <li>
                                  <a href="#/">Bloging</a>
                                </li>
                                <li>
                                  <a href="#/">Science</a>
                                </li>
                                <li>
                                  <a href="#/">Multipurpose</a>
                                </li>
                                <li>
                                  <a href="#/">Graphics</a>
                                </li>
                                <li>
                                  <a href="#/">Art</a>
                                </li>
                                <li>
                                  <a href="#/">Politics</a>
                                </li>
                                <li>
                                  <a href="#/">News</a>
                                </li>
                                <li>
                                  <a href="#/">Sports</a>
                                </li>
                                <li>
                                  <a href="#/">World</a>
                                </li>
                                <li>
                                  <a href="#/">Lifestyle</a>
                                </li>
                                <li>
                                  <a href="#/">Health</a>
                                </li>
                                <li>
                                  <a href="#/">Environment</a>
                                </li>
                                <li>
                                  <a href="#/">Entertainment</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default NewOne;
