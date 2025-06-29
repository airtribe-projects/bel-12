class OldPaymentProcessor {
    processPayment(amount) {
        console.log(`Deducting amount ${amount}`); 
    }   
}

// const paymentGateway = new OldPaymentProcessor()
// paymentGateway.processPayment(10);



// New non modifyable code
class NewPaymentProcessor {
    executePayment(amountInCents) {
        console.log(`Deducting amount ${amountInCents/100}`);
    }
}

class PaymentAdapter{
    constructor(newPaymentProcessor) {
        this.newPaymentProcessor = newPaymentProcessor;
    }

    processPayment(amount) {
        this.newPaymentProcessor.processPayment(amount*100);
    }
}

const paymentProcessor = new NewPaymentProcessor()
const paymentGateway = new PaymentAdapter(paymentProcessor);
paymentGateway.processPayment(10);

//Violating OCP