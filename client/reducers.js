const initialState = {
    flights: []
};

exports.flightApp = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case 'ADD_FLIGHT':
            return {
                flights: [action.flight, ...state.flights]
            };
        default:
            return state;
    }
};