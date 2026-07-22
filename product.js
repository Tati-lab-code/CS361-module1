// Week 10 - Task 04: Product class, moved into its own module

export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    withTax() {
        return this.price + this.price * 0.16;
    }
}