import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import logo from "../assets/www.biotechpackages.com/logo.png";
import searchIcon from '../assets/www.biotechpackages.com/images/search.png';
import Job from "../assets/www.biotechpackages.com/images/job.png";
import mixImg from "../assets/www.biotechpackages.com/images/icons/mix_img.png";
import Mix3 from "../assets/www.biotechpackages.com/images/icons/mix3.png";
import Careericon from "../assets/www.biotechpackages.com/images/icons/careericon.png";
import Letter from "../assets/www.biotechpackages.com/images/icons/letter.png";
import Hand from "../assets/www.biotechpackages.com/images/icons/hand.png";
import Career9 from "../assets/www.biotechpackages.com/images/icons/9.png";
import Career10 from "../assets/www.biotechpackages.com/images/icons/10.png";
import Career11 from "../assets/www.biotechpackages.com/images/icons/11.png";
import Career12 from "../assets/www.biotechpackages.com/images/icons/12.png";
import Career13 from "../assets/www.biotechpackages.com/images/icons/13.png";
import Career14 from "../assets/www.biotechpackages.com/images/icons/14.png";
import Career15 from "../assets/www.biotechpackages.com/images/icons/15.png";
import Career16 from "../assets/www.biotechpackages.com/images/icons/16.png";

const graphicdesignerbuilder = () => {
  return (
    <>
      
        <div className="main_headers">
          <div className="main_data">
            <div className="main_header">
              <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="container">
                    <div className="main_header_com">
                      <Link to="/">
                        <img
                          alt
                          loading="lazy"
                          width={114}
                          height={85}
                          decoding="async"
                          data-nimg={1}
                          className="logo"
                          src={logo}
                          style={{}}
                        />
                      </Link>
                      <button
                        aria-controls="navbarScroll"
                        type="button"
                        aria-label="Toggle navigation"
                        className="navbar-toggler collapsed"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>
                      <div
                        className="navbar-collapse collapse"
                        id="navbarScroll"
                      >
                        <div
                          className="m-auto my-2 my-lg-0 false navbar-nav navbar-nav-scroll"
                          style={{ maxHeight: 100 }}
                        >
                          <Link
                            className=" "
                            to="/Custom"
                            style={{ color: "black" }}
                          >
                            Custom Packaging
                          </Link>
                          <Link
                            className=" "
                            to="/Sticker"
                            style={{ color: "black" }}
                          >
                            Stickers &amp; Labels
                          </Link>
                          <Link
                            className=" "
                            to="/About"
                            style={{ color: "black" }}
                          >
                            About
                          </Link>
                          <Link
                            className=" "
                            to="/career"
                            style={{ color: "black" }}
                          >
                            Careers
                          </Link>
                          <Link
                            className=" "
                            to="/Contacts"
                            style={{ color: "black" }}
                          >
                            Contact
                          </Link>
                        </div>
                      </div>
                      <div className="search_fields false">
                        <div className="search_icon">
                          <img
                            alt="search"
                            loading="lazy"
                            width={30}
                            height={30}
                            decoding="async"
                            data-nimg={1}
                            src={searchIcon}
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <Link to="https://api.whatsapp.com/send?phone=+923467133632&amp;text=Salam.">
                      <button type="button" className="call_us btn btn-primary">
                        Contact Us
                      </button>
                    </Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="hide">
                <div className="hover_search">
                  <div className="container">
                    <div className="search_item">
                      <input
                        type="text"
                        placeholder="Search your product"
                        defaultValue
                      />
                      <div className="srach_data" style={{ display: "flex" }} />
                      <img
                        alt="search"
                        loading="lazy"
                        width={55}
                        height={55}
                        decoding="async"
                        data-nimg={1}
                        src="/images/blackarrow.png"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="responsive_header index1">
              <div className="topbar">
                <div className="logo">
                  <Link to="/">
                    <img
                      alt="logo"
                      loading="lazy"
                      width={64}
                      height={48}
                      decoding="async"
                      data-nimg={1}
                      src="/images/logoblack.png"
                      style={{ color: "transparent" }}
                    />
                  </Link>
                </div>
                <div className="icons">
                  <div>
                    <img
                      alt="search"
                      loading="lazy"
                      width={27}
                      height={27}
                      decoding="async"
                      data-nimg={1}
                      src="/images/search.png"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div>
                    <img
                      alt="menu"
                      loading="lazy"
                      width={27}
                      height={16}
                      decoding="async"
                      data-nimg={1}
                      src="/images/icons/menu.png"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hide_res">
            <div className="hover_search2">
              <div className="container">
                <div className="search_item">
                  <input
                    type="text"
                    placeholder="Search your product"
                    defaultValue
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hide_res2">
            <div className="topbar topbar3">
              <div className="logo" />
              <div className="icons">
                <div />
                <div />
              </div>
            </div>
            <div className="hover_search3">
              <div className="search_item">
                <div className="container">
                  <input type="text" placeholder="Search your product" />
                  <img
                    alt="search"
                    loading="lazy"
                    width={30}
                    height={30}
                    decoding="async"
                    data-nimg={1}
                    src="/images/blackarrow.png"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mobile_navigation hidden">
            <div>
              <div className="topbar topbar3">
                <div className="logo">
                  <Link to="/">
                    <img
                      alt="logo"
                      loading="lazy"
                      width={64}
                      height={48}
                      decoding="async"
                      data-nimg={1}
                      src="/images/B_logo.png"
                      style={{ color: "transparent" }}
                    />
                  </Link>
                </div>
                <div className="icons">
                  <div>
                    <img
                      alt="menu"
                      loading="lazy"
                      width={16}
                      height={16}
                      decoding="async"
                      data-nimg={1}
                      src="/images/icons/cross.png"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div className="menu">
                <div>
                  <h4>
                    Need Help{" "}
                    <span>
                      <img
                        alt
                        loading="lazy"
                        width={10}
                        height={10}
                        decoding="async"
                        data-nimg={1}
                        src="/images/icons/question.svg"
                        style={{ color: "transparent" }}
                      />
                    </span>
                  </h4>
                  <hr />
                  <ul>
                    <Link
                      className="non_active"
                      to="/category/packaging-custom-boxes"
                    >
                      <div>Custom Packaging</div>
                    </Link>
                    <Link
                      className="non_active"
                      to="/category/stickerandlabels-labels"
                    >
                      <div>Stickers &amp; Labels</div>
                    </Link>
                    <Link className="non_active" to="/about-us">
                      <div>About</div>
                    </Link>
                    <Link className="non_active" to="/career">
                      <div>Careers</div>
                    </Link>
                    <Link className="non_active" to="/contacts">
                      <div>Contact</div>
                    </Link>
                  </ul>
                  <hr />
                </div>
                <div className="Quick_links">
                  <h4>Quick Links</h4>
                  <div>
                    <div className="Links">
                      <h3>Packaging</h3>
                      <h3>Stickers</h3>
                    </div>
                  </div>
                </div>
                <div className="social_links">
                  <div className="social_icons">
                    <Link to="/job/[id]">
                      <div className="icons_fb">
                        <img
                          alt="fb_icon"
                          loading="lazy"
                          width="9.28"
                          height="17.24"
                          decoding="async"
                          data-nimg={1}
                          src="/images/icons/fb.png"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </Link>
                    <Link to="/job/[id]">
                      <div className="icons_insta">
                        <img
                          alt="insta_icon"
                          loading="lazy"
                          width="14.43"
                          height="14.43"
                          decoding="async"
                          data-nimg={1}
                          src="/images/icons/insta.png"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </Link>
                    <Link to="/job/[id]">
                      <div className="icons_linked">
                        <img
                          alt="linkedIn_icon"
                          loading="lazy"
                          width="12.84"
                          height="12.84"
                          decoding="async"
                          data-nimg={1}
                          src="/images/icons/linked.png"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Vacancy">
          <div className="container">
            <div>
              <div className="heading">
                <h5>Job Vacancy</h5>
                <h2>Graphic Designer</h2>
              </div>
              <div className="tab">
                <div style={{ display: "flex", gap: 8 }}>
                  <img
                    src={Careericon}
                    alt="ss"
                    style={{ width: 12, height: 20 }}
                  />
                  <p>
                    <span style={{ fontWeight: 700 }}>Location : </span>
                    Multan,Pakistan
                  </p>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <img src={Letter} alt style={{ width: 26, height: 26 }} />
                  <p>
                    <span style={{ fontWeight: 700 }}>Salary :</span>50000
                  </p>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <img src={Hand} alt style={{ width: 30, height: 26 }} />
                  <p>
                    <span style={{ fontWeight: 700 }}>Job Type :</span> Full
                    Time
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 30,
                }}
              >
                <Link to="/job-Graphic-Designer">
                  <button className="meet_button">Apply Now</button>
                </Link>
              </div>
              <div>
                <div className="description">
                  <p />
                  <p style={{ textAlign: "justify" }}>
                    Join our dynamic team as a Graphic Designer and play a
                    pivotal role in enhancing our brand’s visual identity.
                    You'll collaborate closely with our marketing and creative
                    teams to produce high-quality visual content while staying
                    updated on the latest design trends. If you're passionate
                    about creating visually appealing and impactful designs, we
                    welcome your expertise to drive our brand's success through
                    innovative graphic design. You'll strategize and execute
                    design projects, foster valuable relationships with
                    stakeholders, and create compelling visuals that drive
                    engagement and growth.
                  </p>
                </div>
              </div>
              <div className="job_image">
                <img src={Job} alt />
              </div>
            </div>
          </div>
          <div>
            <img src={mixImg} alt style={{ width: "100%", margin: "auto" }} />
          </div>
        </div>
        <div className="jobDetail">
          <div className="container">
            <div className="heading">
              <h2>Why Ayra Printing and Packaging Pvt. Ltd?</h2>
              <p className="para">
                As one of large organization, we’re committed to fostering
                meaningful relationships within our team and creating a culture
                where everyone excels. Our most important asset is our team, so
                we’re focused on making Ayra Printing and Packaging Pvt. Ltd an
                amazing place to work. So much so, that we’re officially one of
                the Top 100 large Companies to work for in the Pakistan.
              </p>
            </div>
            <div className="second_section">
              <div className="benifit_Section">
                <div className="benifit_data">
                  <div className="imagess">
                    <img src={Career9} />
                  </div>
                  <h4 style={{ paddingTop: 20 }}>Annual Leave</h4>
                  <p>Get at least 12 days of paid time off every year</p>
                </div>
              </div>
              <div className="benifit_Section">
                <div className="benifit_data">
                  <div className="imagess">
                    <img src={Career10} />
                  </div>
                  <h4 style={{ paddingTop: 20 }}>Health &amp; Wellbeing</h4>
                  <p>
                    Happy &amp; Healthy go hand-in-hand, we're here for that.
                  </p>
                </div>
              </div>
              <div className="benifit_Section">
                <div className="benifit_data">
                  <div className="imagess">
                    <img src={Career11} />
                  </div>
                  <h4 style={{ paddingTop: 20 }}>Holidays</h4>
                  <p>
                    We give you down time, adventure time, or anything in
                    between that time.
                  </p>
                </div>
              </div>
              <div className="benifit_Section">
                <div className="benifit_data">
                  <div className="imagess">
                    <img src={Career12} />
                  </div>
                  <h4 style={{ paddingTop: 20 }}>Mentoring</h4>
                  <p>
                    Like we say in Spain, “Hunger is a bad advisor”, so we have
                    a good variety of ways to fight it off.
                  </p>
                </div>
              </div>
              <div className="benifit_Section">
                <div className="benifit_data">
                  <div className="imagess">
                    <img src={Career13} />
                  </div>
                  <h4 style={{ paddingTop: 20 }}>Refreshments</h4>
                  <p>
                    Like we say in Spain, “Hunger is a bad advisor”, so we have
                    a good variety of ways to fight it off.
                  </p>
                </div>
              </div>
              <div className="benifit_Section">
                <div className="benifit_data">
                  <div className="imagess">
                    <img src={Career14} />
                  </div>
                  <h4 style={{ paddingTop: 20 }}>Career Path Planning</h4>
                  <p>
                    A personalized roadmap designed to help you to achieve
                    professional goals.
                  </p>
                </div>
              </div>
              <div className="benifit_Section">
                <div className="benifit_data">
                  <div className="imagess">
                    <img src={Career15} />
                  </div>
                  <h4 style={{ paddingTop: 20 }}>Flexible Working Hours</h4>
                  <p>
                    Our schedule is semi-flexible, giving you more freedom at
                    work.
                  </p>
                </div>
              </div>
              <div className="benifit_Section">
                <div className="benifit_data">
                  <div className="imagess">
                    <img src={Career16} />
                  </div>
                  <h4 style={{ paddingTop: 20 }}>City Center Office</h4>
                  <p>Like we say in Sp</p>
                </div>
              </div>
            </div>
            <div className="heading2">
              <h2>Responsibilities: you will…</h2>
              <ul>
                <span style={{ fontSize: 22, maxWidth: 1100 }}>
                  <div>
                    <ul>
                      <li>
                        Identifying potential design projects and collaborating
                        with stakeholders to understand their requirements.
                      </li>
                      <li>
                        Creating high-quality visual content such as graphics,
                        illustrations, and layouts for various media platforms.
                      </li>
                      <li>
                        Conducting research to stay updated on design trends and
                        incorporating them into our visual content.
                      </li>
                      <li>
                        Ensuring that all design activities adhere to brand
                        guidelines and maintain consistency across all visual
                        materials.
                      </li>
                      <li>
                        Analyzing competitor designs and identifying
                        opportunities to enhance our visual identity.
                      </li>
                      <li>
                        Tracking the performance of design projects using tools
                        like Adobe Creative Suite and providing regular reports
                        on their effectiveness.
                      </li>
                    </ul>
                  </div>
                </span>
              </ul>
            </div>
            <div className="heading3">
              <h2>The ideal person will have the following…</h2>
              <ul>
                <span style={{ fontSize: 22, maxWidth: 1100 }}>
                  <ul>
                    <li>
                      Excellent communication skills to collaborate effectively
                      with clients, team members, and stakeholders.
                    </li>
                    <li>
                      A strong understanding of design principles and how visual
                      elements fit into the broader branding strategy.
                    </li>
                    <li>
                      Ability to analyze design trends, metrics, and performance
                      to make data-driven decisions.
                    </li>
                    <li>
                      Commitment to maintaining high ethical standards and
                      ensuring all designs align with brand guidelines and
                      quality expectations.
                    </li>
                  </ul>
                </span>
              </ul>
            </div>
          </div>
          <div>
            <img src={Mix3} alt style={{ width: "100%", margin: "auto" }} />
          </div>
        </div>
        <div className="more">
          <div className="container">
            <div className="heading">
              <h2>More</h2>
            </div>
            <div class="main_div">
              <div class="main_card">
                <div class="card_data">
                  <h5>
                    {" "}
                    <span style={{ fontWeight: "600" }}>Location </span> :
                    Multan, Pakistan
                  </h5>
                  <h2>Graphic Designer</h2>
                  <div class="title">
                    <p>
                      <span style={{ fontWeight: "600" }}>
                        No. of Position{" "}
                      </span>
                      : 2{" "}
                    </p>
                    <p>
                      {" "}
                      <span style={{ fontWeight: "600" }}>Job Type </span>: Full
                      Time
                    </p>
                  </div>
                  <div class="vacancy_image">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/vacancy-image%2Ffire1%2FSeptember_2023%2FLink%20building.png?alt=media&amp;token=6e3be512-594e-4e66-a3ad-0e2c5677ca96"
                      alt=""
                    />
                    <Link to="/job-Graphic-Designer">
                      <div class="read_more_button">Apply Now</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="main_card">
                <div class="card_data">
                  <h5>
                    {" "}
                    <span style={{ fontWeight: "600" }}>Location </span> :
                    Multan, Pakistan
                  </h5>
                  <h2>Producton Staff</h2>
                  <div class="title">
                    <p>
                      <span style={{ fontWeight: "600" }}>
                        No. of Position{" "}
                      </span>
                      : 3{" "}
                    </p>
                    <p>
                      {" "}
                      <span style={{ fontWeight: "600" }}>Job Type </span>: Full
                      Time
                    </p>
                  </div>
                  <div class="vacancy_image">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/vacancy-image%2Ffire1%2FSeptember_2023%2Fcontent%20writer.png?alt=media&amp;token=9329a4f9-4442-478b-b354-ca0d1fc3979e"
                      alt=""
                    />
                    <Link to="/job-Product-Staff">
                      <div class="read_more_button">Apply Now</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="main_card">
                <div class="card_data">
                  <h5>
                    {" "}
                    <span style={{ fontWeight: "600" }}>Location </span> :
                    Multan, Pakistan
                  </h5>
                  <h2>Accountant</h2>
                  <div class="title">
                    <p>
                      <span style={{ fontWeight: "600" }}>
                        No. of Position{" "}
                      </span>
                      : 1{" "}
                    </p>
                    <p>
                      {" "}
                      <span style={{ fontWeight: "600" }}>Job Type </span>: Full
                      Time
                    </p>
                  </div>
                  <div class="vacancy_image">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/vacancy-image%2Ffire1%2FJuly_2023%2FRectangle%20218.png?alt=media&amp;token=6b3705e0-df0d-4083-8edf-d92ebf75fe11"
                      alt=""
                    />
                    <Link to="/job-Accountant">
                      <div class="read_more_button">Apply Now</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      
    </>
  );
};

export default graphicdesignerbuilder;
