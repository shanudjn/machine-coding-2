
import { useState } from 'react';
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';


function App() {
  const [route, setRoute] = useState("products")
  return (
    <div className="App">

      <button onClick={() => setRoute("products")}>Products</button>
      <button onClick={() => setRoute("cart")}>Cart</button>
      {route === "products" && <Products />}
      {route === "cart" && <Cart />}


      {/* <Products /> */}
    </div>
  );
}

export default App;
