const FunFacts = () => {
  const funData = [
    {
      iconClass: "icofont icofont-home",
      counter: 3468,
      text: "Hospital Rooms",
    },
    {
      iconClass: "icofont icofont-user-alt-3",
      counter: 557,
      text: "Specialist Doctors",
    },
    {
      iconClass: "icofont-simple-smile",
      counter: 4379,
      text: "Happy Patients",
    },
    {
      iconClass: "icofont icofont-table",
      counter: 32,
      text: "Years of Experience",
    },
  ];

  return (
    <div>
      <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
          <div className="row">
            {funData.map((fun, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-12">
                <div className="single-fun">
                  <i className={fun.iconClass} />
                  <div className="content">
                    <span className="counter">{fun.counter}</span>
                    <p>{fun.text}</p>
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
