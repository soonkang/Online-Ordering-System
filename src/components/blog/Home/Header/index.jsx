import React from 'react';
import './styles.css';
import logo from "./logo.png";

const Header = () => (
  <header className='home-header'>
    <img src={logo} alt='Logo' />
    <h1>
      “Blog ”
    </h1>
    <p>
    We believe that dining isn't just about food—it's an experience. <br /> 
    Our blog is your exclusive backstage pass to all things culinary and beyond. <br />
    Join us as we journey through the flavors, stories, and inspirations that shape our restaurant and community.
    </p>
  </header>
);

export default Header;


