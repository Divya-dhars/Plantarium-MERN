import React from 'react'
import Nav from './Nav.js';
import Homeimg from '../assets/bg2.jpg';
function Home() {
  return (
    <div className="home-container">
        <Nav/>
        {/* <Link to="/about">About</Link> */}
        <div className="home-grid">
          <div className="text-grid">
            <p className="title-text">Plants make a positive impact on your environment.</p>
            <p className="title-text1">
              Provide your house & office space with the right plants and let our <br/>plant care team keep them flourishing.Enhance the atmosphere of your house <br/> or office with our carefully selected collection of premium plants. From vibrant greens to elegant<br/> blooms, we have the perfect plants to suit your space.
            </p>
            <button className="explore-btn">Explore</button>
          </div>
          <div className="img-grid">
            <img src={Homeimg}></img>
          </div>
        </div>
    </div>
  )
}

export default Home