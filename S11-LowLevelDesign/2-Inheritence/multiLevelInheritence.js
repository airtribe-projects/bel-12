class Animal {
   
    #name;

    constructor(name, sound) {
        this.#name = name;    // Private
        this.sound = sound;   // Public
    }

    // Public method
    speak() {
        console.log(`${this.#name} says ${this.sound}`);
    }

    getName() {
        return this.#name;
    }
}


// Mammal

class Mammal extends Animal {
    constructor(name, sound, type) {
        super(name, sound); // Call the parent (Animal) class constructor
        this.type = type;
    }

    breathe() {
        console.log(`${this.getName()} breathes through nose`);
    }
    // Method overriding
    speak() {
        // super.speak();
        console.log(`This animal makes a ${this.sound} sound`);
    } 
}


// const mammal = new Mammal('Dog', "Barks", "Domestic");

// mammal.breathe();

// mammal.speak();


class Human extends Mammal {
    constructor(name, sound, type, senseOfHumor) {
        super(name, sound, type);
        this.senseOfHumour = senseOfHumor;
    }

    whoAmI() {
        super.speak()
        
        //console.log(`I am ${this.getName()}`);
    }
}

const human = new Human('Jay', "Speaks", "Domestic", true);

// human.breathe();
human.whoAmI();

// console.log(human.senseOfHumour);


class Amphibian extends Animal {
    constructor(name, sound, type) {
        super(name, sound); // Call the parent (Animal) class constructor
        this.type = type;
    }

    breathe() {
        console.log(`${this.getName()} breathes through nose`);
    }
    // Method overriding
    speak() {
        super.speak();
        console.log(`This animal makes a ${this.sound} sound`);
    } 
}














