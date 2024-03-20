import { Link } from "react-router-dom";

const Navbar = () => {
	const topLinks = [
		{ text: "About Us", link: "portfolio-details" },
		// { text: "Doctors" },
		{ text: "Contact Us", link: "contact-us" },
		{ text: "FAQ" },
	];

	const navMenus = [
		// { text: "Home", link: "/" },
		// { text: "Doctors" },
		{ text: "Services" },
		{ text: "Pages" },
		{ text: "Blogs" },
		{ text: "Contact Us", link: "contact-us" },
	];

	return (
		<>
			{/* Header Area */}
			<header className="header">
				{/* Topbar */}
				<div className="topbar">
					<div className="container">
						<div className="d-flex justify-content-between row">
							<div className="col-lg-6 col-md-5 col-12">
								{/* Contact */}
								<ul className="top-link">
									{topLinks.map((link, index) => (
										<li key={index}>
											<Link to={link.link}>{link.text}</Link>
										</li>
									))}
								</ul>
								{/* End Contact */}
							</div>
							<div className="col-lg-6 col-md-7 col-12">
								{/* Top Contact */}
								<ul className="top-contact">
									<li>
										<i className="fa fa-phone" />
										+880 1234 56789
									</li>
									<li>
										<i className="fa fa-envelope" />
										<a href="mailto:support@yourmail.com">
											support@yourmail.com
										</a>
									</li>
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
									style={{ background: "white", paddingBottom: "12px" }}
								>
									{/* Start Logo */}
									<div className="logo">
										<a href="/">
											<img src="././src/assets/icons/logo_2.jpg" alt="#" />
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
												{navMenus.map((link, index) => (
													<li key={index}>
														<Link to={link.link}>{link.text}</Link>
													</li>
												))}
											</ul>
										</nav>
									</div>
									{/*/ End Main Menu */}
								</div>
								{/* <div className="col-lg-2 col-12">
									<div className="subscribe-form">
										<form
											action="mail/mail.php"
											method="get"
											target="_blank"
											className="newsletter-inner d-flex"
										>
											<input
												name="EMAIL"
												placeholder="Your passport number"
												className="common-input"
												onfocus="this.placeholder = ''"
												onblur="this.placeholder = 'Your passport number'"
												required=""
												type="email"
											/>
											<button className="btn">Subscribe</button>
										</form>
									</div>
								</div> */}
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
