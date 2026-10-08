import React, { useEffect, useState } from 'react'
import Header from './Components/Header';
import Products from './Components/Products';
import Footer from './Components/Footer';
// import { BrowserRouter,Route,Routes} from 'ract-router-dom';
// import Home from './Components/Home';
// import Contact from './Components/Contact';
// import Cart from './Components/Cart';

const App = () => {
  const[products,setproducts] = useState([]);
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log);

  },[])
  console.log(products);
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
       </Routes>
      </BrowserRouter>
      <Header/>
      <Products products={products}/>
      <Footer/>
    </div>
  )
}

export default App