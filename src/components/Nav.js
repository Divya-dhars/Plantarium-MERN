import React,{useState} from 'react'
import '../styles/Nav.css'
import { RiPlantFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { Link} from 'react-router-dom';
import { IoPersonCircleSharp } from "react-icons/io5";

function Nav() {
  const [isNavOpen,setIsNavOpen]=useState(false);
  const toggleNav=()=>{
    setIsNavOpen(!isNavOpen);
  };
  return (
    <><div className='header'>
      <div className='icon' onClick={toggleNav}>
        <RiPlantFill size={20} color='#2d6a4f' />
        <span>Plantoz</span>
      </div>
      <div className='navbar'>
        <ul>
          <li>
            <Link to='/' className='nav-link' reloadDocument>Home</Link>
          </li>
          <li>
            <div className='dropdown'>
              <Link to='/' className='nav-link' reloadDocument>Indoor Plants</Link>
              <Link to='/' className='nav-link' reloadDocument>Outdoor Plants</Link>
              <Link to='/' className='nav-link' reloadDocument>Office Plants</Link>
              <Link to='/' className='nav-link' reloadDocument>Hanging Plants</Link>
              <Link to='/' className='nav-link' reloadDocument>Air Purifying Plants</Link>
            </div>
            <div className='nav-link-items'>Plants</div>
          </li>
          <li>
            <div className='dropdown'>
              <Link to='/' className='nav-link' reloadDocument>Flower Seeds</Link>
              <Link to='/' className='nav-link' reloadDocument>Vegetables Seeds</Link>
              <Link to='/' className='nav-link' reloadDocument>Fruits Seeds</Link>
              <Link to='/' className='nav-link' reloadDocument>Herb Seeds</Link>
              <Link to='/' className='nav-link' reloadDocument>Microgreen Seeds</Link>
            </div>
            <div className='nav-link-items'>Seeds</div>
          </li>
          <li>
            <div className='dropdown'>
              <Link to='/' className='nav-link' reloadDocument>Plastic pots</Link>
              <Link to='/' className='nav-link' reloadDocument>Ceramic pots</Link>
              <Link to='/' className='nav-link' reloadDocument>Hanging pots</Link>
              <Link to='/' className='nav-link' reloadDocument>Metal planters</Link>
              <Link to='/' className='nav-link' reloadDocument>Plant stands</Link>
            </div>
            <div className='nav-link-items'>Pots</div>
          </li>
          <li>
            <Link to='/' className='nav-link' reloadDocument>New Arrivals</Link>
          </li>
          <li>
            <Link to='/about' className='nav-link' reloadDocument>About Us</Link>
          </li>
        </ul>
      </div>
      {false ?
        <div className='profile'>
          <IoPersonCircleSharp size={40} />
        </div> :
        (<div className='loginbutton'>
          <Link to='/loginregister' className='nav-link'>
            <button className='login'>Login</button>
          </Link>
        </div>
        )}
      <div className='whislist'>
        <Link to='/whislist' reloadDocument className='nav-link'><FaRegHeart size={30} color='#2d6a4f' /></Link>
      </div>
      <div className='cart'>
        <Link to='/cart' reloadDocument className='nav-link'><FaShoppingCart size={30} color='#2d6a4f' /></Link>
      </div>
    </div>
       
   </>
  )
}

export default Nav;