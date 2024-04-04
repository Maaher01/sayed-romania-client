import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../api/api";

const CustomerReview = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/review`);
        const data = await response.data.data.data;
        setReviewData(data);
      } catch (error) {
        console.error("Error fetching review data:", error);
      }
    };

    fetchReviewData();
  }, []);

  return (
    <div>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Our Happy Customers</h2>
                <i
                  className="icofont-airplane-alt"
                  style={{ fontSize: "24px", color: "#002a7b" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="row">
            {reviewData?.map((review, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <div className="single-news">
                  <div className="news-head">
                    <img
                      src={review._image}
                      style={{ height: "175px", width: "250px" }}
                      alt="#"
                    />
                  </div>
                  {/* <div className="star d-flex justify-content-center">
										<i class="fa-solid fa-star"></i>
										<i class="fa-solid fa-star"></i>
										<i class="fa-solid fa-star"></i>
										<i class="fa-solid fa-star"></i>
										<i class="fa-solid fa-star"></i>
									</div> */}
                  <div className="news-body">
                    <div className="news-content">
                      <p className="text">{review._description}</p>
                      <p className="name">- {review._title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReview;
