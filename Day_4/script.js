const products = document.getElementsByClassName("product")[0];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let productsData = [];

const getProductData = async () => {

    const res = await fetch("https://dummyjson.com/products");

    const data = await res.json();

    productsData = data.products;

    productsData.forEach((product) => {

        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = product.title;

        const title = document.createElement("h1");
        title.innerText = product.title;

        const price = document.createElement("h2");
        price.innerText = `$${product.price}`;

        const decrementBtn = document.createElement("button");
        decrementBtn.innerText = "-";

        const span = document.createElement("span");

        const incrementBtn = document.createElement("button");
        incrementBtn.innerText = "+";

        // Check if product already exists in cart
        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        let counter = existingProduct
            ? existingProduct.quantity
            : 0;

        span.innerText = counter === 0 ? "ADD" : counter;


        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(decrementBtn);
        div.appendChild(span);
        div.appendChild(incrementBtn);

        products.appendChild(div);


        // PLUS BUTTON
        incrementBtn.addEventListener("click", () => {

            counter++;

            const existingProduct = cart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {

                existingProduct.quantity = counter;

                existingProduct.totalPrice =
                    existingProduct.price * counter;

            } else {

                cart.push({
                    id: product.id,
                    image: product.thumbnail,
                    title: product.title,
                    price: product.price,
                    quantity: counter,
                    totalPrice: product.price * counter
                });
            }

            span.innerText = counter;

            // Save complete cart array
            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

            console.log(cart);
        });


        // MINUS BUTTON
        decrementBtn.addEventListener("click", () => {

            if (counter > 0) {

                counter--;

                const existingProduct = cart.find(
                    (item) => item.id === product.id
                );

                if (existingProduct) {

                    existingProduct.quantity = counter;

                    existingProduct.totalPrice =
                        existingProduct.price * counter;

                    // Remove product if quantity becomes 0
                    if (counter === 0) {

                        cart = cart.filter(
                            (item) => item.id !== product.id
                        );
                    }
                }

                span.innerText =
                    counter === 0 ? "ADD" : counter;

                // Update localStorage
                localStorage.setItem(
                    "cart",
                    JSON.stringify(cart)
                );

                console.log(cart);
            }
        });

    });

};

getProductData();