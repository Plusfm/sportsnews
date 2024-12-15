import React, { useEffect, useState } from 'react';
import './Postcard.css';



const Postcard = () => {
    const [posts, setAllPosts] = useState([]);
    const [newgroupdatas, setGroup] = useState([]);
    const [title, setTitle] = useState(" ");
  

    const dateFormat = new Intl.DateTimeFormat('en-us', { year: "numeric", month: 'short', day: 'numeric' });
    const displaydate = new Date().toDateString();

    const HandleGroup = (plus) => {
        const filteredGroup = posts.filter((post) => post.group === plus);
        setGroup(filteredGroup);
        setTitle(plus);
        if(title==='Individual'){
        window.location.href = '/group/Individual'
        }
        else if(title==='Combat Sports'){
                window.location.href = '/group/Combat%20Sports'
           }
        else if(title==='Racquet'){
            window.location.href = '/group/Racquet'
           }
        else if(title==='Adventure'){
            window.location.href = '/group/Adventure'
         }
         else if(title==='Team Sports'){
            window.location.href = '/group/Team%20Sports'
         }
         else if(title==='Unique Sports'){
            window.location.href = '/group/Unique Sports'
         }
         else if(title==='Subscribe'){
            window.location.href = '/signup'
         }
         
    };
   

    return (
        <div className='postcontainer'>
            <div className='firstContainer'>
                <h2 className='container_header'>About Me</h2>
                <p className='container_paragraph'> My name is John Dave. I'm a freelance sports news reporter based in New York. 
                I like being free and enjoying every moment.</p>
                
                <h2 className='link_tags'>Tags</h2>
                <div className='group_button_link'>
                    <div onClick={() => HandleGroup("Individual")} >
                        Individual Sports
                    </div>
                    <div onClick={() => HandleGroup("Team Sports")}>
                        Team Sports
                    </div>
                    <div onClick={() => HandleGroup("combat sports")}  >
                        Combat Sports
                    </div>
                    <div onClick={() => HandleGroup("Racquet")} >
                        Racquet Sports
                    </div>
                    <div onClick={() => HandleGroup("Unique Sports")}>
                        Unique Sports
                    </div>
                    <div onClick={() => HandleGroup("Adventure")}>
                        Adventure/Extreme Sports
                    </div>
                </div>
           
            </div>
        {/* second container */}
        <div className='secondContainer'>
            <h2 className='container_header'>Recent Posts</h2>
            <div className='secondContainerMain'>
                <div className='postcard'>
                    <div className='icon'>
                        <img className='container_image' src="https://media.istockphoto.com/id/1295248329/photo/beautiful-young-black-boy-training-on-the-football-pitch.jpg?s=612x612&w=0&k=20&c=ws4m_NoSF8fRZGNoq5kVlJSfNghREKihaxsOBXAHOw8=" alt="" />
                        <div className='circle_items'>1</div>
                    </div>
                    <div className='secondContainer_subgroup'>
                        <div className='current_date'>{displaydate}</div>
                        <p className='container_paragraph_second'> That which does not kill us makes us stronger</p>
                    </div>
                </div>

                <div className='postcard'> 
                    <div className='icon'>
                        <img className='container_image' src="https://media.istockphoto.com/id/1287910461/photo/cheerful-fit-couple-on-white-background.jpg?s=612x612&w=0&k=20&c=wRuD6hog_RoPPuMy3S-tpjzuY_1biPCjeAG_HBm6JTQ=" alt="" />
                        <div className='circle_items'>2</div>
                    </div>
                    <div className='secondContainer_subgroup'>
                        <div className='current_date'>{displaydate}</div>
                        <p className='container_paragraph_second'> Do what you can, with what you have, where you are</p>
                    </div>
                </div>

                <div className='postcard'>
                    <div className='icon'>
                        <img className='container_image' src="https://media.istockphoto.com/id/178740022/photo/female-soccer-player.jpg?s=612x612&w=0&k=20&c=Uk2fiRo0u617thR-HHVEV4SOGUjR3xLQ-ty5o8zNQO0=" alt="" />
                        <div className='circle_items'>3</div>
                    </div>
                    <div className='secondContainer_subgroup'>
                        <div className='current_date'>{displaydate}</div>
                        <p className='container_paragraph_second'> If you cannot do great things, do small things in a great way</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='thirdContainer'>
            <h2 className='container_header'>Get Interesting News</h2>
            <p className='container_paragraph_third'>Subscribe to our newsletter and we’ll send you the email of latest posts.</p>
            <div className="subscribe">
                <input type="text" placeholder='Email Address'/>
                <button onClick={() => HandleGroup("Subscribe")}>SUBSCRIBE
                    
                </button>
            </div>
        </div>
    </div>
  )
}

export default Postcard;
