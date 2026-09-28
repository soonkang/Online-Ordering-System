import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">We're more than just a place to dine; we're a culinary sanctuary where passion meets palate. From humble beginnings to sizzling success, our story is a savory saga of dedication, innovation, and a relentless pursuit of flavor.</p>
        <a className="custom__button" href="/service">Know More</a>
      </div>

       <div className="spacer" style={{ margin: '170px' }}></div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Blog</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Where every slice of the past is seasoned with tales of triumph, grilled to perfection, and served with a side of nostalgia. Step into our time machine of flavors and savor the journey through our culinary evolution!</p>
        <a className="custom__button" href="/blog">Know More</a>
      </div>
    </div>
  </div>
);

export default AboutUs;