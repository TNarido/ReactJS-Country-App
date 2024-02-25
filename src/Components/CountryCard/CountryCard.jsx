import React from 'react';
import './CountryCard.css'

const CountryCard = ({name, capital, region, population, flags}) => {
  return (
    <div className = 'card'>
      <img src = {flags.png} alt = "" />
      <div className = 'info'>
        <p>Name: {name && name.common}</p>
        <p>Capital: {capital && capital.join()}</p>
        <p>Region: {region && region}</p>
        <p>Population: {population && population.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default CountryCard;
