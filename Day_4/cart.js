const cartproducts = document.getElementById("cart-products");
const showProduct = () => {
    const div = document.createElement("div");

    const img = document.createElement("img");
     img.src = localStorage.getItem("img");
     img.alt = "product img here";
    const title = document.createElement("h1");
     title.innerText =localStorage.getItem("title");
    const price = document.createElement("h2");
     price.innerText = `$$(localStorage.getItem("price"))`;

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(price);

    cartproducts.appendChild(div);
}
showProduct();