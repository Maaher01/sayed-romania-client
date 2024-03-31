import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../api/api";

const ScheduleArea = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axios.get(`${baseUrl}/section`);
        const data = response.data.data.data;
        const featureSection = data.filter((section) => section._menuid === 7);
        console.log(featureSection);
        setFeatures(featureSection);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <section className="schedule">
      <div className="container">
        <div className="schedule-inner">
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <div
                  className={`single-schedule ${
                    index === 0
                      ? "first"
                      : index === features.length - 1
                      ? "last"
                      : "middle"
                  }`}
                >
                  <div className="inner">
                    <div className="icon">
                      <i className={feature._description} />
                    </div>
                    <div className="single-content">
                      {/* <span>{schedule.title}</span> */}
                      <h4>{feature._title}</h4>
                      <p>{feature._subtitle}</p>
                      {/* {schedule.timeSlots && (
                        <ul className="time-sidual">
                          {schedule.timeSlots.map((timeSlot, i) => (
                            <li key={i} className="day">
                              {timeSlot.day} <span>{timeSlot.time}</span>
                            </li>
                          ))}
                        </ul>
                      )} */}
                      {/* <a href="#">
												LEARN MORE
												<i className="fa fa-long-arrow-right" />
											</a> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleArea;
