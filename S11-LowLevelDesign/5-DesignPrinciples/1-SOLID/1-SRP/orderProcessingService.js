class OrderProcessingService {
    createOrder(orderDetails) {
        // All the logic to create order
        // Validate the order items
        // Validate taxes, coupons, charges, 
        // Validate delivery area ...
        // Create a database entry

        console.log("Order created with:", orderDetails);
    }

    processPayment(orderId, paymentDetails){
        // Can show different screen depending on the type of payment

        console.log("Processing payment of :",orderId , paymentDetails);
    }

    sendNotification(orderId) {
        // Logic to fetch email template
        // Starting your smtp server
        // Process the customer data
        // triggering a send email
        console.log("Sending email for orderId :", orderId);
    }
}


// CC, DB, New: UPI, IntBank, BTC
// Email, SMS, Whatsapp message, in app notif