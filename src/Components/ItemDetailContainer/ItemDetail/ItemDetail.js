import ItemCount from "../../ItemListContainer/ItemList/Item/ItemCount/ItemCount.js"


const ItemDetail = ({item}) => {
  console.log(item)
  const { id, name, price, color, size, details } = item;


    const onAdd = (count) => {
        alert(`Se agregaron ${count} objetos al carrito`);
      };
                return (
                  <div>
        
                    <h2> {id} </h2>
                    <p>{details}</p>
                    <h2>Nombre: {name}</h2>
                    <h2> $ {price} </h2>
                    <h2> {color}</h2>
                    <h2>Talle: {size}</h2>
                    <ItemCount stock={5} initial={1} onAdd={onAdd} />
                  </div>
                );
              }

      

export default ItemDetail;