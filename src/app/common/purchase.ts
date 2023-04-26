import { Address } from "./address";
import { Customer } from "./customer";
import { Order } from "./order";
import { OrderItem } from "./order-item";

export class Purchase {
    customer: Customer;
    shippingAddress: Address;
    billingAddress: Address;
    order: Order;
    orderItems: OrderItem[];

    constructor(purchase: Purchase) {
        this.customer = purchase.customer;
        this.shippingAddress = purchase.shippingAddress;
        this.billingAddress = purchase.billingAddress;
        this.order = purchase.order;
        this.orderItems = purchase.orderItems;
    }
}
