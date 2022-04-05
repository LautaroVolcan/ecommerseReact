
import './App.css';

//Components
import Navbar from './Components/NavBar/Navar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetail/ItemDetailContainer';






function App() {
  return (
    <div className="App">
       <Navbar/> 
       <ItemListContainer greetings='SoxCommerce'/>
       <ItemDetailContainer/>
    </div>
  );
}

export default App;
