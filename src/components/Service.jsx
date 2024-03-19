const Service = () => {
	const servicesData = [
		{
			iconClass: "icofont icofont-prescription",
			title: "General Treatment",
			link: "service-details.html",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
		},
		{
			iconClass: "icofont icofont-tooth",
			title: "Teeth Whitening",
			link: "service-details.html",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
		},
		{
			iconClass: "icofont icofont-heart-alt",
			title: "Heart Surgery",
			link: "service-details.html",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
		},
		{
			iconClass: "icofont icofont-listening",
			title: "Ear Treatment",
			link: "service-details.html",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
		},
		{
			iconClass: "icofont icofont-eye-alt",
			title: "Vision Problems",
			link: "service-details.html",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
		},
		{
			iconClass: "icofont icofont-blood",
			title: "Blood Transfusion",
			link: "service-details.html",
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
								<h2>We Offer Different Services To Improve Your Health</h2>
								<img src="././src/assets/img/section-img.png" alt="#" />
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

export default Service;
