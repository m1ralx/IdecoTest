
export const addFlight = flight => {
    console.log(flight);
    return {
        type: 'ADD_FLIGHT',
        flight
    };
};

export const deleteFlight = flightId => {
    return {
        type: 'DELETE_FLIGHT',
        flightId
    }
};

export const editFlight = flight => {
    return {
        type: 'EDIT_FLIGHT',
        flight
    }
};