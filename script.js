const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
];

// Function to render the product list
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.onclick = () => addToCart(product);
        li.appendChild(addButton);
        productList.appendChild(li);
    });
}

// Function to render the shopping cart
function renderCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Clear existing cart items
    const cart = getCart();

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
}

// Function to add a product to the cart
function addToCart(product) {
    const cart = getCart();
    cart.push(product);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Function to retrieve the cart from session storage
function getCart() {
    const cart = sessionStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Function to clear the cart
function clearCart() {
    sessionStorage.removeItem('cart');
    renderCart();
}

// Event listener for the clear cart button
document.getElementById('clear-cart-btn').addEventListener('click', clearCart);

// Initial rendering of products and cart
renderProducts();
renderCart();