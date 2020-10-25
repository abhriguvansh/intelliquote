import React from 'react'
import './LandingPage.css'
import SearchBar from './SearchBar/SearchBar'
import Navbar from '../Navbar/Navbar'
import {
  Link

} from 'react-router-dom'

function LandingPage(){
    return(
        <div>
        <Navbar />
        <h1 style= {{display: 'none'}}>LandingPage</h1>
          <SearchBar
          classname='searchbar' 
          />
        </div>
    )

}

export default LandingPage