import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

export const Testimonial = () => {
  const [ testimonialData, setTestimonialData ] = useState([

    {
      testimonialID: 1,
      name: 'Fajar Siddiqui',
      post: "CTO, India Today",
      description: `Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed.Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
      
      `,
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU`

    },
    {
      testimonialID: 2,
      name: 'Elon Musk',
      post: "CEO, SpaceX",
      description: `Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed.Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
      
      `,
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&usqp=CAU
      
      `

    }, {
      testimonialID: 3,
      name: 'Fiona',
      post: "Lead Designer, UIdeck",
      description: `Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed.Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
      
      `,
      photo: `
      https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&usqp=CAU
      `

    }, {
      testimonialID: 4,
      name: 'Isabela Moreira',
      post: "CEO, GrayGrids",
      description: `Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed.Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
      
      `,
      photo: 'data:image/jpeg;base64,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'

    },


  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/testimonial");
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
    autoplaySpeed: 2500,
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
            <div className="col-lg-12 p-12 m-12 bg-red slide">
              <Slider {...settings}>
                {testimonialData.map((testimonial) => (
                  <div className="testimonial-item">
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
