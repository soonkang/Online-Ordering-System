import React from 'react'
import './Service.css'

function Us (){
    let message1 = 'The team behind Wild West Eats';
    let message2 = 'Project Explanation'
    return (
        <section className='section-white'>
            
                
                    <div className='col-md-12 text-color'>
                        <h2 className='section-title'>
                            Team Members
                        </h2>
                        <p className='section-subtitle'>{message1}</p>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item'>
                            <img src='/asset/images/sk.jpg' className='team-img' alt='invalid'></img>
                            <h3>Soon Kang</h3>
                            <div className='team-info'>
                                <p>Group Leader</p>
                                <p>I'm entrusted with the vital role of shepherding our group project, ensuring it not only meets all requirements and stays on schedule, but also fostering an environment where each team member submits their individual parts promptly. Moreover, I take great care to ensure our client-server application not only serves its intended purposes effectively but also boasts a visually appealing and intuitive GUI. Furthermore, I'm dedicated to infusing our project with innovation and creativity by synthesizing and integrating our collective code into something truly unique.</p>
                            </div>
                        </div>
                        <div className='team-item'>
                            <img src='/asset/images/nigel.png' className='team-img' alt='invalid'></img>
                            <h3>Nigel Wong</h3>
                            <div className='team-info'>
                                <p>Vice Leader</p>
                                <p>Prohject Contribution - Home Page + Ordering Menu Page</p>
                            </div>
                        </div>
                        <div className='team-item'>
                            <img src='/asset/images/yp.png' className='team-img' alt='invalid'></img>
                            <h3>Yong Pang</h3>
                            <div className='team-info'>
                                <p>Group Member</p>
                                <p>created the user registration and login page with database and authentication of the user. As well as a about page that describes to users what our restaurant is</p>
                            </div>
                        </div>
                        <div className='team-item'>
                            <img src='/asset/images/harold.jpg' className='team-img' alt='invalid'></img>
                            <h3>Harold Harry</h3>
                            <div className='team-info'>
                                <p>Group Member</p>
                                <p>Project Contribution - Designed Footer + Contact Us Form + Map View</p>
                            </div>
                        </div>
                    </div>
                
        </section>
    )
}
export default Us
