import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../api/api";
import OwlCarousel from "react-owl-carousel";

const Portfolio = () => {
  const [recentVisa, setRecentVisa] = useState([]);

  useEffect(() => {
    const fetchRecentVisa = async () => {
      try {
        const response = await axios.get(`${baseUrl}/recentvisasuccess`);
        const data = await response.data.data.data;
        const activeVisas = data.filter((visa) => visa._status === 1);
        setRecentVisa(activeVisas);
      } catch (error) {
        console.error("Error fetching feature data:", error);
      }
    };

    fetchRecentVisa();
  }, []);

  return (
    <div>
      <section className="portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Recent Visa Successes</h2>
                <i
                  className="icofont-airplane-alt"
                  style={{ fontSize: "24px", color: "#002a7b" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12">
              <OwlCarousel
                className="owl-carousel portfolio-slider"
                loop
                autoplay
                autoplayTimeout={3500}
                items={4}
                margin={10}
                nav
                dots={false}
                responsive={{
                  0: { items: 1 },
                  768: { items: 2 },
                  992: { items: 3 },
                  1200: { items: 4 },
                }}
              >
                {recentVisa?.map((visa) => {
                  return (
                    <div key={visa.id} className="single-pf">
                      <img src={visa._image} alt="recent_visa" />
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
