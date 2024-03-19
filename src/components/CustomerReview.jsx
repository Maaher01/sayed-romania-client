const CustomerReview = () => {
	const reviewData = [
		{
			imageSrc: "././src/assets/img/avatar.png",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
			name: "John Doe",
		},
		{
			imageSrc: "././src/assets/img/avatar.png",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
			name: "John Doe",
		},
		{
			imageSrc: "././src/assets/img/avatar.png",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
			name: "John Doe",
		},
	];

	return (
		<div>
			<section className="blog section" id="blog">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<h2>Our Happy Customers</h2>
							</div>
						</div>
					</div>
					<div className="row">
						{reviewData.map((review, index) => (
							<div key={index} className="col-lg-4 col-md-6 col-12">
								<div className="single-news">
									<div className="news-head">
										<img
											src={review.imageSrc}
											style={{ height: "150px", width: "150px" }}
											alt="#"
										/>
									</div>
									<div className="news-body">
										<div className="news-content">
											<p className="text">{review.text}</p>
											<p className="name">- {review.name}</p>
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

export default CustomerReview;
