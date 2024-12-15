import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Categorypage.css";

const Grouppage = () => {
  const { groupid } = useParams(); 
  const [groupName, setGroupName] = useState(""); 
  const [groupMembers, setGroupMembers] = useState([]);  
  const [isLoading, setIsLoading] = useState(false); 

  const dateformat = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric" });

  useEffect(() => {
    let isMounted = true;
    const fetchGroupData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:4000/content/?group=${groupid}`);
        const result = await response.json();

        if (isMounted && result.contents) {
          const filteredData = result.contents.filter((newsItem) => newsItem.group === groupid);
          setGroupMembers(filteredData); 
          setGroupName(groupid); 
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchGroupData();

    return () => (isMounted = false); 
  }, [groupid]);

  return (
    <div>
      <div className="container blogcontainer">
        <h1>{groupName ==='Team Sports'||groupName ==='Combat Sports'||groupName ==='Unique Sports' ? `Group of ${groupName}`  :`Group of ${groupName} Sports` ||"Loading Group Sports Data..."}</h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : groupMembers.length > 0 ? (
          <div className="allnews">
            {groupMembers.map((member) => (
              <div className="pages" key={member.id}>
                <img className="image" src={member.image} alt={member.title} />
                <div className="news-details">
                  <div className="category">
                    <span className="news-category">{member.category}</span>
                    <span className="news-group">{member.group}</span>
                  </div>
                  <span className="news-name">{member.title}</span>
                </div>
                <div className="detailed">
                  <div className="news-description">
                    {member.description.length >= 40
                      ? `${member.description.substring(0, 120)}...`
                      : member.description}
                  </div>
                  <div className="news-date">
                    {member.createdAt && dateformat.format(new Date(member.createdAt))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No members available for this group.</p>
        )}
      </div>
    </div>
  );
};

export default Grouppage;
