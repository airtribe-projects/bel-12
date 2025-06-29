class Vehicle {
    constructor(vehicleId, vehicleType) {
        this.vehicleId = vehicleId;
        this.vehicleType = vehicleType;
    }

    getVehicleId() {
        return this.vehicleId;
    }

    getVehicleType() {
        return this.vehicleType;
    }   
}

module.exports = Vehicle;