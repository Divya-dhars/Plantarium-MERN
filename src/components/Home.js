import React from 'react'
import Nav from './Nav.js';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
        <Nav/>
        <Link to="/about">About</Link>
    </div>
  )
}

export default Home