
import ItemList from './ItemList/ItemList.js';


const ItemListContainer = (props) => {
const {greetings} = props

    
    return(
          <div>
        <h1>{greetings}</h1>
        <ItemList/>
        </div>

    )
}
export default ItemListContainer;

