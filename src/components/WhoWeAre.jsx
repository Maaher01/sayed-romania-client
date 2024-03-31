import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../api/api";
import ReactPlayer from "react-player";

const WhoWeAre = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await axios.get(`${baseUrl}/section`);
        const data = response.data.data.data;
        const videoSection = data.filter((section) => section._menuid === 8);
        console.log(videoSection);
        setVideo(videoSection);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoUrl();
  }, []);

  return (
    <section className="why-choose section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Who We Are</h2>
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
          <div className="col-lg-6 col-12">
            {/* Start Choose Left */}
            <div className="choose-left">
              {/* <h3>Who We Are</h3> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas pharetra antege vel est lobortis, a commodo magna
                rhoncus. In quis nisi non emet quam pharetra commodo.{" "}
              </p>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.{" "}
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list">
                    <li>
                      <i className="fa fa-caret-right" />
                      Maecenas vitae luctus nibh.{" "}
                    </li>
                    <li>
                      <i className="fa fa-caret-right" />
                      Duis massa massa.
                    </li>
                    <li>
                      <i className="fa fa-caret-right" />
                      Aliquam feugiat interdum.
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list">
                    <li>
                      <i className="fa fa-caret-right" />
                      Maecenas vitae luctus nibh.{" "}
                    </li>
                    <li>
                      <i className="fa fa-caret-right" />
                      Duis massa massa.
                    </li>
                    <li>
                      <i className="fa fa-caret-right" />
                      Aliquam feugiat interdum.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Choose Left */}
          </div>
          <div className="col-lg-6 col-12">
            {/* Start Choose Rights */}
            <div className="choose-right">
              {video.length > 0 && (
                <div className="video-image">
                  {/* Video Area */}
                  <ReactPlayer
                    url={video[0]._videourl}
                    style={{ maxWidth: "100%", height: "auto" }}
                    controls="true"
                  />
                  {/*/ End Video Area */}
                </div>
              )}
            </div>
            {/* End Choose Rights */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
