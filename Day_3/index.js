const showData = async() => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    const products = data.products;

    products.map((data) => {
        // console.log(data.id);
        // console.log(data.title);
        const product = document.createElement("div");
        product.innerText= data.title;
        product.id
        // document.write(data.id);
        // document.write(data.title);


    });
}