import React from 'react';
import Form from './form';
import Flight from './flight';
import {createFlightOnClick} from '../javascript/flightsOperations';

export default ({store}) => {
    return (
        <table className="flights__container">
            <thead>
            <tr>
                <td>Id</td>
                <td>sourceCity</td>
                <td>destinationCity</td>
                <td>planeType</td>
                <td>departureTime</td>
                <td>realDepartureTime</td>
                <td>Status</td>
                <td></td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            {
                store
                    .getState()
                    .flights
                    .map((flight, index) => (<Flight flight={flight} store={store} key={index}/>))
            }
            <tr>
                <input id="create-button" type="radio" checked className="flight__edit-button"/>
                <td></td>
                <td className="flight-info" data-name="sourceCity">
                    <input className="create-field source-city-create-field" type="text"/>
                </td>
                <td className="flight-info" data-name="destinationCity">
                    <input className="create-field destination-city-create-field" type="text"/>
                </td>
                <td className="flight-info" data-name="planeType">
                    <input className="create-field plane-type-create-field" type="text"/>
                </td>
                <td className="flight-info" data-name="departureTime">
                    <input className="create-field departure-time-create-field" type="time"/>
                </td>
                <td className="flight-info" data-name="realDepartureTime">
                    <input className="create-field real-departure-time-create-field" type="time"/>
                </td>
                <td className="flight-info" data-name="status">
                    <input className="create-field status-create-field" type="text"/>
                </td>
                <td className="flight-edit">
                    <label onClick={createFlightOnClick.bind(this, store)}
                        htmlFor="create-button">
                    </label>
                </td>
                <td></td>
            </tr>
            </tbody>
        </table>
    );
};
