class OrderProcessingService {
    constructor(paymentService, notificationService) {
        this.paymentService = paymentService;
        this.notificationService = notificationService;
    }
    
    createOrder(orderDetails ) {
        // All the logic to create order
        // Validate the order items
        // Validate taxes, coupons, charges, 
        // Validate delivery area ...
        // Create a database entry
        // Use payment service, notificationService

        console.log("Order created with:", orderDetails);
    }

    processPayment(orderId, paymentDetails){
        // Can show different screen depending on the type of payment
        this.paymentService.processPayment(orderId, paymentDetails);
        console.log("Processing payment of :",orderId , paymentDetails);
    }

    sendNotification(orderId) {
        // Logic to fetch email template
        // Starting your smtp server
        // Process the customer data
        // triggering a send email
        this.notificationService.sendEmailNotification(orderId)
        console.log("Sending email for orderId :", orderId);
    }
}

class PaymentService {
     processCreditCardPayment(orderId, paymentDetails){
        console.log("Processing payment of :",orderId , paymentDetails);
    }
}

class NotificationService {
    sendEmailNotification(orderId) {
        console.log("Sending email for orderId :", orderId);
    }
}


