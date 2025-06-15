const calculateTotal = (amount) => {
    let tax = 0.06 * amount;
    let total = amount + tax;
    return total;
}

const calculateFinalTotal = (amount) => {
    let tax = 0.06 * amount;
    let finalTotal = amount * 1.1 + tax;
    return finalTotal;
}

const calculateTotalUsingDRY = (amount, includeFinal) => {
    let tax = 0.1 * amount;

    if (includeFinal) {
        return amount * 1.1 + tax;
    }
    
    return amount + tax;
}









