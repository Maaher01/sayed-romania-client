const OurManagement = () => {
	const managementData = [
		{
			imageSrc: "././src/assets/img/management.jpg",
			title: "Managing Director",
			text: "Many students were recently admitted to top universities in Romania",
		},
		{
			imageSrc: "././src/assets/img/management.jpg",
			title: "Founder",
			text: "Our recent placement involved 100+ workers' recruitment in Romania.",
		},
		{
			imageSrc: "././src/assets/img/management.jpg",
			title: "CEO",
			text: "We recently provided 50+ free VISAs in Romania.",
		},
	];

	return (
		<div>
			<section className="blog section" id="blog">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<h2>Our Management</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipiscing elit
									praesent aliquet. pretiumts
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						{managementData.map((blog, index) => (
							<div key={index} className="col-lg-4 col-md-6 col-12">
								<div className="single-news">
									<div className="news-head">
										<img
											src={blog.imageSrc}
											style={{ height: "180px", width: "165px" }}
											alt="#"
										/>
									</div>
									<div className="news-body">
										<div className="news-content">
											{/* <div className="date">{blog.date}</div> */}
											<h2>
												<a href={blog.link}>{blog.title}</a>
											</h2>
											<p className="text">{blog.text}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default OurManagement;
