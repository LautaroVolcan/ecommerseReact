
import './App.css';
import Navbar from './Components/NavBar/Navar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
       <Navbar/> 
       <ItemListContainer greetings='Hola Mundo'/>
    </div>
  );
}

export default App;
