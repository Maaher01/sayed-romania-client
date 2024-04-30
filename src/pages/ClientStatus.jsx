import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../api/api";
import { useNavigate } from "react-router-dom";

import Breadcrumbs from "../components/Breadcrumbs";

const ClientStatus = () => {
  const [clientcode, setClientcode] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      formData.append("clientcode", clientcode);

      await axios.get(`${baseUrl}/clientstatusinfo/${clientcode}`, formData);

      navigate(`/clientstatus/${clientcode}`);
    } catch (err) {
      console.error("Client code does not exist", err);
    }
  };

  return (
    <div>
      <Breadcrumbs pageTitle="Client Status Search" />
      <>
        {/* Single News */}
        <section className="news-single section">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8 col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="comments-form">
                      <h2>Client Status Search</h2>
                      {/* Contact Form */}
                      <form className="form" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <i className="fa fa-user" />
                              <input
                                type="text"
                                name="clientcode"
                                placeholder="Client Code"
                                required="required"
                                onChange={(e) => setClientcode(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group button">
                              <button type="submit" className="btn primary">
                                <i className="fa fa-send" />
                                Submit Code
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      {/*/ End Contact Form */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/ End Single News */}
      </>
    </div>
  );
};

export default ClientStatus;
