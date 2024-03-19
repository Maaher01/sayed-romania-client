const Breadcrumbs = ({ pageTitle }) => {
	return (
		<div>
			<div className="breadcrumbs overlay">
				<div className="container">
					<div className="bread-inner">
						<div className="row">
							<div className="col-12">
								<h2>{pageTitle}</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Breadcrumbs;
