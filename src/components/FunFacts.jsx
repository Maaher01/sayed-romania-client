const FunFacts = () => {
	const funData = [
		{
			iconClass: "icofont-simple-smile",
			counter: 4000,
			text: "Happy customers",
		},
		{
			iconClass: "icofont icofont-home",
			counter: 3000,
			text: "Recruitments",
		},
		{
			iconClass: "icofont icofont-user-alt-3",
			counter: 500,
			text: "Skilled Agents",
		},
		{
			iconClass: "icofont icofont-table",
			counter: 30,
			text: "Years of Experience",
		},
	];

	return (
		<div>
			<div id="fun-facts" className="fun-facts section overlay">
				<div className="container">
					<div className="row">
						{funData.map((fun, index) => (
							<div key={index} className="col-lg-3 col-md-6 col-12">
								<div className="single-fun">
									<i className={fun.iconClass} />
									<div className="content">
										<span className="counter">{fun.counter}</span>
										<p>{fun.text}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FunFacts;
