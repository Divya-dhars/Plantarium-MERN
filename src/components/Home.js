import React from 'react'
import Nav from './Nav.js';
import Homeimg from '../assets/bg2.jpg';
import Homeimg1 from '../assets/home2.avif';
import Homeimg2 from '../assets/home.jpg';
import Homeimg3 from '../assets/home4.avif';
import Homeimg4 from '../assets/home5.jpg';
import Homeimg5 from '../assets/offer.jpg';
function Home() {
  return (
    <div className="home-container">
        <Nav/>
        {/* <Link to="/about">About</Link> */}
        <div className="home-grid">
          <div className="text-grid">
            <p className="title-text">Plants make a positive impact<br/> on your environment.</p>
            <p className="title-text1">
              Provide your house & office space with the right plants and let our <br/>plant care team keep them flourishing.Enhance the atmosphere of your house <br/> or office with our carefully selected collection of premium plants. From vibrant greens to elegant<br/> blooms, we have the perfect plants to suit your space.
            </p>
            <button className="explore-btn">Explore</button>
          </div>
          <div className="img-grid">
            <img src={Homeimg}></img>
          </div>
        </div>
        <div className="home-grid1">
        <div className="img-grid1">
            <img src={Homeimg1} className="hover-image"></img>
            <div className="hover-overlay"></div>
              <div className="button-overlay">
              <button className="explore-btn1">Explore</button>
            </div>
          </div>
          <div className="img-grid1">
            <img src={Homeimg3} className="hover-image"></img>
            <div className="hover-overlay"></div>
              <div className="button-overlay">
              <button className="explore-btn1">Explore</button>
            </div>
          </div>
          
        </div>
        <div className="t">
          <div className="t-img1">
            <img src={Homeimg2}></img>
          </div>
          <div className="t-img2">
          <img src={Homeimg4}></img>
          </div>
          <div className="t-img3">
          <img src={Homeimg5}></img>
          </div>
        </div>

    </div>
    
  )
}

export default Home