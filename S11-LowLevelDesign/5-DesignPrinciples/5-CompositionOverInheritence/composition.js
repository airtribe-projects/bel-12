class QuackBehaviour {
    quack() {
        console.log(`This quacks`);
    }
}

class SwimBehaviour {
    swim() {
        console.log(`This swims`);
    }
}

class FlyBehaviour {
    fly() {
        console.log(`This flies`);
    }
}


class Duck {
    constructor(name) {
        this.name = name;
    }

    displayName() {
        console.log("I am named: ", this.name);
    }

    performSwim() {
        this.swimBehaviour.swim();
    }

}

class LakeDuck extends Duck {
    // Has - A (strong)
    constructor(name, quackBehaviour, swimBehaviour, flyBehaviour) {
        super(name);
        this.quackBehaviour = quackBehaviour;
        this.swimBehaviour = swimBehaviour;
        this.flyBehaviour = flyBehaviour;
    }

    performQuack() {
        this.quackBehaviour.quack();
    }

    performFly() {
        this.flyBehaviour.fly();
    }

  
}


class RubberDuck extends Duck {
    constructor(name) {
        super(name, quackBehaviour);
        this.quackBehaviour = quackBehaviour;
        
    }


    performQuack() {
        this.quackBehaviour.quack();
    }
}


class 


// Follows LSP, DI
let RubberDuck = new RubberDuck("Rubber Duck", new QuackBehaviour());


