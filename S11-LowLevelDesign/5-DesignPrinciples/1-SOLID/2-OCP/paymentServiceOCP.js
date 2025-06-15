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

class PaymentService {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }

     deductAmount(amount) {  
        this.paymentService.processPayment(amount);
    }
}

const creditCardPayment = new CreditCardPayment();
const paymentService = new PaymentService(creditCardPayment);
paymentService.deductAmount(100);


