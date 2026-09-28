import React from 'react';
import { images } from '../../constants';
import './Reviews.css';

const Reviews = () => {
  return (
    <div className="app__FoodMenu flex__center section__padding" id="reviews">
      <div className="reviews-container">
        <h1 className="headtext__cormorant">Satisfied Reviews</h1>
      </div>
      <div className="image-container">
        <img src={images.review1} alt="menu__img" className="review1" />
        <img src={images.review2} alt="menu__img" className="review2" />
        <img src={images.review3} alt="menu__img" className="review3" />
      </div>
      <div className="add-review">
      {/* <button type="button" className="custom__button">Add Review</button> */}
      <a className='custom__button' href="/feedback">Add Review</a>
      </div>
    </div>
  
  );
};

export default Reviews;
