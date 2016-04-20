import React from 'react';
import {deleteFlightOnClick} from '../javascript/flightsOperations';
import {editFlightOnClick} from '../javascript/flightsOperations';

export default ({store, flight}) => {
    return (
        <tr className="flight">
            <input id={"edit-button-" + flight.id} type="checkbox"
                className="flight__edit-button"/>
            <td className="flight__id flight__id">{flight.id}</td>
            <td className="flight-info flight__source-city" data-name="sourceCity" type="text">
                <span>{flight.sourceCity}</span>
                <input className="edit-field source-city-edit-field" type="text"/>
            </td>
            <td className="flight-info flight__destination-city" data-name="destinationCity">
                <span>{flight.destinationCity}</span>
                <input className="edit-field destination-city-edit-field" type="text"/>
            </td>
            <td className="flight-info flight__plane-type" data-name="planeType">
                <span>{flight.planeType}</span>
                <input className="edit-field plane-type-edit-field" type="text"/>
            </td>
            <td className="flight-info flight__departure-time" data-name="departureTime">
                <time>{flight.departureTime}</time>
                <input className="edit-field departure-time-edit-field" type="time"/>
            </td>
            <td className="flight-info flight__real-departure-time" data-name="realDepartureTime">
                <time>{flight.realDepartureTime}</time>
                <input className="edit-field real-departure-time-edit-field" type="time"/>
            </td>
            <td className="flight-info flight__status" data-name="status">
                <span>{flight.status}</span>
                <input className="edit-field status-edit-field" type="text"/>
            </td>
            <td className="flight-edit" data-flight-id={flight.id}>
                <label onClick={editFlightOnClick.bind(this, store)}
                    htmlFor={"edit-button-" + flight.id}>
                </label>
            </td>
            <td className="flight__delete-button"
                data-flight-id={flight.id}
                onClick={deleteFlightOnClick.bind(this, store)}>
            </td>
        </tr>
    );
};