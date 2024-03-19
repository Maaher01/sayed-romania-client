import { Link } from "react-router-dom";

const Slider = () => {
	return (
		<section className="slider">
			<div className="hero-slider">
				{/* Start Single Slider */}
				<div
					className="single-slider"
					style={{
						backgroundImage: 'url("././src/assets/img/overseas-manpower.jpg")',
					}}
				>
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="text">
									<h1>
										<span>Sayed Romania </span>- The leading recruiting agency
									</h1>
									<p>
										As a one of the leading recruiting agencies in Bangladesh,{" "}
										we are currently working with Romania
									</p>
									<div className="button">
										<Link to="portfolio-details" className="btn">
											About Us
										</Link>
										<Link to="contact-us" className="btn primary">
											Conatct Us
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Single Slider */}
				{/* Start Single Slider */}
				<div
					className="single-slider"
					style={{
						backgroundImage: 'url("././src/assets/img/slider2.jpg")',
					}}
				>
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="text">
									<h1>
										<span>Sayed Romania </span>- The leading recruiting agency
									</h1>
									<p>
										As a one of the leading recruiting agencies in Bangladesh,
										we are currently working with Romania{" "}
									</p>
									<div className="button">
										<Link to="portfolio-details" className="btn">
											About Us
										</Link>
										<Link to="contact-us" className="btn primary">
											Conatct Us
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Start End Slider */}
				{/* Start Single Slider */}
				<div
					className="single-slider"
					style={{
						backgroundImage: 'url("././src/assets/img/slider1.jpg")',
					}}
				>
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="text">
									<h1>
										<span>Sayed Romania </span>- The leading recruiting agency
									</h1>
									<p>
										As a one of the leading recruiting agencies in Bangladesh,
										we are currently working with Romania{" "}
									</p>
									<div className="button">
										<Link to="portfolio-details" className="btn">
											About Us
										</Link>
										<Link to="contact-us" className="btn primary">
											Conatct Us
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Single Slider */}
			</div>
		</section>
	);
};

export default Slider;
