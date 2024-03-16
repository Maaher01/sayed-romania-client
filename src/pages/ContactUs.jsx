import Breadcrumbs from "../components/Breadcrumbs";

const ContactUs = () => {
  const infoData = [
    {
      iconClass: "icofont icofont-ui-call",
      title: "+(000) 1234 56789",
      subtitle: "info@company.com",
    },
    {
      iconClass: "icofont-google-map",
      title: "2 Fir e Brigade Road",
      subtitle: "Chittagonj, Lakshmipur",
    },
    {
      iconClass: "icofont icofont-wall-clock",
      title: "Mon - Sat: 8am - 5pm",
      subtitle: "Sunday Closed",
    },
  ];

  return (
    <div>
      <Breadcrumbs pageTitle="Contact Us" />
      <section className="contact-us section">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-us-left">
                  {/*Start Google-map */}
                  <div id="myMap" />
                  {/*/End Google-map */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-us-form">
                  <h2>Contact With Us</h2>
                  <p>
                    If you have any questions please fell free to contact with
                    us.
                  </p>
                  {/* Form */}
                  <form className="form" method="post" action="mail/mail.php">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            required=""
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn">
                          <button className="btn" type="submit">
                            Send
                          </button>
                        </div>
                        <div className="checkbox">
                          <label className="checkbox-inline" htmlFor={2}>
                            <input name="news" id={2} type="checkbox" />
                            Do you want to subscribe our Newsletter ?
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/*/ End Form */}
                </div>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="row">
              {infoData.map((info, index) => (
                <div key={index} className="col-lg-4 col-12">
                  <div className="single-info">
                    <i className={info.iconClass} />
                    <div className="content">
                      <h3>{info.title}</h3>
                      <p>{info.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
