const BlogArea = () => {
  const blogsData = [
    {
      imageSrc: "././src/assets/img/blog1.jpg",
      date: "22 Aug, 2020",
      title: "We have announced our new product.",
      link: "blog-single.html",
      text: "Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.",
    },
    {
      imageSrc: "././src/assets/img/blog2.jpg",
      date: "15 Jul, 2020",
      title: "Top five ways for solving teeth problems.",
      link: "blog-single.html",
      text: "Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.",
    },
    {
      imageSrc: "././src/assets/img/blog3.jpg",
      date: "05 Jan, 2020",
      title: "We provide highly business solutions.",
      link: "blog-single.html",
      text: "Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.",
    },
  ];

  return (
    <div>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Keep up with Our Most Recent Medical News.</h2>
                <img src="././src/assets/img/section-img.png" alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {blogsData.map((blog, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <div className="single-news">
                  <div className="news-head">
                    <img src={blog.imageSrc} alt="#" />
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
