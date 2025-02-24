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

// Task 2 
// Creating an Order Class

class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId; // Order ID
        this.product = product; // Product being ordered
        this.quantity = quantity; // Quantity of product Ordered
        this.totalPrice = product.price * quantity; // Total price for the order
        this.product.updateStock(quantity); // Reduce stock based on quantity ordered
    }
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`
    }; // Return Formatted Order Details
}

const order1 = new Order(501, prod1, 2); // Declaring a new order

console.log(order1.getOrderDetails()); // Loggin the order details
console.log(prod1.getDetails()); // Logging

// Task 3
// Creating a Inventory Class

class Inventory {
    constructor() {
        this.products = []; // Array of products stored in Inventory
        this.orders= []; // Array or Orders Placed
    }
    addProduct(product) {
        this.products.push(product); // Adding a new Product to Inventory
    }
    listProducts(){
        this.products.forEach(product =>{
            console.log(product.getDetails());
        })
        }

        // Task 4 Modifications
        placeOrder(orderId, product, quantity) {
            if (product.stock >= quantity) {
                const newOrder = new Order(orderId, product, quantity); // Create new order
                this.orders.push(newOrder); // Adding new Order to order array
            
            }
        }
listOrders() {
    this.orders.forEach(order => {
        console.log(order.getOrderDetails());
    });
}

// Task 5 Modifications
restockProduct(productId, quantity) {
    const product = this.products.find(p =>p.id === productId); // Find a product bases on product ID
    if (product) {
        product.restock(quantity); // Increase product stock based on quantity
    } 
}
}

const inventory = new Inventory(); // Created a new Inventory Instance
inventory.addProduct(prod1); // Adding a new product to Inventory

inventory.listProducts(); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Task 4 
inventory.placeOrder(601, prod1, 2); // Placing a new Order

inventory.listOrders(); // Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"

// Task 5 
// Product Restocking 

inventory.restockProduct(101, 5); // Restocking of Product

console.log(prod1.getDetails()); // logging the product details


