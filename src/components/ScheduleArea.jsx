import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../api/api";

const ScheduleArea = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axios.get(`${baseUrl}/section`);
        const data = await response.data.data.data;
        const featureSection = data.filter((section) => section._menuid === 7);
        setFeatures(featureSection);
      } catch (error) {
        console.error("Error fetching feature data:", error);
      }
    };

    fetchFeatures();
  }, []);

  const colors = ["first", "middle", "last"];

  return (
    <section className="schedule">
      <div className="container">
        <div className="schedule-inner">
          <div className="row">
            {features?.map((feature, index) => {
              const colorClass = colors[index % colors.length];
              return (
                <div key={index} className="col-lg-4 col-md-6 col-12">
                  <div className={`single-schedule ${colorClass}`}>
                    <div className="inner">
                      <div className="icon">
                        <i className={feature._description} />
                      </div>
                      <div className="single-content">
                        <h4>{feature._title}</h4>
                        <p>{feature._subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleArea;
