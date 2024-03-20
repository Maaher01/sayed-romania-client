const Clients = () => {
	const clientImages = [
		{ imgUrl: "././src/assets/img/romania-flag.png", name: "Romania" },
		{ imgUrl: "././src/assets/img/lithuania-flag.png", name: "Lithuania" },
		{ imgUrl: "././src/assets/img/poland-flag.png", name: "Poland" },
		{ imgUrl: "././src/assets/img/hungary-flag.png", name: "Hungary" },
		{ imgUrl: "././src/assets/img/serbia-flag.png", name: "Serbia" },
		{ imgUrl: "././src/assets/img/kosovo-flag.png", name: "Kosovo" },
		{ imgUrl: "././src/assets/img/montenegro-flag.png", name: "Montenegro" },
		{ imgUrl: "././src/assets/img/macedonia-flag.png", name: "Macedonia" },
	];

	return (
		<div>
			<div className="clients overlay">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12">
							<h2 className="title">Our Clients</h2>
							<div className="owl-carousel clients-slider">
								{clientImages.map((client, index) => (
									<div key={index} className="single-clients">
										<img
											src={client.imgUrl}
											alt="#"
											style={{ height: "95px" }}
										/>
										<div className="country-name">{client.name}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clients;
