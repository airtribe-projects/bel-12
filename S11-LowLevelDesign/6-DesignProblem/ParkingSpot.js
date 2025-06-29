class ParkingSpot {
  constructor(spotName, spotType) {
    this.spotName = spotName;
    this.spotType = spotType;   
    this.isOccupied = false;
    this.vechicle = null;

  }
  
  isOccupied() {
    return this.isOccupied;
  }
  // Setter Injection
  parkVehicle(vechicle){
    if (this.isOccupied) {
      console.log("Parking spot is already occupied.");
      return false;
    }
    this.vechicle = vechicle;
    this.isOccupied = true;
    console.log(`Vehicle ${vechicle.getVehicleId()} parked in ${this.spotName}`);
    return true;    
  }

  removeVehicle() {
        if (!this.isOccupied) {
        console.log("Parking spot is already empty.");
        return false;
        }
        console.log(`Vehicle ${this.vechicle.getVehicleId()} removed from ${this.spotName}`);
        this.vechicle = null;
        this.isOccupied = false;
        return true;    
    }

    getSpotName() {
        return this.spotName;
    }

    getSpotType() {
        return this.spotType;
    }
    getVehicle() {
        return this.vechicle;
    }

}

module.exports = ParkingSpot;