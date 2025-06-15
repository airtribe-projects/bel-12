interface Engine {
    start(): void;
}

class PetrolEngine implements Engine {
    start() {
        console.log("Petrol engine started");
    }
}

class CNGEngine implements Engine {
    start() {
        console.log("CNG engine started");
    }
}

class DieselEngine implements Engine {
    start() {
        console.log("Diesel engine started");
    }
}


class Car {
  private engine: Engine;

  constructor(engine) {
    this.engine = engine;
  }

  startCar() {
    this.engine.start();
    console.log("Car started");
  }
}


// Business Logic
let petrolEngine = new PetrolEngine();
let merc: Car =  new Car(PetrolEngine);

/*
DI helps in Loose copling and tight cohesion


*/



