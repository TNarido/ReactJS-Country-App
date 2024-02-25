import React, { useState } from 'react';
import './Filter.css'

const Filter = ({getCountriesByRegion}) => {

  return (
    <select onChange = {(e) => getCountriesByRegion(e.target.value)}>
      <option selected disabled>Filter by Region</option>
      <option value = "Americas">Americas</option>
      <option value = "Asia">Asia</option>
      <option value = "Europe">Europe</option>
      <option value = "Africa">Africa</option>
      <option value = "Oceania">Oceania</option>
    </select>
  );
}

export default Filter;
