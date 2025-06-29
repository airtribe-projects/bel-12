class Address {
    constructor(street, city) {
        this.street = street;
        this.city = city;
    }
    getCity() {
        return this.city;
    }
}

// Has - A relationship (Weak)


class Customer {
    constructor(name, address, currentAddress) {
        this.name = name;
        this.address = address;
        this.currentAddress = currentAddress;
    }
    getAddress() {
        return this.address;
    }

    getShipingCity() {
        return this.currentAddress.getCity();
    }
}


class Order {
    constructor(customer) {
        this.customer = customer;
    }
    printShipingCity() {
        console.log( this.customer.getShipingCity());
    }
}