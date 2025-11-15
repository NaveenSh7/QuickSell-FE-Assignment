import React from 'react'
import logo from '../assets/Doubletick Logo.png'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar' style={{background :"white"}}>
      
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>

      
      <div className='customers_maindiv'>
        <div className='all_cust'>
        <p className='customers'>All customers assignment</p>
         <p className='customers'>-By Naveen ,IIT Indore</p>
        {/* <div className='numbers_part'>
            <p>1234</p>
        </div> */}
      </div>
      </div>
    </div>
  )
}

export default Navbar;
