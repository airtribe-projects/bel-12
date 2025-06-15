interface PaymentProcessor {
    processCreditCard(amount: number): void;
    processDebitCard(amount: number): void;
    processUPI(amount: number): void;
}

class CreditCardProcessor implements PaymentProcessor {
    processCreditCard(amount: number): void {
        console.log("Processing CC payment");
    }

    processDebitCard(amount: number): void {
        throw new Error("This is a method of CC");    
    }

    processUPI(amount: number): void {
         throw new Error("This is a method of CC");
    }
}