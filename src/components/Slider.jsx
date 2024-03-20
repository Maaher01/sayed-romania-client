import { useState } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
	const sliderData = [
		{
			backgroundImage: "././src/assets/img/overseas-manpower.jpg",
			title: "The leading recruiting agency",
			description:
				"As one of the leading recruiting agencies in Bangladesh, we are currently working with Romania",
		},
		{
			backgroundImage: "././src/assets/img/slider2.jpg",
			title: "The leading recruiting agency",
			description:
				"As one of the leading recruiting agencies in Bangladesh, we are currently working with Romania",
		},
		{
			backgroundImage: "././src/assets/img/slider1.jpg",
			title: "The leading recruiting agency",
			description:
				"As one of the leading recruiting agencies in Bangladesh, we are currently working with Romania",
		},
	];

	const [currentSlider, setCurrentSlider] = useState(0);

	return (
		<section className="slider">
			<div className="hero-slider">
				{/* Map through slider data */}
				{sliderData.map((slider, index) => (
					<div
						key={index}
						className={`single-slider ${
							index === currentSlider ? "active" : ""
						}`}
						style={{ backgroundImage: `url(${slider.backgroundImage})` }}
					>
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<div className="text">
										<h1>
											<span>Sayed Romania </span>- {slider.title}
										</h1>
										<p>{slider.description}</p>
										<div className="button">
											<Link to="portfolio-details" className="btn">
												About Us
											</Link>
											<Link to="contact-us" className="btn primary">
												Contact Us
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Slider;
