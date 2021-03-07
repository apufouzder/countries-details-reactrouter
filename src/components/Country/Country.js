import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const { name, capital, population, flag } = props.country;

    // const history = useHistory();
    // const handleClick = (countryName) => {
    //     history.push(`/country/${countryName}`)
    // }

    return (
        <div className="country">
            <img src={flag} alt="" />
            <h4>Name: {name}</h4>
            <h5>Capital: {capital}</h5>
            <h5>Population: {population}</h5>
            <Link className="button" to={`/country/${name}`}>Details</Link>
            {/* <button onClick={() => handleClick(name)}>Click Now</button> */}
        </div>
    );
};

export default Country;