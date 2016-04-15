import React from 'react';

export default ({store, flight}) => {
    return (
        <li className={"flight-" + flight.id}>
            <div className="flight__id">{flight.id}</div>
        </li>
    );
};