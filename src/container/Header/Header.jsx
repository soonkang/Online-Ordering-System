import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';
import Reviews from '../Reviews/Reviews';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Exquisite Burgers, Elevated Experience.</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>"Experience the Wild West's flavors: hearty burgers, savory BBQ at our stall. Yeehaw-worthy bites await!"</p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
    {/* <div>
      <Reviews />
    </div> */}
  </div>
);

export default Header;