class PetrolEngine {
  start() {
    console.log("Petrol engine started");
  }
}

class Car {
  private engine: PetrolEngine;

  constructor() {
    this.engine = new PetrolEngine();
  }

  startCar() {
    this.engine.start();
    console.log("Car started");
  }
}


const car = new Car();
car.startCar();

// PM 

