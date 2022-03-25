
import './App.css';

//Components
import Navbar from './Components/NavBar/Navar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'






function App() {
  return (
    <div className="App">
       <Navbar/> 
       <ItemListContainer greetings='SoxCommerce'/>
    </div>
  );
}

export default App;
