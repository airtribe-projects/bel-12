
// Defining object as literals
// const car = {
//     make: "Toyota",
//     model: "Camary",
//     year: " 2023",
//     start: function() {
//         console.log("Car is starting");
//     },
//     drive: function (speed) {
//         console.log("Car is driving at speed: ", speed);
//     }
// }

// const maruticar = {
//     make: "Maruti",
//     model: "Swift",
//     manufacturingYear: " 2023",
    
//     start: function() {
//         console.log("Car is starting");
//     },
//     drive: function (speed) {
//         console.log("Car is driving at speed: ", speed);
//     }
// }

// car.start()
// car.drive(5)

/* What problems do you see?
- Will have to define different cars independently
- Code duplication
- Uniformity
- Accessibility: No cconcept of modifiers
*/

// function car(make, model, year, color) {
//     this.make = make;
//     this.year = year;
//     this.model = model;

//     this.start = function () {
//          console.log("Car is starting");
//     }

//     this.drive =function(speed) {
//          console.log("Car is driving at: ", speed);
//     }
// }

// const camary =  new car("Toyota", "camary", "2023", "white");

// const swift =  new car("Maruti", "Swift", "2020", "Gray");

// camary.start()
// camary.drive(100);

// swift.start();
// swift.drive(50);

// - Accessibility: No cconcept of modifiers 
// Private
// Protected
// default
// Public
// Inheritence

// ES6 Private and Public
// By default everything is public
// You can make your methods or attributes private by adding a #
class car {
    #model;
    constructor(make, model, year) {
        this.make = make;
        this.year = year;
        this.#model = model;
    }

    start() {
        this.#ignite();
        console.log(`${this.#model} is starting`);
    }

    drive(speed) {
        console.log(`${this.#model} is driving at: `, speed)
    }

    #ignite() {
        console.log("Injecting petrol to engine");
    }
}

const camary =  new car("Toyota", "camary", "2023", "white");

const swift =  new car("Maruti", "Swift", "2020", "Gray");
camary.start()
camary.drive(100);

swift.start();
swift.drive(50);

// console.log(camary.#ignite());
// console.log(camary.#model);





