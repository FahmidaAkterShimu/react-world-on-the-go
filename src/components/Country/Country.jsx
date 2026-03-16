import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    const [visited, setVisited] = useState(false);


    const handleVisited = () => {
        // First System
        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        // Second System
        // setVisited(visited ? false : true);

        // Third System
        setVisited(!visited ? true : false);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags?.flags?.png} alt={country.flags.flags.png} />
            <h3>Name: {country.name.common}</h3>
            <h4>Capital: {country.capital.capital[0]}</h4>
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area},
                {country.area.area > 300000 ? " Big Country" : " Small Country"}</p>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not visited"}
            </button>
        </div>
    );
};

export default Country;

// 1. inline css (style object)
