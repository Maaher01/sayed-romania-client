import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import CompanyContext from "../context/CompanyContext";
import axios from "axios";

const Navbar = () => {
  const { companyInfo } = useContext(CompanyContext);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/menu");
        const data = response.data.data.data;
        const activeMenus = data.filter((menu) => menu._status === 1);
        setMenuData(activeMenus);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchMenuData();
  }, [companyInfo]);

  return (
    <>
      {/* Header Area */}
      <header className="header">
        {" "}
        {/* Add key to parent div */}
        {/* Topbar */}
        <div className="topbar">
          <div className="container">
            <div className="d-flex justify-content-end row">
              <div className="col-lg-6 col-md-7 col-12">
                {/* Top Contact */}
                <ul className="top-contact">
                  <li>
                    <i className="fa fa-phone" />
                    {companyInfo._phone}
                  </li>
                  {/* <li>
                        <i className="fa fa-envelope" />
                        <a href={`mailto:${info._email}`}>{info._email}</a>
                      </li> */}
                </ul>
                {/* End Top Contact */}
              </div>
            </div>
          </div>
        </div>
        {/* End Topbar */}
        {/* Header Inner */}
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div
                  className="col-lg-3 col-md-3 col-12"
                  style={{ background: "white" }}
                >
                  {/* Start Logo */}
                  <div className="logo">
                    <a href="/">
                      <img src={companyInfo._image} alt="#" />
                    </a>
                  </div>
                  {/* End Logo */}
                  {/* Mobile Nav */}
                  <div className="mobile-nav" />
                  {/* End Mobile Nav */}
                </div>
                <div className="col-lg-7 col-md-9 col-12">
                  {/* Main Menu */}
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        {menuData.map((link, index) => (
                          <li key={index}>
                            <Link to={link._url}>{link._title}</Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  {/*/ End Main Menu */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Header Inner */}
      </header>
    </>
  );
};

export default Navbar;
