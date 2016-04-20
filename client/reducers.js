'use strict';
const initialState = {
    flights: []
};

exports.flightApp = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case 'ADD_FLIGHT':
            state.flights.push(action.flight);
            return {
                flights: state.flights
            };
        case 'DELETE_FLIGHT':
            return {
                flights: state.flights.filter(flight => flight.id !== action.flightId)
            };
        case 'EDIT_FLIGHT':
            var flightStorageIndex = state.flights.findIndex(flight => flight.id === action.flight.id);
            state.flights[flightStorageIndex] = action.flight;
            return {
                flights: state.flights
            };
        default:
            return state;
    }
};