import React from 'react'

export const Header = () => {
  return (
    <div>  <header className="header-area">
      <div className="navgition navgition-transparent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">
                  <img src="https://drive.google.com/file/d/1S_VGH_lQ7E8b2xHtAIQjWwBJLXWAC9_p/view?usp=share_link" alt="Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarOne"
                  aria-controls="navbarOne"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarOne"
                >
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                      <a className="page-scroll" href="#home">
                        HOME
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#service">
                        SERVICES
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#pricing">
                        PRICING
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#testimonial">
                        Testimonial
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#contact">
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="navbar-social d-none d-sm-flex align-items-center">
                  <span>FOLLOW US</span>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="lni-facebook-filled" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-twitter-original" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-instagram-original" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-linkedin-original" />
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div
        id="home"
        className="header-hero bg_cover"
        style={{ backgroundImage: "url(https://drive.google.com/file/d/1APY53Y3qu8gYO5F4h4v1oXsoRIGT2MLA/view?usp=share_link)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="header-content text-center">
                <h3 className="header-title">
                  Handcrafted Landing Page for Startups and SaaS Businesses
                </h3>
                <p className="text">
                  A simple, customizable, and, beautiful SaaS business focused
                  landing page to make your project closer to launch!
                </p>
                <ul className="header-btn rounded-buttons">
                  <li>
                    <a className="main-btn rounded-three" href="#">
                      GET IN TOUCH
                    </a>
                  </li>
                  <li>
                    <a
                      className="main-btn rounded-four video-popup"
                      href="../../watch.html?v=r44RKWyfcFw"
                    >
                      WATCH THE VIDEO <i className="lni-play" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-shape">
          <img src="https://drive.google.com/file/d/1oqmGD3PqQVCWtOQMyrqGWWQ-1EURP3mH/view?usp=share_link" alt="shape" />
        </div>
      </div>
    </header>

    </div>
  )
}
