export class Customer {
    firstName: string;
    lastName: string;
    email: string;

    constructor(customer: Customer) {
        this.firstName = customer.firstName;
        this.lastName = customer.lastName;
        this.email = customer.email;
    }
}
