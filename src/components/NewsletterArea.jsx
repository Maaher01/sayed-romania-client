import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewsletterArea = () => {
  const [newsletterData, setNewsletterData] = useState([]);

  useEffect(() => {
    const fetchNewsletterData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/newsfeed");
        if (response.ok) {
          const data = await response.json();
          setSliderData(data);
          // console.log(data);
        } else {
          throw new Error("Failed to fetch slider data");
        }
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchSliderData();
  }, []);

  return (
    <div>
      <section className="newsletter section">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-12">
              {/* Start Newsletter Form */}
              <div className="subscribe-text ">
                <h6>Sign up for newsletter</h6>
                <p className="">
                  Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,
                  <br /> homero alterum.
                </p>
              </div>
              {/* End Newsletter Form */}
            </div>
            <div className="col-lg-6  col-12">
              {/* Start Newsletter Form */}
              <div className="subscribe-form ">
                <form
                  action="mail/mail.php"
                  method="get"
                  target="_blank"
                  className="newsletter-inner"
                >
                  <input
                    name="EMAIL"
                    placeholder="Your email address"
                    className="common-input"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Your email address'"
                    required=""
                    type="email"
                  />
                  <button className="btn">Subscribe</button>
                </form>
              </div>
              {/* End Newsletter Form */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterArea;
