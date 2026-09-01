const cartProduct = document.getElementById("cart-products");

const cart = JSON.parse(
    localStorage.getItem("cart")
) || [];


cart.forEach((product) => {

    const div = document.createElement("div");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;

    const title = document.createElement("h1");
    title.innerText = product.title;

    const price = document.createElement("h2");
    price.innerText = `Price: $${product.price}`;

    const quantity = document.createElement("h3");
    quantity.innerText = `Quantity: ${product.quantity}`;

    const totalPrice = document.createElement("h2");
    totalPrice.innerText =
        `Total: $${product.totalPrice}`;


    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(price);
    div.appendChild(quantity);
    div.appendChild(totalPrice);

    cartProduct.appendChild(div);

});