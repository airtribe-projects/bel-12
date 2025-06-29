const processOrder = (order) => {
    if (order.isValid()) {
        if(order.getItems.size() > 0) {
            for (item of order.getItems()) {
                if (item.isAvailable()) {
                    item.process()
                } else {
                    item.removeFromCart()
                }
            }
            order.confirm()
        } else {
            order.cancel()
        }
    }
}

const processOrderKiss = (order) => {
    if (!order.isValid()) return;

    if (order.getItems.size() == 0)  {
        order.cancel();
        return;
    }

    processOrderItems(order.getItems());
    order.confirm();
}

const processOrderItems = (items) => {
    for (const item of items) {
        item.isAvailable() ? item.process(): item.removeFromCart();
    }
}


// Fail Fast approach


