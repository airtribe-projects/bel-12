// ENUM for Vehicle Types, can't create Abstract classes or interface in JS
const vehicleType = Object.freeze({
    BUS:'bus',
    CAR: 'Car',
    TRUCK: 'Truck',
    MOTORCYCLE: 'Motorcycle',
    BICYCLE: 'Bicycle'
});

module.exports = vehicleType;