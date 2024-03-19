const ScheduleArea = () => {
	const schedules = [
		{
			iconClass: "icofont-folder",
			title: "Analysis of Customer Requirements",
			description: "Accross all major countries",
		},
		{
			iconClass: "icofont-prescription",
			title: "Project Design and Outsourcing",
			description: "Straight to the point",
		},
		{
			iconClass: "icofont-business-man-alt-1",
			title: "Cooperation with embassy and recruitment channels",
			description: "Prestigious jobs guaranteed",
		},
	];

	return (
		<section className="schedule">
			<div className="container">
				<div className="schedule-inner">
					<div className="row">
						{schedules.map((schedule, index) => (
							<div key={index} className="col-lg-4 col-md-6 col-12">
								<div
									className={`single-schedule ${
										index === 0
											? "first"
											: index === schedules.length - 1
											? "last"
											: "middle"
									}`}
								>
									<div className="inner">
										<div className="icon">
											<i className={schedule.iconClass} />
										</div>
										<div className="single-content">
											{/* <span>{schedule.title}</span> */}
											<h4>{schedule.title}</h4>
											{schedule.description && <p>{schedule.description}</p>}
											{schedule.timeSlots && (
												<ul className="time-sidual">
													{schedule.timeSlots.map((timeSlot, i) => (
														<li key={i} className="day">
															{timeSlot.day} <span>{timeSlot.time}</span>
														</li>
													))}
												</ul>
											)}
											{/* <a href="#">
												LEARN MORE
												<i className="fa fa-long-arrow-right" />
											</a> */}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ScheduleArea;
