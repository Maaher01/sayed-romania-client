import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CompanyContext from "../context/CompanyContext";
import MenuContext from "../context/MenuContext";

const Navbar = () => {
	const { companyInfo } = useContext(CompanyContext);
	const { menus } = useContext(MenuContext);
	const [slickMenus, setSlickMenus] = useState([]);

	useEffect(() => {
		const mappedMenus = menus.map((menu, index) => ({
			id: index,
			name: menu._title,
			url: menu._url,
		}));
		setSlickMenus(mappedMenus);
	}, [menus]);

	useEffect(() => {
		if (slickMenus.length > 0) {
			$(".menu").slicknav({
				prependTo: ".mobile-nav",
				duration: 300,
				closeOnClick: true,
			});
		}
	}, [slickMenus]);

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
							<div className="row d-flex justify-content-between">
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
											<ul className="nav menu d-flex justify-content-end">
												{menus.map((link, index) => (
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
