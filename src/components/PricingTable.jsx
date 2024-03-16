const PricingTable = () => {
  const tablesData = [
    {
      iconClass: "icofont icofont-ui-cut",
      title: "Plastic Surgery",
      price: "$199",
      listItems: [
        { text: "Lorem ipsum dolor sit", className: "" },
        { text: "Cubitur sollicitudin fentum", className: "" },
        { text: "Nullam interdum enim", className: "cross" },
        { text: "Donec ultricies metus", className: "cross" },
        { text: "Pellentesque eget nibh", className: "cross" },
      ],
    },
    {
      iconClass: "icofont icofont-tooth",
      title: "Teeth Whitening",
      price: "$299",
      listItems: [
        { text: "Lorem ipsum dolor sit", className: "" },
        { text: "Cubitur sollicitudin fentum", className: "" },
        { text: "Nullam interdum enim", className: "" },
        { text: "Donec ultricies metus", className: "cross" },
        { text: "Pellentesque eget nibh", className: "cross" },
      ],
    },
    {
      iconClass: "icofont icofont-heart-beat",
      title: "Heart Surgery",
      price: "$399",
      listItems: [
        { text: "Lorem ipsum dolor sit", className: "" },
        { text: "Cubitur sollicitudin fentum", className: "" },
        { text: "Nullam interdum enim", className: "" },
        { text: "Donec ultricies metus", className: "" },
        { text: "Pellentesque eget nibh", className: "" },
      ],
    },
  ];

  return (
    <div>
      <section className="pricing-table section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Provide You The Best Treatment In Resonable Price</h2>
                <img src="././src/assets/img/section-img.png" alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {tablesData.map((table, index) => (
              <div key={index} className="col-lg-4 col-md-12 col-12">
                <div className="single-table">
                  <div className="table-head">
                    <div className="icon">
                      <i className={table.iconClass} />
                    </div>
                    <h4 className="title">{table.title}</h4>
                    <div className="price">
                      <p className="amount">
                        {table.price}
                        <span>/ Per Visit</span>
                      </p>
                    </div>
                  </div>
                  <ul className="table-list">
                    {table.listItems.map((item, i) => (
                      <li key={i} className={item.className}>
                        <i className="icofont icofont-ui-check" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                  <div className="table-bottom">
                    <a className="btn" href="#">
                      Book Now
                    </a>
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

export default PricingTable;
