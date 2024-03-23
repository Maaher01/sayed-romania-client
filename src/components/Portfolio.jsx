const Portfolio = () => {
  const imageUrls = [
    "././src/assets/img/visa_success1.jpg",
    "././src/assets/img/visa_success2.jpg",
    "././src/assets/img/visa_success3.jpg",
    "././src/assets/img/visa_success4.jpg",
  ];

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
                {/* <p>
									Lorem ipsum dolor sit amet consectetur adipiscing elit
									praesent aliquet. pretiumts
								</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="owl-carousel portfolio-slider">
                {imageUrls.map((imageUrl, index) => (
                  <div key={index} className="single-pf">
                    <img src={imageUrl} alt="#" />
                    {/* <a href="portfolio-details.html" className="btn">
											View Details
										</a> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
