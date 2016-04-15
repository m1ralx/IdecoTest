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
    res.render('flights/flights', Object.assign(data, req.commonData));
};

exports.apiList = (req, res) => {
    res.json({flights: filterFlights(req, Flight.findAll())});
};

exports.edit = (req, res) => {
    res.render('flights/flights', req.commonData);
};

exports.create = (req, res) => {
    const data = {
        id: req.body.id,
        sourceCity: req.body.sourceCity,
        destinationCity: req.body.destinationCity,
        planeType: req.body.planeType,
        departureTime: req.body.departureTime,
        realDepartureTime: req.body.realDepartureTime,
        status: req.body.status
    };
    const flight = new Flight(data);

    flight.save();

    res.json(data);
};