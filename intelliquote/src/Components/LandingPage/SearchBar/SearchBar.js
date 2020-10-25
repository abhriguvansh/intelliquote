
import React from 'react';
import './SearchBar.css'
const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <div className  = 'searchbar-div'>
    <input
    className = 'search-bar'
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search quote"}
     //onChange={(e) => setKeyword(e.target.value)}
    />    </div>

  );
}

export default SearchBar