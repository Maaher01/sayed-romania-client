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
									{/* <iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.374835214932!2d90.4144159!3d23.734009199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9dd82cf67e5%3A0x6981b2077aa35fa0!2sSAYED%20ROMANIA%20OVERSEAS%20LTD!5e0!3m2!1sen!2sbd!4v1710835367125!5m2!1sen!2sbd"
										width="600"
										height="450"
										style="border:0;"
										allowfullscreen=""
										loading="lazy"
										referrerpolicy="no-referrer-when-downgrade"
									></iframe> */}
									{/*/End Google-map */}
								</div>
							</div>
							<div className="col-lg-6">
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
