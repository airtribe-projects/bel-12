class ParkingLot {
    constructor(parkingLotId, parkingLotName, address, totalFloors, entryPanel, exitPanel){
        this.parkingLotId = parkingLotId;
        this.parkingLotName = parkingLotName;
        this.address = address;
        this.totalFloors = totalFloors;
        this.entryPanel = entryPanel;
        this.exitPanel = exitPanel;
        this.parkingFloors = [];
    }

    isFull() {
        return this.parkingFloors.every(floor => floor.isFull());
    }

    addParkingFloor(parkingFloor) {
        this.parkingFloors.push(parkingFloor);
    }   

    
    parkVehicle(vehicle) {
        const parkingFloor = this.entryPanel.computeFloortoBeParkedOn(this.parkingFloors, vehicle.getVehicleType());
        const ticket = this.entryPanel.generateParkingTicket(vehicle, parkingFloor);
        console.log(`Vehicle ${vehicle.getVehicleId()} parked on ${parkingFloor.getFloorName()} with ticketId ${ticket.getTicketId()}`);
        return ticket;
    }

    exitVehicle(ticket) {
        const updatedTicket = this.exitPanel.checkout(ticket);
        console.log(`Vechicle exited with ticketId ${updatedTicket.getTicketId()} amount ${updatedTicket.getAmount()}`);
    }

}