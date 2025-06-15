// Segregated 
interface CreditCardPaymentProcessor {
    processCreditCard(amount: number): void;
}

interface DebitCardPaymentProcessor {
    processDebitCard(amount: number): void;
}


interface UPIPaymentProcessor {
    processUPI(amount: number): void;
}

interface NetBankingPaymentProcessor {
    processUPI(amount: number): void;
}


class CreditCardPayment implements CreditCardPaymentProcessor {
    processCreditCard(amount: number): void {
        console.log("Processing CC payment");
    }
}

class NetBankingPayment implements NetBankingPaymentProcessor {
    processNetBanking(amount: number): void {
        console.log("Processing CC payment");
    }
}
class PaymentGateway implements UPIPaymentProcessor, DebitCardPaymentProcessor, CreditCardPaymentProcessor {
    processCreditCard(amount: number): void {
        
    }

}

class BankTransfer implements NetBankingPaymentProcessor {
    
}