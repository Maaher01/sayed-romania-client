import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../api/api";
import OwlCarousel from "react-owl-carousel";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`${baseUrl}/country`);
        const data = await response.data.data.data;
        setClients(data);
      } catch (error) {
        console.error("Error fetching client data:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="clients overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <h2 className="title">Our Clients</h2>
            <OwlCarousel
              className="owl-theme clients-slider"
              loop
              autoplay
              autoplayTimeout={3500}
              items={5}
              margin={10}
              nav
              dots={false}
              responsive={{
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 5 },
              }}
            >
              {/* Map through slider data */}
              {clients.map((client, index) => (
                <div key={index} className="single-clients">
                  <img
                    src={client._image}
                    alt={client._name}
                    style={{ height: "95px" }}
                  />
                  <div className="country-name">{client._name}</div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
