import React from 'react'
import './Service.css'

function Service (){
    let message1 = 'The team behind Wild West Eats';
    let message2 = 'Project Explanation'
    return (
        <section className='section-white'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-color'>
                        <h2 className='section-title'>
                            About Us
                        </h2>
                        <p className='section-subtitle'>{message2}</p>
                    </div>
                    <div className='team-info'>
                    <p>"Our restaurant is dedicated to enhancing customer convenience and streamlining operations by offering our food and drinks menu online for easy ordering. Our website is accessible from any web browser, allowing customers to place orders using their own devices or tablets like iPads.</p>
                    <p>We also feature seasonal promotions and support multiple payment methods, including cash, credit cards, and online payment options such as PayPal. To ensure efficient management of customer data, we utilize Firebase for storage.</p>
                    <p>Built with React.js and backed by Node.js, our website offers a seamless user experience. In addition to showcasing our team members, we provide notification features, user authentication, and a feedback system to continuously improve our services."</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Service
