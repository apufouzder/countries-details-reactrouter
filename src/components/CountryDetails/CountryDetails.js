import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetails.css';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);
    const { name, population, region, area, flag, capital, } = country;

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [])
    return (
        <div className="country-details">
            <img src={flag} alt="" />
            <h4>Name: {name}</h4>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default CountryDetails;