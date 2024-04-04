import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import MenuContext from "../context/MenuContext";
import CompanyContext from "../context/CompanyContext";
import axios from "axios";
import { baseUrl } from "../api/api";

const Footer = () => {
  const { menus } = useContext(MenuContext);
  const { companyInfo } = useContext(CompanyContext);
  const [socialData, setSocialData] = useState([]);

  useEffect(() => {
    const fetchSocialData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/sociallink`);
        const data = await response.data.data.data;
        setSocialData(data);
      } catch (error) {
        console.error("Error fetching social data:", error);
      }
    };

    fetchSocialData();
  }, []);

  return (
    <div>
      <footer id="footer" className="footer ">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-footer">
                  <h2>About Us</h2>
                  <p>
                    Lorem ipsum dolor sit am consectetur adipisicing elit do
                    eiusmod tempor incididunt ut labore dolore magna.
                  </p>
                  {/* Social */}
                  <ul className="social">
                    {socialData?.map((link) => (
                      <li key={link.id}>
                        <Link to={link._url} target="_blank">
                          <i className={link._title} />
                        </Link>
                      </li>
                    ))}
                    ;
                  </ul>
                  {/* End Social */}
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h2>Quick Links</h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        {menus?.map((link, index) => (
                          <li key={index}>
                            <Link to={link._url}>
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              {link._title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* <div className="col-lg-6 col-md-6 col-12">
											<ul>
												<li>
													<a href="#">
														<i
															className="fa fa-caret-right"
															aria-hidden="true"
														/>
														Consuling
													</a>
												</li>
												<li>
													<a href="#">
														<i
															className="fa fa-caret-right"
															aria-hidden="true"
														/>
														Finance
													</a>
												</li>
												<li>
													<a href="#">
														<i
															className="fa fa-caret-right"
															aria-hidden="true"
														/>
														Testimonials
													</a>
												</li>
												<li>
													<a href="#">
														<i
															className="fa fa-caret-right"
															aria-hidden="true"
														/>
														FAQ
													</a>
												</li>
												<li>
													<Link to="contact-us">
														<i
															className="fa fa-caret-right"
															aria-hidden="true"
														/>
														Contact Us
													</Link>
												</li>
											</ul>
										</div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Dhaka Head Office</h2>
                  <i
                    className="icofont icofont-google-map"
                    style={{ fontSize: "42px", color: "#c81025" }}
                  />
                  <p>{companyInfo._description}</p>
                  <p>Mobile No: {companyInfo._phone}</p>
                  {/* <ul className="time-sidual">
										<li className="day">
											Monday - Friday <span>8.00-20.00</span>
										</li>
										<li className="day">
											Saturday <span>9.00-18.30</span>
										</li>
										<li className="day">
											Monday - Thusday <span>9.00-15.00</span>
										</li>
									</ul> */}
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-6 col-12">
								<div className="single-footer">
									<h2>Newsletter</h2>
									<p>
										subscribe to our newsletter to get allour news in your
										inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing
										elit,
									</p>
									<form
										action="mail/mail.php"
										method="get"
										target="_blank"
										className="newsletter-inner"
									>
										<input
											name="email"
											placeholder="Email Address"
											className="common-input"
											onfocus="this.placeholder = ''"
											onblur="this.placeholder = 'Your email address'"
											required=""
											type="email"
										/>
										<button className="button">
											<i className="icofont icofont-paper-plane" />
										</button>
									</form>
								</div>
							</div> */}
            </div>
          </div>
        </div>
        {/*/ End Footer Top */}
        {/* Copyright */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="copyright-content">
                  <p>
                    © Copyright 2024 | All Rights Reserved by{" "}
                    <a href="https://www.softintechnology.com" target="_blank">
                      softintechnology.com
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Copyright */}
      </footer>
    </div>
  );
};

export default Footer;
