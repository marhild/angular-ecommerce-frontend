export class Address {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;

    constructor(address: Address) {
        this.street = address.street;
        this.city = address.city;
        this.state = address.state;
        this.country = address.country;
        this.zipCode = address.zipCode;
    }
}
