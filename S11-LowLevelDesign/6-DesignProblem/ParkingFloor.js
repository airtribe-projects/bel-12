class ParkingFloor {
    constructor(floorName) {
        this.floorName = floorName;
        this.spots = [];
    }

    addSpot(spot) {
        this.spots.push(spot);
    }

    getAvaialableSpotForVehicle() {
        for (let i = 0; i < this.spots.length; i++) {
            if (!this.spots[i].isOccupied) {
                return this.spots[i];
            }
        }
        return null;        
    }

    isFull() {
        return this.spots.every(spot => spot.isOccupied);
    }

    getFloorName() {
        return this.floorName;
    }
}