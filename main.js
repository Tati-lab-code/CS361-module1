// Week 10 - Task 04: Import Product from module
import { Product } from "./product.js";

// Week 10 - Task 02: Loading & Error States

const userList = document.querySelector("#user-list");

async function loadUsers() {
    userList.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(`Server responded with status ${response.status}`);
        }

        const users = await response.json();

        userList.innerHTML = users
            .map((user) => `
                <div class="user-card">
                    <h3>${user.name}</h3>
                    <p>${user.email}</p>
                </div>
            `)
            .join("");
    } catch (error) {
        userList.innerHTML = `<p class="error-message">Sorry, something went wrong loading users. Please try again later.</p>`;
        console.log(`Failed to load users: ${error.message}`);
    }
}

loadUsers();



// Week 10 - Task 05: A Persistent Cart

const products = [
    new Product("Textbook", 250),
    new Product("Laptop Bag", 180),
    new Product("USB Drive", 60)
];

const productList = document.querySelector("#product-list");
const cartDisplay = document.querySelector("#cart-display");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
    productList.innerHTML = products
        .map((product, index) => `
            <div class="product-card">
                <h3>${product.name}</h3>
                <p>Price: K${product.price.toFixed(2)}</p>
                <p>Price incl. tax: K${product.withTax().toFixed(2)}</p>
                <button data-index="${index}" class="add-to-cart-btn">Add to Cart</button>
            </div>
        `)
        .join("");
}

// Week 10 - Task 06: Bring It Together

const cartTotal = document.querySelector("#cart-total");

function renderCart() {
    cartDisplay.innerHTML = cart
        .map((item) => `<p>${item.name} - K${item.price.toFixed(2)}</p>`)
        .join("");

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const totalWithTax = total + total * 0.16;

    cartTotal.textContent = `Total (incl. tax): K${totalWithTax.toFixed(2)}`;
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

productList.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart-btn")) {
        const index = event.target.dataset.index;
        const selectedProduct = products[index];
        cart.push({ name: selectedProduct.name, price: selectedProduct.price });
        saveCart();
        renderCart();
    }
});

renderProducts();
renderCart();