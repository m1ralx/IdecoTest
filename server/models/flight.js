'use strict';

const memoryStorage = [];

class Flight {
    constructor(
        id, sourceCity, destinationCity, planeType,
        departureTime, realDepartureTime, status) {
        this.id = id;
        this.sourceCity = sourceCity;
        this.destinationCity = destinationCity;
        this.planeType = planeType;
        this.departureTime = departureTime;
        this.realDepartureTime = realDepartureTime;
        this.status = status;
    }
    save() {memoryStorage.push(this);}
    static findAll() {return memoryStorage;}
}

memoryStorage.push(
    new Flight(0, "Yekaterinburg", "Moscow", "Airbus A320", "15:00", "15:06", "Вылетел"));

memoryStorage.push(
    new Flight(1, "St.-Petersburg", "Yekaterinburg",
        "Sukhoi Superjet100", "12:00", "12:05", "Приземлился"));

module.exports = Flight;
