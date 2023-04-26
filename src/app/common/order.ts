export class Order {
    totalQuantity: number;
    totalPrice: number;

    constructor(order: Order) {
        this.totalQuantity = order.totalQuantity;
        this.totalPrice = order.totalPrice;
    }
}
