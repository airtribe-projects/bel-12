class ParkingTicket {
constructor({ticketId, vehicle, spot, entryTime, exitTime, amount, paid}) {
        this.ticketId = ticketId;
        this.vehicle = vehicle;
        this.spot = spot;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
        this.amount = amount;
        this.paid = paid;
    }
}

class ParkingTicketBuilder {
    setVehicle(vehicle) {
        this.vehicle =  vehicle;
        return this;
    }

    setSpot(spot) {
        this.spot = spot;
        return this;
    }

    setEntryTime(entryTime) {
        this.entryTime = entryTime;
        return this;
    }

    setExitTime(exitTime) {
        this.exitTime = exitTime;
        return this;
    }

    setAmout(amount) {
        this.amount = amount;
        return this;
    }

    setPaidStatus(paid) {
        this.paid = paid;
        return this;
    }

    // Important function
    build() {
        return new ParkingTicket(this)
    }

}


const ticket = new ParkingTicketBuilder()
  .setExitTime(new Date())
  .setAmount(100)
  .setPaid(true)
  .build();

