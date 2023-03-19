
import { useMemo, useState, useEffect } from "react";
import axios from "axios";

export const Testimonial = () => {

  const [ testimonialData, setTestimonialData ] = useState([]);

  const memoizedTestimonials = useMemo(() => {
    return testimonialData.map((testimonial) => ({
      testimonialID: testimonial.testimonialID,
      photo: testimonial.photo,
      name: testimonial.name,
      post: testimonial.post,
      description: testimonial.description,
    }));
  }, [ testimonialData ]);

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

  return (
    <div>
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
                {memoizedTestimonials.map((testimonial) => (
                  <div className="col-lg-4" key={testimonial.testimonialID}>
                    <div className="single-testimonial mt-30 mb-30 text-center">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


