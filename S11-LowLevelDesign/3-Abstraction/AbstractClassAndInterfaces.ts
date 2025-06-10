class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
}

interface Drivable {
    drive(): void; // ==> // Abstract Method
    stop(): void;
    start(): void;
    xyz():void 
}

interface Flyable {
    takeoff(): void;
    land(): void;
    cruise(): void;
    xyz(): void;
}

class Car extends Vehicle implements Drivable{
    drive(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
    start(): void {
        console.log(`Starting the car: ${this.make} ${this.model}`);
    }   

}


class FighterJet extends Vehicle implements Flyable {
    takeoff(): void {
        throw new Error("Method not implemented.");
    }
    land(): void {
        throw new Error("Method not implemented.");
    }
    cruise(): void {
        throw new Error("Method not implemented.");
    }
    
}

class TeslaRoboTaxi extends Vehicle implements Drivable, Flyable {
    drive(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
    start(): void {
        throw new Error("Method not implemented.");
    }
    takeoff(): void {
        throw new Error("Method not implemented.");
    }
    land(): void {
        throw new Error("Method not implemented.");
    }
    cruise(): void {
        throw new Error("Method not implemented.");
    }
    xyz(): void{
        console.log("Hello there");
    }
}


// abstract class Person {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     display(): void{
//         console.log("My name is: ", this.name);
//     }

//     abstract getAddress() : string 
// }

abstract class Man extends Person {
    abstract walk(): void;
}

// class Employee extends Person {
//     getAddress(): string {
//         throw new Error("Method not implemented.");
//     }
// }




// const jay = new Person('Jay');

