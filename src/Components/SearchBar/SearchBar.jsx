import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './SearchBar.css'

const SearchBar = ({getCountriesByName, getCountries}) => {
    const [text,setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text == ''){
            getCountries();
        }else{
            getCountriesByName(text)
        }
    }

  return (
    <div className = 'search-box'>
        <FaSearch size = {25} color = "black"/>
      <form onSubmit = {handleSubmit}>
        <input type = "text" value = {text} placeholder = "Search Country.." onChange = {(e) => setText(e.target.value)}/>
      </form>
    </div>
  );
}

export default SearchBar;
