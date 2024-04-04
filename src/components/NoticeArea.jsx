import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../api/api";
import Marquee from "react-fast-marquee";

const NoticeArea = () => {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await axios.get(`${baseUrl}/section`);
        const data = response.data.data.data;
        const noticeSection = data.filter((section) => section._menuid === 9);
        console.log(noticeSection);
        setNotice(noticeSection);
      } catch (error) {
        console.error("Error fetching notice data:", error);
      }
    };

    fetchNotice();
  }, []);

  return (
    <div className="container d-flex gap-5">
      <div
        className="rounded"
        style={{
          background: "#F4CA15",
          color: "#2c2d3f",
          fontSize: "15px",
          fontWeight: "600",
          padding: "8px",
          width: "150px",
        }}
      >
        <span style={{ fontSize: "12px" }}>কোম্পানী নোটিশঃ</span>
      </div>
      {notice.length > 0 && <Marquee>{notice[0]._description}</Marquee>}
    </div>
  );
};

export default NoticeArea;
