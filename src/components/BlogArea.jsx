import { useState, useEffect } from "react";

const BlogArea = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/newsfeed");
        if (response.ok) {
          const data = await response.json();
          const activeBlogs = data.data.data.filter(
            (blog) => blog._status === 1
          );
          setBlogData(activeBlogs);
          //   console.log(data.data.data);
        } else {
          throw new Error("Failed to fetch blog data");
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

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
            {blogData.map((blog, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <div className="single-news">
                  <div className="news-head">
                    <img
                      src={blog._image}
                      style={{ height: "200px" }}
                      alt="#"
                    />
                  </div>
                  <div className="news-body">
                    <div className="news-content">
                      <div className="date">{formatDate(blog._date)}</div>
                      <h2>
                        <a>{blog._title}</a>
                      </h2>
                      <p className="text">{blog._subtitle}</p>
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
