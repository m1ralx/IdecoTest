'use strict';
import {deleteFlight} from '../actions';
import {editFlight} from '../actions';
import {addFlight} from '../actions';

function getFieldElements(targetElement) {
    var row = targetElement.parentElement;
    var elements = row.querySelectorAll('.flight-info');
    return [].slice.call(elements, 0);

}

function fillFields(elements) {
    elements.forEach(element => {
        element.children[1].value = element.children[0].innerText;
    });
}

function sendRequest(body, method, action) {
    fetch('/flights', {
        method,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
        .then(data => {
            if (data.status !== 200) {
                return;
            }
            action();
        })
}

function buildFlightFromFields(flightId, elements) {
    var flight = {id: flightId};

    elements.forEach(element => {
        var elementName = element.getAttribute('data-name');
        flight[elementName] = element.children[1].value;
    });
    return flight;
}

exports.editFlightOnClick = function (store, event) {
    event.stopPropagation();
    event.preventDefault();
    var targetElement = event.target.parentElement;
    var flightId = parseInt(targetElement.getAttribute('data-flight-id'), 10);
    var checkbox = targetElement.parentElement.children[0];
    var elements = getFieldElements(targetElement);
    if (!checkbox.checked) {
        checkbox.checked = true;
        fillFields(elements);
        return;
    }
    var flight = buildFlightFromFields(flightId, elements);
    checkbox.checked = false;
    sendRequest(flight, 'put', () => store.dispatch(editFlight(flight)));
};

function getNextId(store) {
    var flights = store.getState().flights;
    if (flights.length == 0) {
        return 0;
    }
    return Math.max.apply(null, flights.map(flight => flight.id)) + 1;
}


exports.createFlightOnClick = function (store, event) {
    event.stopPropagation();
    event.preventDefault();
    var targetElement = event.target.parentElement;
    var flightId = getNextId(store);
    var elements = getFieldElements(targetElement);
    var flight = {id: flightId};
    elements.forEach(element => {
        var elementName = element.getAttribute('data-name');
        flight[elementName] = element.children[0].value;
    });
    sendRequest(flight, 'post', () => store.dispatch(addFlight(flight)));
};

exports.deleteFlightOnClick = function (store, event) {
    var targetElement = event.target;
    var flightId = parseInt(targetElement.getAttribute('data-flight-id'), 10);
    sendRequest({flightId}, 'delete', () => store.dispatch(deleteFlight(flightId)));
};

