const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
];

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    loadCart();
    
    document.getElementById("clear-cart-btn").addEventListener("click", clearCart);
});

function renderProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
        productList.appendChild(li);
    });
}

function addToCart(productId) {
    const cart = getCart();
    const product = products.find(p => p.id === productId);
    
    if (product) {
        cart.push(product);
        saveCart(cart);
        renderCart();
    }
}

function renderCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = ""; // Clear the current cart display
    const cart = getCart();

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
}

function clearCart() {
    sessionStorage.removeItem("shoppingCart");
    renderCart(); // Update the cart display
}

function saveCart(cart) {
    sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
}

function getCart() {
    const cart = sessionStorage.getItem("shoppingCart");
    return cart ? JSON.parse(cart) : [];
}

function loadCart() {
    renderCart(); // Render the cart on page load
}