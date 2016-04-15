require('./flights.css');

import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';

import Flights from '../../../client/components/flights';
import Flight from '../../../client/components/flight';
import {addFlight} from '../../../client/actions';
import {flightApp} from '../../../client/reducers';


const store = createStore(flightApp);

function render() {
    ReactDom.render(
        <Flights store={store}/>,
        document.getElementById('root')
    );
}
render();
store.subscribe(render);

fetch('/api/flights' + window.location.search)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.flights.forEach(flight => {
            store.dispatch(addFlight(flight));
        });
    });

