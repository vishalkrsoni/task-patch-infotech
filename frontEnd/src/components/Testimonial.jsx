import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

export const Testimonial = () => {
  const [ testimonialData, setTestimonialData ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8080/testimonial");
        setTestimonialData(response.data.testimonials);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    }
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section id="testimonial" className="testimonial-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-10">
                <h4 className="title">Testimonial</h4>
                <p className="text">
                  Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Slider {...settings}>
                {testimonialData.map((testimonial) => (
                  <div className="single-testimonial" key={testimonial.testimonialID}>
                    <div className="testimonial-image">
                      <img src={testimonial.photo} alt={testimonial.name} />
                    </div>
                    <div className="testimonial-content">
                      <p className="text">{testimonial.description}</p>
                      <h6 className="author-name">{testimonial.name}</h6>
                      <span className="sub-title">{testimonial.post}</span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
