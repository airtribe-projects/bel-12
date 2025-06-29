// It should be an interface
class ParkingFeeStrategy {
    calculateFee(vehicle) {
        throw new Error('Error Calulcalating Fee');
    }
}

class SmallParkingFeeStrategy extends ParkingFeeStrategy{
    calculateFee(vechicle) {
        return 10;
    }
}


class MediumParkingFeeStrategy extends ParkingFeeStrategy {
    calculateFee(vechicle) {
        return 20;
    }
}


class LargeParkingFeeStrategy extends ParkingFeeStrategy {
    calculateFee(vechicle) {
        return 30;
    }
}

//DI
class ParkingTicket {
    constructor(ticketId, vehicle, feeStrategy) {
        this.ticketId = ticketId;
        this.vehicle = vehicle;
        this.amount = 0; 
        this.feeStrategy = feeStrategy
    }
    // All if else are gone
    calculateAmount() {
        this.feeStrategy.calculateFee(); 
    }

}

const vehicle =  new vehicle("ABC", "Medium");
const smallFeeStrategy = new SmallParkingFeeStrategy();

const ticket = new ParkingTicket("123", vehicle, smallFeeStrategy);

ticket.calculateAmount();
