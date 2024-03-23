import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/slider");
        if (response.ok) {
          const data = await response.json();
          const activeSlides = data.data.data.filter(
            (slider) => slider._status === 1
          );
          setSliderData(activeSlides);
        } else {
          throw new Error("Failed to fetch slider data");
        }
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchSliderData();
  }, []);

  const handleSliderTransition = () => {
    const nextSlider =
      currentSlider === sliderData.length - 1 ? 0 : currentSlider + 1;
    setCurrentSlider(nextSlider);
  };

  useEffect(() => {
    const interval = setInterval(handleSliderTransition, 2000);
    return () => clearInterval(interval);
  }, [currentSlider]);

  return (
    <section className="slider">
      <div className="hero-slider">
        {/* Map through slider data */}
        {sliderData.map((slider, index) => (
          <div
            key={index}
            className={`single-slider ${
              index === currentSlider ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${slider._image})` }}
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
                      <Link to="portfolio-details" className="btn">
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
      </div>
    </section>
  );
};

export default Slider;
