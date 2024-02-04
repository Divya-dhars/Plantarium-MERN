import React,{useState} from 'react'
import Nav from './Nav.js';
import Homeimg from '../assets/bg2.jpg';
import Homeimg1 from '../assets/home2.avif';
import Homeimg2 from '../assets/home.jpg';
import Homeimg3 from '../assets/home4.avif';
import Homeimg4 from '../assets/home7.jpeg';
import Homeimg5 from '../assets/home8.jpeg';
function Home() {
  const [hoveredImg1, setHoveredImg1] = useState(false);
  const [hoveredImg2, setHoveredImg2] = useState(false);
  const [hoveredImg3, setHoveredImg3] = useState(false);

  const handleHoverImg1 = () => {
    setHoveredImg1(!hoveredImg1);
  };

  const handleHoverImg2 = () => {
    setHoveredImg2(!hoveredImg2);
  };

  const handleHoverImg3 = () => {
    setHoveredImg3(!hoveredImg3);
  };

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
          <div className="t-img1" onMouseEnter={handleHoverImg1} onMouseLeave={handleHoverImg1}>
            <img src={Homeimg2}></img>
            {hoveredImg1 && (
             <div className="hover-overlay"></div>
            )}
            {hoveredImg1 && (
            <div className="hover-text">
              <p>Indoor Plants</p>
            </div>
          )}
          </div>
          <div className="t-img2" onMouseEnter={handleHoverImg2} onMouseLeave={handleHoverImg2}>
          <img src={Homeimg4}></img>
          {hoveredImg2 && (
          <div className="hover-overlay1"></div>
          )}
          {hoveredImg2 && (
            <div className="hover-text">
              <p>Plant&Stand</p>
            </div>
          )}
          </div>
          <div className="t-img3" onMouseEnter={handleHoverImg3} onMouseLeave={handleHoverImg3}>
          <img src={Homeimg5}></img>
          {hoveredImg3 && (
           <div className="hover-overlay2"></div>
         )}
          {hoveredImg3 && (
            <div className="hover-text">
              <p>Pot Plants</p>
            </div>
          )}
          </div>
        </div>

    </div>
    
  )
}

export default Home