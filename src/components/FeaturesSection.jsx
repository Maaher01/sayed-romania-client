const FeaturesSection = () => {
	const featuresData = [
		{
			iconClass: "icofont icofont-business-man-alt-1",
			title: "Manpower Sourcing and Placement",
			description:
				"Over the past 30+ years, We have done more than 4000 placements in Romania. ",
		},
		{
			iconClass: "icofont icofont-people",
			title: "Bulk Internation Recruitment",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin dolor dolor, sagittis venenatis dui.",
		},
		{
			iconClass: "icofont icofont-worker",
			title: "Specialized Skill Recruitment",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin dolor dolor, sagittis venenatis dui.",
		},
	];

	return (
		<section className="Feautes section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>What we do</h2>
							<i
								className="icofont-airplane-alt"
								style={{ fontSize: "24px", color: "#002a7b" }}
							></i>
							<p>
								Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
								aliquet. pretiumts
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					{featuresData.map((feature, index) => (
						<div key={index} className="col-lg-4 col-12">
							<div
								className={`single-features ${
									index === featuresData.length - 1 ? "last" : ""
								}`}
							>
								<div className="signle-icon">
									<i className={feature.iconClass} />
								</div>
								<h3>{feature.title}</h3>
								<p>{feature.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
