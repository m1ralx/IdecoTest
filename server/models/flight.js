'use strict';

var memoryStorage = [];

class Flight {
    constructor(id, sourceCity, destinationCity, planeType,
                departureTime, realDepartureTime, status) {
        this.id = id;
        this.sourceCity = sourceCity;
        this.destinationCity = destinationCity;
        this.planeType = planeType;
        this.departureTime = departureTime;
        this.realDepartureTime = realDepartureTime;
        this.status = status;
    }

    save() {
        memoryStorage.push(this);
    }

    static updateById(flightId, newFlight) {
        var flightStorageIndex = memoryStorage.findIndex(flight => flight.id === flightId);
        if (flightStorageIndex < 0) {
            return false;
        }
        memoryStorage[flightStorageIndex] = newFlight;
        return true;
    }

    static findAll() {
        return memoryStorage;
    }

    static deleteById(flightId) {
        var flightsCountBefore = memoryStorage.length;
        memoryStorage = memoryStorage.filter(flight => flight.id !== flightId);
        return flightsCountBefore > memoryStorage.length;
    }
}

memoryStorage.push(
    new Flight(0, "Yekaterinburg", "Moscow", "AirbusA320", "15:00", "15:06", "Вылетел"));

memoryStorage.push(
    new Flight(1, "St.-Petersburg", "Yekaterinburg",
        "Sukhoi Superjet100", "12:00", "12:05", "Приземлился"));

module.exports = Flight;
