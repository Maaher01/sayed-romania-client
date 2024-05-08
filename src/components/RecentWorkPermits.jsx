import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../api/api";
import OwlCarousel from "react-owl-carousel";

const RecentWorkPermits = () => {
  const [recentWorkPermit, setRecentWorkPermit] = useState([]);

  useEffect(() => {
    const fetchRecentWorkPermit = async () => {
      try {
        const response = await axios.get(`${baseUrl}/recentworkpermit`);
        const data = await response.data.data.data;
        const activeWorkPermits = data.filter((permit) => permit._status === 1);
        setRecentWorkPermit(activeWorkPermits);
      } catch (error) {
        console.error("Error fetching feature data:", error);
      }
    };

    fetchRecentWorkPermit();
  }, []);

  return (
    <div>
      <section className="portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Recent Work Pemits</h2>
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
                {recentWorkPermit?.map((permit) => {
                  return (
                    <div key={permit.id} className="single-pf">
                      <img src={permit._image} alt="recent_work_permits" />
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

export default RecentWorkPermits;
