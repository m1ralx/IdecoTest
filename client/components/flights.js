import React from 'react';
import Form from './form';
import Flight from './flight';

export default ({store}) => {
    return (
        <ul className="flights__container">
            {
                store
                    .getState()
                    .flights
                    .map((flight, index) => (<Flight flight={flight} store={store} key={index}/>))
            }
        </ul>
    );
};