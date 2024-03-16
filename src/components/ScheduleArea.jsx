const ScheduleArea = () => {
  const schedules = [
    {
      iconClass: "fa fa-ambulance",
      title: "Emergency Cases",
      description:
        "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.",
    },
    {
      iconClass: "icofont-prescription",
      title: "Doctors Timetable",
      description:
        "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.",
    },
    {
      iconClass: "icofont-ui-clock",
      title: "Opening Hours",
      timeSlots: [
        { day: "Monday - Friday", time: "8.00-20.00" },
        { day: "Saturday", time: "9.00-18.30" },
        { day: "Monday - Thursday", time: "9.00-15.00" },
      ],
    },
  ];

  return (
    <section className="schedule">
      <div className="container">
        <div className="schedule-inner">
          <div className="row">
            {schedules.map((schedule, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <div
                  className={`single-schedule ${
                    index === 0
                      ? "first"
                      : index === schedules.length - 1
                      ? "last"
                      : "middle"
                  }`}
                >
                  <div className="inner">
                    <div className="icon">
                      <i className={schedule.iconClass} />
                    </div>
                    <div className="single-content">
                      <span>{schedule.title}</span>
                      <h4>{schedule.title}</h4>
                      {schedule.description && <p>{schedule.description}</p>}
                      {schedule.timeSlots && (
                        <ul className="time-sidual">
                          {schedule.timeSlots.map((timeSlot, i) => (
                            <li key={i} className="day">
                              {timeSlot.day} <span>{timeSlot.time}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <a href="#">
                        LEARN MORE
                        <i className="fa fa-long-arrow-right" />
                      </a>
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
