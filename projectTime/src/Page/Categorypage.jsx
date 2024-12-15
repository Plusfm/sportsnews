import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Categorypage.css";

const Categorypage = () => {
  const { categoryid } = useParams();
  const [data, setData] = useState("");
  const [newdata, setNewData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const dateformat = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric" });

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:4000/content/?category=${categoryid}`);
        const result = await response.json();

        if (result.contents) {
          setNewData(result.contents);
          setData(categoryid); 
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [categoryid]);

  return (
    <div>
      <div className="container blogcontainer">
        <h1>{data || "Loading category..."}</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : newdata.length > 0 ? (
          <div className="allnews">
            {newdata.map((newsItem, index) => (
              <div className="pages" key={index}>
                <img className="image" src={newsItem.image} alt={newsItem.title} />
                <div className="news-details">
                  <div className="category">
                    <span className="news-category">{newsItem.category}</span>
                    <span className="news-group">{newsItem.group}</span>
                  </div>
                  <span className="news-name">{newsItem.title}</span>
                </div>
                <div className="detailed">
                  <div className="news-description">
                    {newsItem.description.length >= 40
                      ? `${newsItem.description.substring(0, 120)}...`
                      : newsItem.description}
                  </div>
                  <div className="news-date">
                    {newsItem.createdAt && dateformat.format(new Date(newsItem.createdAt))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No news available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Categorypage;
