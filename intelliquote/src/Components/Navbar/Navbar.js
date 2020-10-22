import React from 'react'
import './Navbar.css'
import {
  Link

} from 'react-router-dom';

function Navbar(){
    return(
        <div>
          <nav className = 'navbar'>
          <i id = 'logo'
          class="fas fa-quote-right"></i>
          <div className = 'button-list'>
          <ul>
            <li className = 'nav-element'> 
            <Link className = 'nav-button' to = '/'>  
                <h2>Home</h2>
            </Link>
            </li>
            <li className = 'nav-element'>
            <Link className = 'nav-button' to = '/email'>  
                <h2>Email</h2>
            </Link>
             </li>
             <li className = 'nav-element' >
            <Link className = 'nav-button' to = '/quiz'>  
                <h2>Quiz</h2>
            </Link>
             </li>
          </ul>
          </div>
           
          </nav>
        </div>
    )

}

export default Navbar