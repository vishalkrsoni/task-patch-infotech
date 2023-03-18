import React from 'react'

export const Template = () => {
  return (
    <div>

      <>
        <header className="header-area">
          <div className="navgition navgition-transparent">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#">
                      <img src="assets/images/logo.svg" alt="Logo" />
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
            style={{ backgroundImage: "url(assets/images/header-bg.jpg)" }}
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
              <img src="assets/images/header-shape.svg" alt="shape" />
            </div>
          </div>
        </header>
        <section id="service" className="services-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title pb-10">
                  <h4 className="title">Crafted For</h4>
                  <p className="text">
                    Stop wasting time and money designing and managing a website that
                    doesn’t get results. Happiness guaranteed!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="services-content mt-40 d-sm-flex">
                      <div className="services-icon">
                        <i className="lni-bolt" />
                      </div>
                      <div className="services-content media-body">
                        <h4 className="services-title">Startup</h4>
                        <p className="text">
                          Short description for the ones
                          <br />
                          who look for something new.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="services-content mt-40 d-sm-flex">
                      <div className="services-icon">
                        <i className="lni-bar-chart" />
                      </div>
                      <div className="services-content media-body">
                        <h4 className="services-title">SaaS Business</h4>
                        <p className="text">
                          Short description for the ones
                          <br />
                          who look for something new.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="services-content mt-40 d-sm-flex">
                      <div className="services-icon">
                        <i className="lni-brush" />
                      </div>
                      <div className="services-content media-body">
                        <h4 className="services-title">Agency</h4>
                        <p className="text">
                          Short description for the ones
                          <br />
                          who look for something new.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="services-content mt-40 d-sm-flex">
                      <div className="services-icon">
                        <i className="lni-bulb" />
                      </div>
                      <div className="services-content media-body">
                        <h4 className="services-title">App Landing</h4>
                        <p className="text">
                          Short description for the ones
                          <br />
                          who look for something new.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-image d-lg-flex align-items-center">
            <div className="image">
              <img src="assets/images/services.png" alt="Services" />
            </div>
          </div>
        </section>
        <section id="pricing" className="pricing-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center pb-10">
                  <h4 className="title">Our Pricing</h4>
                  <p className="text">
                    Stop wasting time and money designing and managing a website that
                    doesn’t get results. Happiness guaranteed!
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-7 col-sm-9">
                <div className="single-pricing mt-40">
                  <div className="pricing-header text-center">
                    <h5 className="sub-title">Basic</h5>
                    <span className="price">$ 199</span>
                    <p className="year">per year</p>
                  </div>
                  <div className="pricing-list">
                    <ul>
                      <li>
                        <i className="lni-check-mark-circle" /> Carefully crafted
                        components
                      </li>
                      <li>
                        <i className="lni-check-mark-circle" /> Amazing page examples
                      </li>
                      <li>
                        <i className="lni-check-mark-circle" /> Super friendly support
                        team
                      </li>
                      <li>
                        <i className="lni-check-mark-circle" /> Awesome Support
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-btn text-center">
                    <a className="main-btn" href="#">
                      GET STARTED
                    </a>
                  </div>
                  <div className="buttom-shape">
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 350 112.35"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                      .color-1 {\n                        fill: #2bdbdc;\n                        isolation: isolate;\n                      }\n                      .cls-1 {\n                        opacity: 0.1;\n                      }\n                      .cls-2 {\n                        opacity: 0.2;\n                      }\n                      .cls-3 {\n                        opacity: 0.4;\n                      }\n                      .cls-4 {\n                        opacity: 0.6;\n                      }\n                    "
                          }}
                        />
                      </defs>
                      <title>bottom-part1</title>
                      <g id="bottom-part">
                        <g id="Group_747" data-name="Group 747">
                          <path
                            id="Path_294"
                            data-name="Path 294"
                            className="cls-1 color-1"
                            d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z"
                            transform="translate(0 0)"
                          />
                          <path
                            id="Path_297"
                            data-name="Path 297"
                            className="cls-2 color-1"
                            d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z"
                            transform="translate(0 0)"
                          />
                          <path
                            id="Path_296"
                            data-name="Path 296"
                            className="cls-3 color-1"
                            d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z"
                            transform="translate(0 0)"
                          />
                          <path
                            id="Path_295"
                            data-name="Path 295"
                            className="cls-4 color-1"
                            d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z"
                            transform="translate(0 0)"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-7 col-sm-9">
                <div className="single-pricing pro mt-40">
                  <div className="pricing-baloon">
                    <img src="assets/images/baloon.svg" alt="baloon" />
                  </div>
                  <div className="pricing-header">
                    <h5 className="sub-title">Pro</h5>
                    <span className="price">$ 399</span>
                    <p className="year">per year</p>
                  </div>
                  <div className="pricing-list">
                    <ul>
                      <li>
                        <i className="lni-check-mark-circle" /> Carefully crafted
                        components
                      </li>
                      <li>
                        <i className="lni-check-mark-circle" /> Amazing page examples
                      </li>
                      <li>
                        <i className="lni-check-mark-circle" /> Super friendly support
                        team
                      </li>
                      <li>
                        <i className="lni-check-mark-circle" /> Awesome Support
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-btn text-center">
                    <a className="main-btn" href="#">
                      GET STARTED
                    </a>
                  </div>
                  <div className="buttom-shape">
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 350 112.35"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                      .color-2 {\n                        fill: #0067f4;\n                        isolation: isolate;\n                      }\n                      .cls-1 {\n                        opacity: 0.1;\n                      }\n                      .cls-2 {\n                        opacity: 0.2;\n                      }\n                      .cls-3 {\n                        opacity: 0.4;\n                      }\n                      .cls-4 {\n                        opacity: 0.6;\n                      }\n                    "
                          }}
                        />
                      </defs>
                      <title>bottom-part1</title>
                      <g id="bottom-part">
                        <g id="Group_747" data-name="Group 747">
                          <path
                            id="Path_294"
                            data-name="Path 294"
                            className="cls-1 color-2"
                            d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z"
                            transform="translate(0 0)"
                          />
                          <path
                            id="Path_297"
                            data-name="Path 297"
                            className="cls-2 color-2"
                            d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z"
                            transform="translate(0 0)"
                          />
                          <path
                            id="Path_296"
                            data-name="Path 296"
                            className="cls-3 color-2"
                            d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z"
                            transform="translate(0 0)"
                          />
                          <path
                            id="Path_295"
                            data-name="Path 295"
                            className="cls-4 color-2"
                            d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z"
                            transform="translate(0 0)"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-7 col-sm-9">
                <div className="single-pricing enterprise mt-40">
                  <div className="pricing-flower">
                    <img src="assets/images/flower.svg" alt="flower" />
                  </div>
                  <div className="pricing-header text-right">
                    <h5 className="sub-title">Enterprise</h5>
                    <span className="price">$ 799</span>
                    <p className="year">per year</p>
                  </div>
                  <div className="pricing-list">
                    <ul>
                      <li>
                        <i className="lni-check-mark-circle" /> Carefully crafted
                        components
                      </li>
                      <li>
                        <i className="lni-check-mark-circle" /> Amazing page examples
                      </li>
                      <li>
                        <i className="lni-check-mark-circle" /> Super friendly support
                        team
                      </li>
                      <li>
                        <i className="lni-check-mark-circle" /> Awesome Support
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-btn text-center">
                    <a className="main-btn" href="#">
                      GET STARTED
                    </a>
                  </div>
                  <div className="buttom-shape">
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 350 112.35"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                      .color-3 {\n                        fill: #4da422;\n                        isolation: isolate;\n                      }\n                      .cls-1 {\n                        opacity: 0.1;\n                      }\n                      .cls-2 {\n                        opacity: 0.2;\n                      }\n                      .cls-3 {\n                        opacity: 0.4;\n                      }\n                      .cls-4 {\n                        opacity: 0.6;\n                      }\n                    "
                          }}
                        />
                      </defs>
                      <title>bottom-part1</title>
                      <g id="bottom-part">
                        <g id="Group_747" data-name="Group 747">
                          <path
                            id="Path_294"
                            data-name="Path 294"
                            className="cls-1 color-3"
                            d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z"
                            transform="translate(0 0)"
                          />
                          <path
                            id="Path_297"
                            data-name="Path 297"
                            className="cls-2 color-3"
                            d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z"
                            transform="translate(0 0)"
                          />
                          <path
                            id="Path_296"
                            data-name="Path 296"
                            className="cls-3 color-3"
                            d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z"
                            transform="translate(0 0)"
                          />
                          <path
                            id="Path_295"
                            data-name="Path 295"
                            className="cls-4 color-3"
                            d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z"
                            transform="translate(0 0)"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="call-to-action" className="call-to-action">
          <div className="call-action-image">
            <img src="assets/images/call-to-action.png" alt="call-to-action" />
          </div>
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="call-action-content text-center">
                  <h2 className="call-title">Curious to Learn More? Stay Tuned</h2>
                  <p className="text">
                    You let us know whenever you want us to update anything or think
                    something can be optimised.
                  </p>
                  <div className="call-newsletter">
                    <i className="lni-envelope" />
                    <input type="text" placeholder="john@email.com" />
                    <button type="submit">SUBSCRIBE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonial" className="testimonial-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center pb-10">
                  <h4 className="title">Testimonial</h4>
                  <p className="text">
                    Stop wasting time and money designing and managing a website that
                    doesn’t get results. Happiness guaranteed!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="row testimonial-active">
                  <div className="col-lg-4">
                    <div className="single-testimonial mt-30 mb-30 text-center">
                      <div className="testimonial-image">
                        <img src="assets/images/author-3.jpg" alt="Author" />
                      </div>
                      <div className="testimonial-content">
                        <p className="text">
                          Stop wasting time and money designing and managing a website
                          that doesn’t get results. Happiness guaranteed! Stop wasting
                          time and money designing and managing a website that doesn’t
                          get results. Happiness guaranteed!
                        </p>
                        <h6 className="author-name">Isabela Moreira</h6>
                        <span className="sub-title">CEO, GrayGrids</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-testimonial mt-30 mb-30 text-center">
                      <div className="testimonial-image">
                        <img src="assets/images/author-1.jpg" alt="Author" />
                      </div>
                      <div className="testimonial-content">
                        <p className="text">
                          Stop wasting time and money designing and managing a website
                          that doesn’t get results. Happiness guaranteed! Stop wasting
                          time and money designing and managing a website that doesn’t
                          get results. Happiness guaranteed!
                        </p>
                        <h6 className="author-name">Fiona</h6>
                        <span className="sub-title">Lead Designer, UIdeck</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-testimonial mt-30 mb-30 text-center">
                      <div className="testimonial-image">
                        <img src="assets/images/author-2.jpg" alt="Author" />
                      </div>
                      <div className="testimonial-content">
                        <p className="text">
                          Stop wasting time and money designing and managing a website
                          that doesn’t get results. Happiness guaranteed! Stop wasting
                          time and money designing and managing a website that doesn’t
                          get results. Happiness guaranteed!
                        </p>
                        <h6 className="author-name">Elon Musk</h6>
                        <span className="sub-title">CEO, SpaceX</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-testimonial mt-30 mb-30 text-center">
                      <div className="testimonial-image">
                        <img src="assets/images/author-4.jpg" alt="Author" />
                      </div>
                      <div className="testimonial-content">
                        <p className="text">
                          Stop wasting time and money designing and managing a website
                          that doesn’t get results. Happiness guaranteed! Stop wasting
                          time and money designing and managing a website that doesn’t
                          get results. Happiness guaranteed!
                        </p>
                        <h6 className="author-name">Fajar Siddiq</h6>
                        <span className="sub-title">CEO, MakerFlix</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="client-logo-area">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-6">
                <div className="single-client mt-30 text-center">
                  <img src="assets/images/client_logo_01.png" alt="Logo" />
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="single-client mt-30 text-center">
                  <img src="assets/images/client_logo_02.png" alt="Logo" />
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="single-client mt-30 text-center">
                  <img src="assets/images/client_logo_03.png" alt="Logo" />
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="single-client mt-30 text-center">
                  <img src="assets/images/client_logo_04.png" alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center pb-10">
                  <h4 className="title">Get In touch</h4>
                  <p className="text">
                    Stop wasting time and money designing and managing a website that
                    doesn’t get results. Happiness guaranteed!
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="contact-form">
                  <form
                    id="contact-form"
                    action="assets/contact.php"
                    method="post"
                    data-toggle="validator"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            data-error="Name is required."
                            required="required"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            data-error="Valid email is required."
                            required="required"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            data-error="Subject is required."
                            required="required"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            data-error="Phone is required."
                            required="required"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-form form-group">
                          <textarea
                            placeholder="Your Mesaage"
                            name="message"
                            data-error="Please, leave us a message."
                            required="required"
                            defaultValue={""}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <p className="form-message" />
                      <div className="col-md-12">
                        <div className="single-form form-group text-center">
                          <button type="submit" className="main-btn">
                            send message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer" className="footer-area">
          <div className="footer-widget">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="footer-logo-support d-md-flex align-items-end justify-content-between">
                    <div className="footer-logo d-flex align-items-end">
                      <a className="mt-30" href="index.html">
                        <img src="assets/images/logo.svg" alt="Logo" />
                      </a>
                      <ul className="social mt-30">
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
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="footer-link">
                    <h6 className="footer-title">Company</h6>
                    <ul>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Career</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="footer-link">
                    <h6 className="footer-title">Product &amp; Services</h6>
                    <ul>
                      <li>
                        <a href="#">Products</a>
                      </li>
                      <li>
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">Developer</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-5">
                  <div className="footer-link">
                    <h6 className="footer-title">Help &amp; Suuport</h6>
                    <ul>
                      <li>
                        <a href="#">Support Center</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-7">
                  <div className="footer-newsletter">
                    <h6 className="footer-title">Subscribe Newsletter</h6>
                    <div className="newsletter">
                      <form action="#">
                        <input type="text" placeholder="Your Email" />
                        <button type="submit">
                          <i className="lni-angle-double-right" />
                        </button>
                      </form>
                    </div>
                    <p className="text">
                      Subscribe weekly newsletter to stay upto date. We don’t send
                      spam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright text-center">
                    <p className="text">
                      Template Crafted by
                      <a rel="nofollow" href="../../index.htm">
                        UIdeck
                      </a>{" "}
                      - UI Powered by
                      <a el="nofollow" href="../../index-1.htm">
                        AyroUI
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <a className="back-to-top" href="#">
          <i className="lni-chevron-up" />
        </a>
      </>




