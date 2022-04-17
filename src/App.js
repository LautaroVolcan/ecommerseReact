import "./App.css";

//Components
import HomePage from "./pages/home";
import Navbar from "./Components/NavBar/Navar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetail/ItemDetailContainer";
import Cart from "./pages/cart/Cart";
import {CartContextProvider} from './Context/CartContext'

// Routes

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage/>}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer greetings="SoxCommerce" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        </CartContextProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
