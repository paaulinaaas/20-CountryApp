import React from 'react';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <img className="country-logo" src={props.country.imageUrl} alt="country photo" width="100" />
    </div>
);

export default CountryFlag;