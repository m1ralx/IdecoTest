'use strict';

const _ = require('underscore');
const Flight = require('../models/flight');
const FlightFields = Object.keys(new Flight());

function filterFlights(requestWithFilters, flights) {
    var constraintFunctions = FlightFields.map(field => {
        return flight => {
            if (!(field in requestWithFilters.query))
                return true;
            var constraint = _.flatten([requestWithFilters.query[field]]);
            return constraint && _.contains(constraint, flight[field])
        }
    });

    return flights.filter(flight =>
        constraintFunctions.every(constraint => constraint(flight)));
}

exports.list = (req, res) => {
    res.render('flights/flights', req.commonData);
};

exports.apiList = (req, res) => {
    res.json({flights: filterFlights(req, Flight.findAll())});
};

exports.create = (req, res) => {
    const flight = new Flight(
        req.body.id,
        req.body.sourceCity,
        req.body.destinationCity,
        req.body.planeType,
        req.body.departureTime,
        req.body.realDepartureTime,
        req.body.status
    );
    flight.save();
    res.status(200).send();
};

exports.edit = (req, res) => {
    if (Flight.updateById(req.body.id, req.body)) {
        res.status(200).send();
    } else {
        res.status(400).send();
    }
};

exports.delete = (req, res) => {
    var flightId = req.body.flightId;
    var result = Flight.deleteById(flightId);
    if (result) {
        res.status(200).send();
    } else {
        res.status(400).send();
    }
};