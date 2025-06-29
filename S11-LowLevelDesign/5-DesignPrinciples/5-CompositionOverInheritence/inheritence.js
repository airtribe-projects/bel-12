/*
    Quack, Fly, Swim, Walk

*/

class Duck {
    constructor(name) {
        this.name = name;
    }

    displayName() {
        console.log("I am named: ", this.name);
    }

    quack() {
        console.log(`${this.name} duck quacks`);
    }


    swim() {
        console.log(`${this.name} duck swims`);
    }

    walk() {
        console.log(`${this.name} duck walks`);
    }
}


class LakeDuck extends Duck {
    constructor(name) {
        super(name);
    }

    fly() {
        console.log(`${this.name} duck flies`);
    }
}
// LSP
class RubberDuck extends Duck {
    quack() {
         throw new Error(`I can't quack`);
    }

    swim() {
        throw new Error(`I can't swim`);
    }

    squeak() {
        console.log(`${this.name} duck squeaks`);
    }
}
