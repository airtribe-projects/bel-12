// Has - A (Strong)
// Person and Heart

class Heart {
    constructor(){}

    beat() {
        console.log("My heart is beating")
    }
}



class Person {
    #heart;

    constructor() {
        this.#heart = new Heart();
    }

    breathe() {
        // Take in air
        // Heart beats
        // Take out air
    }
}


const jay = new Person();

jay.breathe();