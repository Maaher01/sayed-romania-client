import Breadcrumbs from "../components/Breadcrumbs";

const ContactUs = () => {
	const infoData = [
		{
			iconClass: "icofont icofont-google-map",
			title: "DHAKA HEAD OFFICE",
			subtitle:
				"67/1 PALTAN CHINA TOWN (10TH FLOOR) WEST TOWER, ROOM #11/10 NAYAPALTAN,DHAKA-1000,BANGLADESH MOBILE NUM: 01758374376,01612389427,01733482746",
		},
		{
			iconClass: "icofont icofont-google-map",
			title: "BRAHMANBARIA SUB OFFICE",
			subtitle:
				"ADDRESS: MASUD MARKET GROUND FLOOR,TANTAR BAZAR,AKHAURA,BANGLADESH MOBILE NUM : 01764733960, 01327407640",
		},
		{
			iconClass: "icofont icofont-google-map",
			title: "CUMILLA SUB OFFICE",
			subtitle:
				"ADDRESS : JANGALIA FURNITUE MARKET, LACKSHAM ROAD, PADUAR BAZAR, CUMILLA BANGLADESH MOBILE NUM : 01956040481, 01616364579",
		},
		{
			iconClass: "icofont icofont-google-map",
			title: "SYLHET SUB OFFICE",
			subtitle:
				"ADDRESS : BLOCK B, MAIN ROAD, HOUSE-49/A UPOSHOR, SYLHET BANGALDESH MOBILE NUM : 01838999431, 01616364579",
		},
		{
			iconClass: "icofont icofont-google-map",
			title: "JESSORE SUB OFFICE",
			subtitle:
				"ADDRESS: JESSORE NEW TOWN, BLOCK C, ROAD-02, HOUSE-46 (10 MINUTES DISTANCE FORM MONIHAR CINEMA HALL) JESSORE BANGLADESH MOBILE NUM : 01888100384, 01912981101",
		},
		{
			iconClass: "icofont icofont-google-map",
			title: "KHULNA SUB OFFICE",
			subtitle:
				"ADDRESS : 196/B, SHERE BANGLA MOR, GOLLAMARI, KHULNA MOBILE NUM : 01712101834,01718065807,01827331020",
		},
		{
			iconClass: "icofont icofont-google-map",
			title: "BAGERHAT SUB OFFICE",
			subtitle:
				"ADDRESS : UPOZELLA MOR,HOSPITAL ROAD (NEAR BY M/S KHAN ENTERPRISE) CHITOLMARI, BAGERHAT,BANGLADESH MOBILE NUM : 01712910999, 01827331020",
		},
	];

	return (
		<div>
			<Breadcrumbs pageTitle="Contact Us" />
			<section className="contact-us section">
				<div className="container">
					<div className="inner">
						<div className="row d-flex justify-content-center">
							{/* <div className="col-lg-6">
								<div className="contact-us-left">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.374835214932!2d90.4144159!3d23.734009199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9dd82cf67e5%3A0x6981b2077aa35fa0!2sSAYED%20ROMANIA%20OVERSEAS%20LTD!5e0!3m2!1sen!2sbd!4v1710835367125!5m2!1sen!2sbd"
										width="600"
										height="500"
										style={{ border: 0 }}
										loading="lazy"
										referrerpolicy="no-referrer-when-downgrade"
									></iframe>
								</div>
							</div> */}
							<div className="col-lg-8 col-md-12 col-12">
								<div className="contact-us-form">
									<h2>Contact Us</h2>
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
						<div className="section-title">
							<h2>Our Branches</h2>
							<i
								className="icofont-airplane-alt"
								style={{ fontSize: "24px", color: "#002a7b" }}
							></i>
							{/* <p>
									Lorem ipsum dolor sit amet consectetur adipiscing elit
									praesent aliquet. pretiumts
								</p> */}
						</div>
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
