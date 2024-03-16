const FeaturesSection = () => {
  const featuresData = [
    {
      iconClass: "icofont icofont-ambulance-cross",
      title: "Emergency Help",
      description:
        "Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.",
    },
    {
      iconClass: "icofont icofont-medical-sign-alt",
      title: "Enriched Pharmacy",
      description:
        "Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.",
    },
    {
      iconClass: "icofont icofont-stethoscope",
      title: "Medical Treatment",
      description:
        "Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.",
    },
  ];

  return (
    <section className="Feautes section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>We Are Always Ready to Help You &amp; Your Family</h2>
              <img src="././src/assets/img/section-img.png" alt="#" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
                aliquet. pretiumts
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {featuresData.map((feature, index) => (
            <div key={index} className="col-lg-4 col-12">
              <div
                className={`single-features ${
                  index === featuresData.length - 1 ? "last" : ""
                }`}
              >
                <div className="signle-icon">
                  <i className={feature.iconClass} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
