import React from 'react'
import Nav from '../components/Nav.js';
import '../styles/About.css';
import { TbTruckDelivery } from "react-icons/tb";
import { PiPlantFill } from "react-icons/pi";
import { PiPottedPlantFill } from "react-icons/pi";

function Card({ title, content }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
function About() {
  return (
    <div>
      <Nav/>
    <div class="about-container1">
      <div className="about-container">
        <Card
        title="Welcome to Plantoz"
        content="Plantoz is your go-to destination for all things plants. We are passionate about bringing nature into your life and helping you create a greener, more vibrant space."
        />
        <Card
        title=" Our Green Journey"
        content="Founded in 2024, Plantoz was born out of a love for plants and a desire to share that passion with the world. Our journey began with a small collection of plants and has since grown into a community dedicated to plant enthusiasts."
        />
        <Card
        title="Our Plant Experts"
        content="At Plantoz, we have a team of knowledgeable plant experts who are here to assist you on your plant journey. Whether you are a seasoned plant parent or a beginner, we're committed to providing the guidance and support you need to nurture your green companions."
        />
         <Card
        title="Mission: Bringing Green Into Your Life"
        content="Our mission at Plantoz is to make the world a greener place by helping individuals discover the joy of plant ownership. We believe that plants have the power to enhance well-being, purify the air, and add beauty to any space."
        />
        <Card
         title="Values"
         content="Plantoz is built on values such as sustainability, community, and education. We strive to source our plants responsibly, foster a supportive plant-loving community, and provide educational resources to empower our customers in their plant care journey."
        />
         <Card
        title="Contact Us"
        content="Have questions about plants or need advice on caring for your green friends? Don't hesitate to reach out via our <a href='/contact'>Contact page</a>."
        />
      </div>
    </div>
    <div className="image-cont"></div>
    <div class="icon-plantoz">
      <div class="icon1-plantoz">
        <TbTruckDelivery size={50}/>
        <p>Free Delivery</p>
      </div>
      <div class="icon2-plantoz">
      <PiPlantFill size={50}/>
      <p>Air Putifying Plants</p>
      </div>
      <div class="icon3-plantoz">
      <PiPottedPlantFill size={50}/>
      <p>Plants for home and Offices</p>
      </div>
    </div>
  </div>

  )
}

export default About;