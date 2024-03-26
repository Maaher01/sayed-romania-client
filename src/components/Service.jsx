import { Link } from "react-router-dom";

const Service = () => {
	const servicesData = [
		{
			iconClass: "icofont icofont-card",
			title: "VISA processing",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
		},
		{
			iconClass: "icofont icofont-coconut-water",
			title: "Holiday Packages",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
		},
		{
			iconClass: "icofont icofont-package",
			title: "Hajj & Umrah Packages",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
		},
	];

	return (
		<div>
			<section className="services section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<h2>We Offer Many Other Services</h2>
								<i
									className="icofont-airplane-alt"
									style={{ fontSize: "24px", color: "#002a7b" }}
								></i>
								{/* <p>
									Lorem ipsum dolor sit amet consectetur adipiscing elit
									praesent aliquet. pretiumts
								</p> */}
							</div>
						</div>
					</div>
					<div className="row">
						{servicesData.map((service, index) => (
							<div key={index} className="col-lg-4 col-md-6 col-12">
								<div className="single-service">
									<i className={service.iconClass} />
									<h4>
										<Link to={service.link}>{service.title}</Link>
									</h4>
									<p>{service.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Service;
