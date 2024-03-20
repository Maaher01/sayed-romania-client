const BlogArea = () => {
	const blogsData = [
		{
			imageSrc: "././src/assets/img/student.avif",
			date: "22 Aug, 2020",
			title: "Student Admissions in Romania",
			link: "blog-single.html",
			text: "Many students were recently admitted to top universities in Romania",
		},
		{
			imageSrc: "././src/assets/img/workers.jpg",
			date: "15 Jul, 2020",
			title: "Worker Recruitments in Romania",
			link: "blog-single.html",
			text: "Our recent placement involved 100+ workers' recruitment in Romania.",
		},
		{
			imageSrc: "././src/assets/img/free-visa.jpg",
			date: "05 Jan, 2020",
			title: "Free VISAs in Romania",
			link: "blog-single.html",
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
								<h2>Keep up with Our Most Recent News.</h2>
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
						{blogsData.map((blog, index) => (
							<div key={index} className="col-lg-4 col-md-6 col-12">
								<div className="single-news">
									<div className="news-head">
										<img
											src={blog.imageSrc}
											style={{ height: "200px" }}
											alt="#"
										/>
									</div>
									<div className="news-body">
										<div className="news-content">
											<div className="date">{blog.date}</div>
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

export default BlogArea;
