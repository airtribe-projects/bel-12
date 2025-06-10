// Uses -  A Relationship

class Person {
    constructor(name) {
        this.name =  name;
    }

    openAccount(bank) {
        console.log(`${this.name} has opened an account in ${bank} bank`);
    }

    //readBook()

}

class Bank {
    constructor(name) {
        this.name = name;
    }

    openAccount(person) {
        console.log(`${person} has opened an account in ${this.bank} bank`)
    }

    provideLoan(person) {
        console.log(`${person} has taken a loan from ${this.bank} bank`)
    }

}

const jay = new Person('Jay');

const PNB = new Bank('PNB');

jay.openAccount(PNB);

PNB.provideLoan(jay);





