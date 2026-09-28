import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Reviews, Gallery, Header, Intro, Laurels, DrinksMenu, FoodMenu, Footer } from './container';
import { Navbar, Feedback, Blog, Home, Service, DF,ListMenu , Photo, Paypal, Location, Login, Sign_up, Notice, Us} from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div> 
              <Header />
              <AboutUs />
              <Reviews /> <FoodMenu /> <DrinksMenu /> <Chef /> <Intro />
              <Laurels /> <Gallery /> <FindUs /> 
            </div>
          } />

          {/* Additional routing pages */}
          <Route path="/service" element={<Service />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path='/blog' element={<Home />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path="/discussion_forum" element={<DF />} />
          <Route path="/menulist" element={<ListMenu />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/checkout" element={<Paypal />} />
          <Route path="/location" element={<Location />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign_up />} />
          <Route path="/notify" element={<Notice />} />
          <Route path="/us" element={<Us />} />




        </Routes>
        <Footer/>

      </BrowserRouter>

     
    </div>
  );
};

export default App;
