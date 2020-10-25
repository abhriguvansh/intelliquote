import React from 'react'
import './LandingPage.css'
import SearchBar from './SearchBar';
import Navbar from '../Navbar/Navbar'
import {
  Link

} from 'react-router-dom'

function LandingPage(){
    return(
        <div>
        <Navbar />
          <SearchBar
          classname='searchbar' 
          />
        </div>
    )

}

export default LandingPage