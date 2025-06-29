class ParkingTicket {
    constructor(ticketId, vehicle ) {
        this.ticketId = ticketId;
        thei.vehicle = vehicle;
        this.amount = 0;   
    }

    calculateAmount() {
        if (this.vehicle.getType() == 'Small') {
            this.amount = 10;
        } else if (this.vehicle.getType() == 'Medium') {
            this.amount = 20;
        } else if (this.vehicle.getType() == 'Large') {
            this.amount = 30;
        } 
    }
}