</div>
  )
}


/*


<>
  <header className="header-area">
    <div className="navgition navgition-transparent">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="#">
                <img src="assets/images/logo.svg" alt="Logo" />
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
      style={{ backgroundImage: "url(assets/images/header-bg.jpg)" }}
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
        <img src="assets/images/header-shape.svg" alt="shape" />
      </div>
    </div>
  </header>
  <section id="service" className="services-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title pb-10">
            <h4 className="title">Crafted For</h4>
            <p className="text">
              Stop wasting time and money designing and managing a website that
              doesn’t get results. Happiness guaranteed!
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-md-6">
              <div className="services-content mt-40 d-sm-flex">
                <div className="services-icon">
                  <i className="lni-bolt" />
                </div>
                <div className="services-content media-body">
                  <h4 className="services-title">Startup</h4>
                  <p className="text">
                    Short description for the ones
                    <br />
                    who look for something new.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="services-content mt-40 d-sm-flex">
                <div className="services-icon">
                  <i className="lni-bar-chart" />
                </div>
                <div className="services-content media-body">
                  <h4 className="services-title">SaaS Business</h4>
                  <p className="text">
                    Short description for the ones
                    <br />
                    who look for something new.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="services-content mt-40 d-sm-flex">
                <div className="services-icon">
                  <i className="lni-brush" />
                </div>
                <div className="services-content media-body">
                  <h4 className="services-title">Agency</h4>
                  <p className="text">
                    Short description for the ones
                    <br />
                    who look for something new.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="services-content mt-40 d-sm-flex">
                <div className="services-icon">
                  <i className="lni-bulb" />
                </div>
                <div className="services-content media-body">
                  <h4 className="services-title">App Landing</h4>
                  <p className="text">
                    Short description for the ones
                    <br />
                    who look for something new.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="services-image d-lg-flex align-items-center">
      <div className="image">
        <img src="assets/images/services.png" alt="Services" />
      </div>
    </div>
  </section>
  <section id="pricing" className="pricing-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center pb-10">
            <h4 className="title">Our Pricing</h4>
            <p className="text">
              Stop wasting time and money designing and managing a website that
              doesn’t get results. Happiness guaranteed!
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-7 col-sm-9">
          <div className="single-pricing mt-40">
            <div className="pricing-header text-center">
              <h5 className="sub-title">Basic</h5>
              <span className="price">$ 199</span>
              <p className="year">per year</p>
            </div>
            <div className="pricing-list">
              <ul>
                <li>
                  <i className="lni-check-mark-circle" /> Carefully crafted
                  components
                </li>
                <li>
                  <i className="lni-check-mark-circle" /> Amazing page examples
                </li>
                <li>
                  <i className="lni-check-mark-circle" /> Super friendly support
                  team
                </li>
                <li>
                  <i className="lni-check-mark-circle" /> Awesome Support
                </li>
              </ul>
            </div>
            <div className="pricing-btn text-center">
              <a className="main-btn" href="#">
                GET STARTED
              </a>
            </div>
            <div className="buttom-shape">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 350 112.35"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                      .color-1 {\n                        fill: #2bdbdc;\n                        isolation: isolate;\n                      }\n                      .cls-1 {\n                        opacity: 0.1;\n                      }\n                      .cls-2 {\n                        opacity: 0.2;\n                      }\n                      .cls-3 {\n                        opacity: 0.4;\n                      }\n                      .cls-4 {\n                        opacity: 0.6;\n                      }\n                    "
                    }}
                  />
                </defs>
                <title>bottom-part1</title>
                <g id="bottom-part">
                  <g id="Group_747" data-name="Group 747">
                    <path
                      id="Path_294"
                      data-name="Path 294"
                      className="cls-1 color-1"
                      d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z"
                      transform="translate(0 0)"
                    />
                    <path
                      id="Path_297"
                      data-name="Path 297"
                      className="cls-2 color-1"
                      d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z"
                      transform="translate(0 0)"
                    />
                    <path
                      id="Path_296"
                      data-name="Path 296"
                      className="cls-3 color-1"
                      d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z"
                      transform="translate(0 0)"
                    />
                    <path
                      id="Path_295"
                      data-name="Path 295"
                      className="cls-4 color-1"
                      d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z"
                      transform="translate(0 0)"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-7 col-sm-9">
          <div className="single-pricing pro mt-40">
            <div className="pricing-baloon">
              <img src="assets/images/baloon.svg" alt="baloon" />
            </div>
            <div className="pricing-header">
              <h5 className="sub-title">Pro</h5>
              <span className="price">$ 399</span>
              <p className="year">per year</p>
            </div>
            <div className="pricing-list">
              <ul>
                <li>
                  <i className="lni-check-mark-circle" /> Carefully crafted
                  components
                </li>
                <li>
                  <i className="lni-check-mark-circle" /> Amazing page examples
                </li>
                <li>
                  <i className="lni-check-mark-circle" /> Super friendly support
                  team
                </li>
                <li>
                  <i className="lni-check-mark-circle" /> Awesome Support
                </li>
              </ul>
            </div>
            <div className="pricing-btn text-center">
              <a className="main-btn" href="#">
                GET STARTED
              </a>
            </div>
            <div className="buttom-shape">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 350 112.35"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                      .color-2 {\n                        fill: #0067f4;\n                        isolation: isolate;\n                      }\n                      .cls-1 {\n                        opacity: 0.1;\n                      }\n                      .cls-2 {\n                        opacity: 0.2;\n                      }\n                      .cls-3 {\n                        opacity: 0.4;\n                      }\n                      .cls-4 {\n                        opacity: 0.6;\n                      }\n                    "
                    }}
                  />
                </defs>
                <title>bottom-part1</title>
                <g id="bottom-part">
                  <g id="Group_747" data-name="Group 747">
                    <path
                      id="Path_294"
                      data-name="Path 294"
                      className="cls-1 color-2"
                      d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z"
                      transform="translate(0 0)"
                    />
                    <path
                      id="Path_297"
                      data-name="Path 297"
                      className="cls-2 color-2"
                      d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z"
                      transform="translate(0 0)"
                    />
                    <path
                      id="Path_296"
                      data-name="Path 296"
                      className="cls-3 color-2"
                      d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z"
                      transform="translate(0 0)"
                    />
                    <path
                      id="Path_295"
                      data-name="Path 295"
                      className="cls-4 color-2"
                      d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z"
                      transform="translate(0 0)"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-7 col-sm-9">
          <div className="single-pricing enterprise mt-40">
            <div className="pricing-flower">
              <img src="assets/images/flower.svg" alt="flower" />
            </div>
            <div className="pricing-header text-right">
              <h5 className="sub-title">Enterprise</h5>
              <span className="price">$ 799</span>
              <p className="year">per year</p>
            </div>
            <div className="pricing-list">
              <ul>
                <li>
                  <i className="lni-check-mark-circle" /> Carefully crafted
                  components
                </li>
                <li>
                  <i className="lni-check-mark-circle" /> Amazing page examples
                </li>
                <li>
                  <i className="lni-check-mark-circle" /> Super friendly support
                  team
                </li>
                <li>
                  <i className="lni-check-mark-circle" /> Awesome Support
                </li>
              </ul>
            </div>
            <div className="pricing-btn text-center">
              <a className="main-btn" href="#">
                GET STARTED
              </a>
            </div>
            <div className="buttom-shape">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 350 112.35"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                      .color-3 {\n                        fill: #4da422;\n                        isolation: isolate;\n                      }\n                      .cls-1 {\n                        opacity: 0.1;\n                      }\n                      .cls-2 {\n                        opacity: 0.2;\n                      }\n                      .cls-3 {\n                        opacity: 0.4;\n                      }\n                      .cls-4 {\n                        opacity: 0.6;\n                      }\n                    "
                    }}
                  />
                </defs>
                <title>bottom-part1</title>
                <g id="bottom-part">
                  <g id="Group_747" data-name="Group 747">
                    <path
                      id="Path_294"
                      data-name="Path 294"
                      className="cls-1 color-3"
                      d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z"
                      transform="translate(0 0)"
                    />
                    <path
                      id="Path_297"
                      data-name="Path 297"
                      className="cls-2 color-3"
                      d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z"
                      transform="translate(0 0)"
                    />
                    <path
                      id="Path_296"
                      data-name="Path 296"
                      className="cls-3 color-3"
                      d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z"
                      transform="translate(0 0)"
                    />
                    <path
                      id="Path_295"
                      data-name="Path 295"
                      className="cls-4 color-3"
                      d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z"
                      transform="translate(0 0)"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="call-to-action" className="call-to-action">
    <div className="call-action-image">
      <img src="assets/images/call-to-action.png" alt="call-to-action" />
    </div>
    <div className="container-fluid">
      <div className="row justify-content-end">
        <div className="col-lg-6">
          <div className="call-action-content text-center">
            <h2 className="call-title">Curious to Learn More? Stay Tuned</h2>
            <p className="text">
              You let us know whenever you want us to update anything or think
              something can be optimised.
            </p>
            <div className="call-newsletter">
              <i className="lni-envelope" />
              <input type="text" placeholder="john@email.com" />
              <button type="submit">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="testimonial" className="testimonial-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center pb-10">
            <h4 className="title">Testimonial</h4>
            <p className="text">
              Stop wasting time and money designing and managing a website that
              doesn’t get results. Happiness guaranteed!
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row testimonial-active">
            <div className="col-lg-4">
              <div className="single-testimonial mt-30 mb-30 text-center">
                <div className="testimonial-image">
                  <img src="assets/images/author-3.jpg" alt="Author" />
                </div>
                <div className="testimonial-content">
                  <p className="text">
                    Stop wasting time and money designing and managing a website
                    that doesn’t get results. Happiness guaranteed! Stop wasting
                    time and money designing and managing a website that doesn’t
                    get results. Happiness guaranteed!
                  </p>
                  <h6 className="author-name">Isabela Moreira</h6>
                  <span className="sub-title">CEO, GrayGrids</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-testimonial mt-30 mb-30 text-center">
                <div className="testimonial-image">
                  <img src="assets/images/author-1.jpg" alt="Author" />
                </div>
                <div className="testimonial-content">
                  <p className="text">
                    Stop wasting time and money designing and managing a website
                    that doesn’t get results. Happiness guaranteed! Stop wasting
                    time and money designing and managing a website that doesn’t
                    get results. Happiness guaranteed!
                  </p>
                  <h6 className="author-name">Fiona</h6>
                  <span className="sub-title">Lead Designer, UIdeck</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-testimonial mt-30 mb-30 text-center">
                <div className="testimonial-image">
                  <img src="assets/images/author-2.jpg" alt="Author" />
                </div>
                <div className="testimonial-content">
                  <p className="text">
                    Stop wasting time and money designing and managing a website
                    that doesn’t get results. Happiness guaranteed! Stop wasting
                    time and money designing and managing a website that doesn’t
                    get results. Happiness guaranteed!
                  </p>
                  <h6 className="author-name">Elon Musk</h6>
                  <span className="sub-title">CEO, SpaceX</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-testimonial mt-30 mb-30 text-center">
                <div className="testimonial-image">
                  <img src="assets/images/author-4.jpg" alt="Author" />
                </div>
                <div className="testimonial-content">
                  <p className="text">
                    Stop wasting time and money designing and managing a website
                    that doesn’t get results. Happiness guaranteed! Stop wasting
                    time and money designing and managing a website that doesn’t
                    get results. Happiness guaranteed!
                  </p>
                  <h6 className="author-name">Fajar Siddiq</h6>
                  <span className="sub-title">CEO, MakerFlix</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="client-logo-area">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-6">
          <div className="single-client mt-30 text-center">
            <img src="assets/images/client_logo_01.png" alt="Logo" />
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="single-client mt-30 text-center">
            <img src="assets/images/client_logo_02.png" alt="Logo" />
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="single-client mt-30 text-center">
            <img src="assets/images/client_logo_03.png" alt="Logo" />
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="single-client mt-30 text-center">
            <img src="assets/images/client_logo_04.png" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" className="contact-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center pb-10">
            <h4 className="title">Get In touch</h4>
            <p className="text">
              Stop wasting time and money designing and managing a website that
              doesn’t get results. Happiness guaranteed!
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="contact-form">
            <form
              id="contact-form"
              action="assets/contact.php"
              method="post"
              data-toggle="validator"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="single-form form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      data-error="Name is required."
                      required="required"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-form form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      data-error="Valid email is required."
                      required="required"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-form form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      data-error="Subject is required."
                      required="required"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-form form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      data-error="Phone is required."
                      required="required"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-form form-group">
                    <textarea
                      placeholder="Your Mesaage"
                      name="message"
                      data-error="Please, leave us a message."
                      required="required"
                      defaultValue={""}
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <p className="form-message" />
                <div className="col-md-12">
                  <div className="single-form form-group text-center">
                    <button type="submit" className="main-btn">
                      send message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer id="footer" className="footer-area">
    <div className="footer-widget">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-logo-support d-md-flex align-items-end justify-content-between">
              <div className="footer-logo d-flex align-items-end">
                <a className="mt-30" href="index.html">
                  <img src="assets/images/logo.svg" alt="Logo" />
                </a>
                <ul className="social mt-30">
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
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="footer-link">
              <h6 className="footer-title">Company</h6>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="footer-link">
              <h6 className="footer-title">Product &amp; Services</h6>
              <ul>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
                <li>
                  <a href="#">Developer</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-5">
            <div className="footer-link">
              <h6 className="footer-title">Help &amp; Suuport</h6>
              <ul>
                <li>
                  <a href="#">Support Center</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="footer-newsletter">
              <h6 className="footer-title">Subscribe Newsletter</h6>
              <div className="newsletter">
                <form action="#">
                  <input type="text" placeholder="Your Email" />
                  <button type="submit">
                    <i className="lni-angle-double-right" />
                  </button>
                </form>
              </div>
              <p className="text">
                Subscribe weekly newsletter to stay upto date. We don’t send
                spam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright text-center">
              <p className="text">
                Template Crafted by
                <a rel="nofollow" href="../../index.htm">
                  UIdeck
                </a>{" "}
                - UI Powered by
                <a el="nofollow" href="../../index-1.htm">
                  AyroUI
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <a className="back-to-top" href="#">
    <i className="lni-chevron-up" />
  </a>
</>




*/