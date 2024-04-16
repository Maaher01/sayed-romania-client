import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../api/api";
import OwlCarousel from "react-owl-carousel";

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/slider`);
        const data = await response.data.data.data;
        const activeSlides = data.filter((slider) => slider._status === 1);
        setSliderData(activeSlides);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchSliderData();
  }, []);

  return (
    <section className="slider">
      <OwlCarousel
        className="hero-slider"
        loop
        autoplay
        autoplayTimeout={3500}
        nav
        items={1}
      >
        {/* Map through slider data */}
        {sliderData?.map((slider, index) => (
          <div
            key={index}
            className="single-slider"
            style={{
              backgroundImage: `url(${slider._image})`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="text">
                    <h1>
                      <span>{slider._title}</span>
                    </h1>
                    <p>{slider._subtitle}</p>
                    <div className="button">
                      <Link to="portfoliodetail" className="btn">
                        About Us
                      </Link>
                      <Link to="contact-us" className="btn primary">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
};

export default Slider;
