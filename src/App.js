import "./App.css";

//Components
import Navbar from "./Components/NavBar/Navar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetail/ItemDetailContainer";

// Routes

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/items" element={ <ItemListContainer greetings='SoxCommerce'/>} />
          <Route path="/Item1" element={<ItemDetailContainer/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
