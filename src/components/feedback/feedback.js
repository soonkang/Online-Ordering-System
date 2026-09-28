import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './feedback.css';

const Feedback = () => {
    const [userdata,setUserData] = useState(
        {
            Name:'',Email:'',Rating:'',Subject:'',Message:''
        }
    )

    const handleRatingChange = (rating) => {
        setUserData({ ...userdata, Rating: rating });
    }

    let name, value
    const data = (e) =>
    {
        name = e.target.name
        value = e.target.value
        setUserData({...userdata, [name]:value})
    }
    const send = async(e) =>{
        const {Name, Email, Rating, Subject, Message} = userdata;
        e.preventDefault();

        if (!userdata.Name || !userdata.Email || !userdata.Rating || !userdata.Subject || !userdata.Message) {
            alert("Please fill in all fields!");
            return;
        }

        const option = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body : JSON.stringify({
                Name,Email,Rating,Subject,Message
            })
        }
        const res = await fetch('https://csad-e9053-default-rtdb.asia-southeast1.firebasedatabase.app/Messages.json', option)
        console.log(res)
        if(res.ok){
            alert("Message Sent")
        } else {
            alert("Failed to send message. Please try again later.");
        }
    }


  return (
    
      <div className='container'>
        <div className='contact_box'>
          <form method='POST'>
            <div><h2>Feedback Form</h2></div>
            <input type='text' name='Name' value={userdata.Name} placeholder='Enter Your Full Name' autoComplete='off' onChange={data}></input>
            <input type='email' name='Email' value={userdata.Email} placeholder='Enter Your E-mail' autoComplete='off' onChange={data}></input>
            <div className="star-rating-column">
              <App handleRatingChange={handleRatingChange}/> 
            </div>
            <input type='text' name='Subject' value={userdata.Subject} placeholder='Subject Of Message' autoComplete='off' onChange={data}></input>
            <textarea cols="30" rows="5" value={userdata.Message} name='Message' placeholder='Your Message' autoComplete='off' onChange={data}></textarea>
            <button onClick={send}>Send</button>
          </form>
        </div>
      </div>
    
  );
};

function App({ handleRatingChange }) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const handleStarClick = (currentRating) => {
        setRating(currentRating);
        handleRatingChange(currentRating);
    };

    return (
        <div className='App'>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={currentRating}
                            checked={currentRating === rating}
                            onChange={() => handleStarClick(currentRating)}
                            className='star-radio'
                        />
                        <FaStar
                            className='star'
                            size={50}
                            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
}


export default Feedback;
