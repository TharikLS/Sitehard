const cart = document.getElementById("cart");

function addToCart(name, price, url) {
    // Fetch existing items from localStorage
    const existingItemsString = localStorage.getItem('cartItems');
    // Parse the existing items JSON string into an array (or initialize an empty array if no items exist)
    const existingItems = existingItemsString ? JSON.parse(existingItemsString) : [];

    // Create a new item object
    const newItem = {
        name,
        price,
        url
    };

    // Add the new item to the existing items array
    existingItems.push(newItem);

    // Convert the updated items array back to a JSON string
    const updatedItemsString = JSON.stringify(existingItems);

    // Save the updated items back into localStorage
    localStorage.setItem('cartItems', updatedItemsString);

    // Refresh the cart display
    showItems();
}

function removeItem(index) {
    // Fetch existing items from localStorage
    const existingItemsString = localStorage.getItem('cartItems');
    // Parse the existing items JSON string into an array
    const existingItems = existingItemsString ? JSON.parse(existingItemsString) : [];

    // Remove the item at the specified index
    existingItems.splice(index, 1);

    // Convert the updated items array back to a JSON string
    const updatedItemsString = JSON.stringify(existingItems);

    // Save the updated items back into localStorage
    localStorage.setItem('cartItems', updatedItemsString);

    // Refresh the cart display
    showItems();
}

function showItems() {
    // Clear the current content of the cart before updating it
    cart.innerHTML = '';

    const jsonString = localStorage.getItem('cartItems');
    if (jsonString) {
        const items = JSON.parse(jsonString);
        items.forEach((item, index) => {
            // Display each item in the cart
            cart.innerHTML += `<div class='cart'>
                <div class='child-cart'>
                    <img src='${item.url}' width='64' alt='image'>
                    ${item.name}: R$${item.price}
                    <button onclick='removeItem(${index})'>Excluir</button>
                </div>
            </div>`;
        });
    }
}

// Call showItems() initially to display any existing items in the cart when the page loads
showItems();
