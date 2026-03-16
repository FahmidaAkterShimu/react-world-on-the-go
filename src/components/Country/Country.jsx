import React from 'react';

const Country = ({ country }) => {
    return (
        <div>
            <img src={country.flags?.flags?.png} alt={country.flags.flags.png} />
            <h3>Name: {country.name.common}</h3>
            <h4>Capital: {country.capital.capital[0]}</h4>
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area}</p>
            <p>Population: {country.population.population}</p>
        </div>
    );
};

export default Country;