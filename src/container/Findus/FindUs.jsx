import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { Link } from 'react-router-dom';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">500 Dover Rd, Singapore 139651 Singapore Polytechnic</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 9:00 Am - 17:00 Pm</p>
        <p className="p__opensans">Sat - Sun: Never</p>
      </div>
      <Link to='/location'>
        <a className="custom__button" >Visit Us</a>
    </Link>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;