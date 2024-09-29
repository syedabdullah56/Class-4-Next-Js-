import React from 'react';

const CountryName = ({ params }) => {
    const japan = {
        name: "Japan",
        capital: "Tokyo",
        population: 125000000,
    };
    const pakistan = {
        name: "Pakistan",
        capital: "Islamabad",
        population: 220000000,
    };
    const india = {
        name: "India",
        capital: "Delhi",
        population: 1255600000,
    };

    const countries = {
        japan,
        pakistan,
        india,
    };

   
    const countryData = countries[params.country_name.toLowerCase()];

    if (!countryData) {
        return <h1>Name : {params.country_name}</h1>; 
    }

    return (
        <div>
            <h1>Name: {countryData.name}</h1>
            <h2>Capital: {countryData.capital}</h2>
            <h3>Population: {countryData.population.toLocaleString()}</h3> 
        </div>
    );
};

export default CountryName;
