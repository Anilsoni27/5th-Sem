const root = ReactDOM.createRoot(document.getElementById("root"));

const getProductData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
};

const HeaderComponent = () => {
    return (
        <div
            style={{
                textAlign: "center",
                background: "black",
                color: "white",
            }}
        >
            <h1>E-Commerce Webpage</h1>
        </div>
    );
};

const ProductComponent = ({ products }) => {
    return (
        <div id="prod-container">
            {products.map((product) => (
                <div key={product.id}>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />
                    <h1>{product.title}</h1>
                </div>
            ))}
        </div>
    );
};

const FooterComponent = () => {
    return (
        <div
            style={{
                textAlign: "center",
                background: "black",
                color: "white",
            }}
        >
            <h1>Copyright all rights are reserved</h1>
        </div>
    );
};

const App = async () => {
    const products = await getProductData();

    const reactElement = (
        <>
            <HeaderComponent />
            <ProductComponent products={products} />
            <FooterComponent />
        </>
    );

    root.render(reactElement);
};

App();