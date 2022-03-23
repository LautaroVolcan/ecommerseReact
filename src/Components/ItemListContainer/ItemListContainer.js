import itemCount from '../Components/NavBar/itemCount';



const ItemListContainer = (props) => {

    return(
          <div>
        <h1>{props.greetings}</h1>
        <itemCount/>
        </div>

    )
}
export default ItemListContainer;

