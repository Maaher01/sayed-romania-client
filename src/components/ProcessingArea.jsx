const ProcessingArea = () => {
	const servicesData = [
		{
			iconClass: "icofont icofont-stamp",
			title: "Agreement with stamp (6 stamps of 100 BDT)",
		},
		{
			iconClass: "icofont icofont-card",
			title: "Main Passport",
		},
		{
			iconClass: "icofont icofont-police",
			title: "Police Clearance",
		},
		{
			iconClass: "icofont icofont-id-card",
			title: "NID/Birth Certificate",
		},
		{
			iconClass: "icofont icofont-injection-syringe",
			title: "Vaccine Certificate",
		},
		{
			iconClass: "icofont icofont-graduate",
			title: "Education Certificate",
		},
		{
			iconClass: "icofont-business-man-alt-1",
			title: "Experience Certificate",
		},
		{
			iconClass: "icofont icofont-image",
			title: "Picture (35x45 lab print)",
		},
	];

	return (
		<div>
			<section className="services section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<h2>Processing Steps</h2>
								<i
									className="icofont-airplane-alt"
									style={{ fontSize: "24px", color: "#002a7b" }}
								></i>
								<p>
									Lorem ipsum dolor sit amet consectetur adipiscing elit
									praesent aliquet. pretiumts
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						{servicesData.map((service, index) => (
							<div key={index} className="col-lg-4 col-md-6 col-12">
								<div className="single-service">
									<i className={service.iconClass} />
									<h4>
										<a href={service.link}>{service.title}</a>
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

export default ProcessingArea;
