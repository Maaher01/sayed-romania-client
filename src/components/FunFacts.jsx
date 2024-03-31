import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../api/api";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const FunFacts = () => {
  const [counters, setCounters] = useState([]);
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    const fetchCounters = async () => {
      try {
        const response = await axios.get(`${baseUrl}/counter`);
        const data = response.data.data;
        setCounters(data);
      } catch (error) {
        console.error("Error fetching feature data:", error);
      }
    };

    fetchCounters();
  }, []);

  return (
    <div>
      <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
          <div className="row">
            {counters.map((counter, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-12">
                <div className="single-fun">
                  <i className="icofont-simple-smile" />
                  <div className="content">
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      {counterOn && (
                        <CountUp
                          className="counter"
                          end={counter._amount}
                          duration={2.75}
                        />
                      )}
                    </ScrollTrigger>

                    <p>{counter._name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
