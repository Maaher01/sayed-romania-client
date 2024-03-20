import { useState } from "react";

const ChairmanMessage = ({ text, maxLength }) => {
	const [showFullText, setShowFullText] = useState(false);

	const toggleText = () => {
		setShowFullText(!showFullText);
	};

	const truncatedText = text.slice(0, maxLength);
	const displayText = showFullText ? text : truncatedText;

	return (
		<div>
			<section className="blog section" id="blog">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<h2>Message from Chairman</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipiscing elit
									praesent aliquet. pretiumts
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="single-news row">
							<div className="news-head col-lg-4 col-md-12">
								<img
									src="././src/assets/img/chairman-img.jpeg"
									style={{
										height: "350px",
										width: "300px",
										marginTop: "30px",
									}}
									alt="#"
								/>
							</div>
							<div className="news-body col-lg-8 col-md-12">
								<div className="news-content">
									<p className="text">
										{displayText}
										{!showFullText ? (
											<button
												className="see-btn"
												onClick={toggleText}
												style={{
													color: "blue",
													border: "none",
													background: "transparent",
												}}
											>
												...See More
											</button>
										) : (
											<button
												className="see-btn"
												onClick={toggleText}
												style={{
													color: "blue",
													border: "none",
													background: "transparent",
												}}
											>
												...See Less
											</button>
										)}
									</p>
								</div>
							</div>
						</div>
						{/* </div> */}
						{/* ))} */}
					</div>
				</div>
			</section>
		</div>
	);
};

export default ChairmanMessage;
