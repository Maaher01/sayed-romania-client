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
						<div className="single-news row">
							<div className="news-head col-lg-4 col-md-12">
								<img
									src="././src/assets/img/chairman-img.jpeg"
									style={{
										height: "350px",
										width: "300px",
										margin: "30px 0",
									}}
									alt="#"
								/>
							</div>
							<div className="news-body col-lg-8 col-md-12">
								<div className="news-content">
									<h2 className="chairman">Sayed Ahmed Ojjul</h2>
									<p className="text">
										ASSALAMU ALAIKUM. I Warmly Welcome You All To My Company,
										SAYED ROMANIA OVERSEAS LTD. RL NO 2663 (YOUR TRUSTED
										PARTNER). Thank You For Spending Your Valuable Time Going
										Through My Website. I Hope That Once You Go Through The
										Entire Website, You Will Not Return Empty-Handed. In This
										Competitive Era Of Business, Competition And Trust Are
										Inversely Related To Each Other. As Competition Increases,
										The Trust Of Clients Decreases As They Tend To Be In A
										Dilemma About Which Company To Trust. Therefore, SAYED
										ROMANIA OVERSEAS LTD. Is Here To Secure Your Trust With Its
										Top-Notch Service. I Love Traveling A Lot And Know The
										Essentials Of Its Services. I Have Made This Company Fulfill
										All The Essentials Of Traveling.
									</p>
									<p className="text">
										SAYED ROMANIA OVERSEAS LTD. Invites You To Try Their Umrah
										Packages From Bangladesh To Perform Your Holy Umrah. With
										The Help Of Our Expert, Professional, And Religious Guide,
										You Will Be Able To Complete Your Umrah Perfectly As It
										Should Be Done. SAYED ROMANIA OVERSEAS LTD. Ensures Safe And
										Relaxes Traveling Like Never.
									</p>
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
