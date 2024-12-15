

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Allnews.css';

const Allnews = () => {
  const [data, setData] = useState("Football");
  const [newdata, setNewData] = useState([]);
  const [allData, setAllData] = useState([]); 
  const [isloading, setLoading] = useState(false);

  const dateformat = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric" });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://tedsports.onrender.com/content');
        const data = await response.json();
        setAllData(data.contents); 
        setNewData(data.contents); 
      } catch (err) {
        console.error(err);
      }
    };
    fetchNews();
  }, []);

  console.log(newdata);

  const filterData = (category) => {
    const filteredCategory = allData.filter((news) => news.category === category);
    setNewData(filteredCategory);
  };

  const handleCategoryClick = (categoryName) => {
    setData(categoryName);
    filterData(categoryName);
  };

  // handlesports
  const handleSports = (plus) => {
    setData("All Sports");
    const filteredCategory = allData.filter((news) => news.type === plus);
    setNewData(filteredCategory);
    setLoading(true);
  };

  return (
    <div>
      <div className="container blogcontainer">
        <div className="alldetails">
          <div className='btnContainer'>
            <div onClick={() => handleSports('sports list')} className="btn">
              ALL SPORTS
            </div>
            <div onClick={() => handleCategoryClick('Football')} className="btn">
              FOOTBALL
            </div>
            <div onClick={() => handleCategoryClick('Basket Ball')} className="btn">
              BASKET BALL
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('American Football')} className="btn">
              AMERICAN FOOTBALL
            </div>
            <div onClick={() => handleCategoryClick('TableTennis')} className="btn"> 
              TABLE TENNIS 
            </div>
            <div onClick={() => handleCategoryClick('Boxing')} className="btn"> 
              BOXING
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Swimming')} className="btn">
              SWIMMING
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Golf')} className="btn">
              GOLF
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Fencing')} className="btn">
              FENCING
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Wrestling')} className="btn">
              WRESTLING
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Archery')} className="btn">
              ARCHERY
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Gymnastics')} className="btn">
              GYMNASTICS
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Cycling')} className="btn">
              CYCLING
            </div>
            <div onClick={() => handleCategoryClick('Track and Field')} className="btn">
              TRACK AND FIELD
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Skiing')} className="btn">
              SKIING
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Surfing')} className="btn">
              SURFING
            </div>
            <div onClick={() => handleCategoryClick('Volleyball')} className="btn">
              VOLLEYBALL
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Cricket')} className="btn">
              CRICKET
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Rugby')} className="btn">
              RUGBY
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Baseball')} className="btn">
              BASEBALL
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Judo')} className="btn">
              JUDO
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Kickboxing')} className="btn">
              KICKBOXING
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Squash')} className="btn">
              SQUASH
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Snowboarding')} className="btn">
              SNOWBOARDING
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Skateboarding')} className="btn">
              SKATEBOARDING
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Bowling')} className="btn">
              BOWLING
            </div>
            <div style={{ display: isloading ? "block" : "none" }} onClick={() => handleCategoryClick('Darts')} className="btn">
              DARTS
            </div>
          </div>
        </div>

        <h1>{data}</h1>
        <div className="allnews">
          {newdata.length > 0 ? (
            newdata.map((news) => {
              const description = news.description.length >= 40 ? `${news.description.substring(0, 120)}...` : news.description;
              return (
                <div className="pages" key={news._id}>
                  <Link className="link" to={`/news/${news._id}`}>
                    <img className="image" src={news.image} alt={news.title} />
                    </Link>
                    <div className="news-details">
                      <div className="category">
                      <Link className="link" to={`/${news.category}`}>
                        <span className="news-category">{news.category}</span>
                        </Link>
                        <Link className="link"to={`/group/${news.group}`}>
                        <span className="news-group">{news.group}</span>
                        </Link>
                      </div>
                      <span className="news-name">{news.title}</span>
                    </div>
               
                  <div className="detailed">
                    <div className="news-description">{description}</div>
                    <div className="news-date">{news.createdAt && dateformat.format(new Date(news.createdAt))}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No news available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Allnews;

