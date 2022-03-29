
import ItemList from './ItemList/ItemList.js';
import ItemDetail from '../ItemListContainer/ItemDetail'

const ItemListContainer = (props) => {
const {greetings} = props

    
    return(
          <div>
        <h1>{greetings}</h1>
        <ItemList/>
        <ItemDetail/>
        </div>

    )
}
export default ItemListContainer;

