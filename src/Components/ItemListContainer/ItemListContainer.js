import ItemCount from '../NavBar/ItemCount.js';



const ItemListContainer = (props) => {

    const onAdd =()=> {
        alert("Se agregaron" + count + "objetos al carrito")
    }
    return(
          <div>
        <h1>{props.greetings}</h1>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </div>

    )
}
export default ItemListContainer;

