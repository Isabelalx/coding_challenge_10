// Task 1 Creating a Product Class

class Product {
    constructor(name, id, price, stock) {
    this.name = name; // Product name
    this.id = id; // Product ID
    this.price = price; // Product Price
    this.stock = stock; // Product Stock}
    };

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }; // Returning the Product Details

    updateStock(quantity){
        this.stock -= quantity; // Decreasing of stock by the given quantity
            
    };
}

const prod1 = new Product("Laptop", 101, 1200, 10); // Declaring a new product

console.log(prod1.getDetails());  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3); // Decrease the Amount of Stock by 3

console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"
