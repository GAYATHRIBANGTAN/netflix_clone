import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import '/src/components/NavigationBar.css'; 

function NavigationBar() {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };

  return (
    <div className='container'>
    <img src="src/images/icons8-netflix-150.png" alt="LOGO" id="logo"/>
    <div className='sidebar'>
    <nav>
        <ul>
        <li>
    <div className="sign-in-button">
     <button><Link to='/Login'><span>Sign In</span></Link></button> 
      </div>
      </li>
            <li>
     <div className="dropdown">
      <select className="dropbtn">
                <option value="english" selected>English</option>
                <option value="hindi">Hindi</option>
              </select>
    </div>
    </li>
    
      </ul>
    </nav>
    </div>
    </div>
  );
}

export default NavigationBar;
