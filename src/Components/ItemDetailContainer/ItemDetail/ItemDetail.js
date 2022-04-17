import ItemCount from "../../ItemListContainer/ItemList/Item/ItemCount/ItemCount.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext.js";

const ItemDetail = ({ item }) => {
  const { id, name, price, color, size, details, } = item;
  const [terminarCompra, setTerminarCompra] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (count) => {

    addToCart({ ...item, quantity: count });
    setTerminarCompra(true);
  };

  
  return (
    <>
      {terminarCompra ? (
        <div>
          <p>{details}</p>
          <h2>{name}</h2>
          <h2> $ {price} </h2>
          <h2>{color}</h2>
          <h2>Talle: {size}</h2>
          <Link to="/cart">
            <button>Terminar MI COMPRA</button>
          </Link>
        </div>
      ) : (
        <div>
          <p>{details}</p>
          <h2>{name}</h2>
          <h2> $ {price} </h2>
          <h2> {color}</h2>
          <h2>Talle: {size}</h2>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
      )}
    </>
  );
};

export default ItemDetail;
