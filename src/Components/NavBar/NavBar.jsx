import React from 'react';
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css'

const NavBar = ({getCountriesByName, getCountries, getCountriesByRegion}) => {
  return (
    <div className = 'navbar'>
        {/* Search Input */}
        <SearchBar getCountriesByName = {getCountriesByName} getCountries = {getCountries}/>

        {/* Filter */}
        <Filter getCountriesByRegion = {getCountriesByRegion}/>
    </div>
  );
}

export default NavBar;
