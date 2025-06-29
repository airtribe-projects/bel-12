class PaymentMehtod {
    processPayment(amount) {
        console.error("Implement this method");
    }
}

class CreditCardPayment  extends PaymentMehtod{
    processPayment(amount) {
        console.log("Processing credit card payment");
    }
}

class DebitCardPayment  extends PaymentMehtod{
    processPayment(amount) {
        console.log("Processing debit card payment");
    }
}

class UPIPayment  extends PaymentMehtod{
    processPayment(amount) {
        console.log("Processing UPI payment");
    }
}

class NetBankingPayment  extends PaymentMehtod{
    processPayment(amount) {
        console.log("Processing NB payment");
    }
}

class FreePayment extends PaymentMethod {
    processPayment(amount) {
        console.log("No need to process the payment as it is free");
        throw new Error("Free payment doesn't need processing");
    }
}

class PaymentService {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }

     deductAmount(amount) {  
        this.paymentService.processPayment(amount);
    }
}


// Business logic
const creditCardPayment = new CreditCardPayment();
const freePayment = new FreePayment();

const paymentService = new PaymentService(freePayment);

paymentService.deductAmount(100);




// violating LSP