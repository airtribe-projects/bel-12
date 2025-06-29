const ParkingTicket = require('./ParkingTicket');
const ParkingSpotType = require('./ParkingSpotType');

class EntryPanel {
    computeFloorToBeParkedOn(parkingFloors, vehicleType) {
        for (let floors of parkingFloors) {
            if (!floor.isFull()) {
                return floor;
            }
        }
        return null;
    }

    generateParkingTicket(vehicle, parkingFloor) {
        const ticketId = `${vehicle.getVehicleId()}-${new Date().getTime()}`;
        const spot =  parkingFloor.getAvaialableSpotForVehicle();
        const ticket = new ParkingTicket(ticketId, vehicle, spot);
        spot.parkVehicle(vehicle);
        return ticket;
    }

    generateSpotTypeBasedOnVehicleType(vehicleType) {
        // Logic to generate spot type based on vehicle type
        switch (vehicleType) {
            case 'ELECTRIC':
                return ParkingSpotType.ELECTRIC;
            case 'HANDICAPPED':
                return ParkingSpotType.HANDICAPPED;
            default:
                return ParkingSpotType.REGULAR;
        }
    }

}