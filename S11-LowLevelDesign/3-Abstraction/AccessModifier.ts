class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    protected getDetails() : string {
        return `Name: ${this.name}`
    }

    private creditCardInfo() : void {
        console.log("This is my CC details")
    } 
}


class Employee extends Person {
    private role: string;
    constructor(name: string, role: string) {
        super(name);
        this.role = role;
    }

    public displayInfo() :void {
        console.log(`I am ${this.getDetails()} and I have credit card ${this.creditCardInfo()}`)
    }

}

const jay =  new Person("Jay");
const akash =  new Employee("Akash", "JS Guru")

jay.creditCardInfo();

jay.getDetails();

akash.getDetails();

