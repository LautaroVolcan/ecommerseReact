import ItemCount from "../../ItemListContainer/ItemList/Item/ItemCount/ItemCount.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext.js";
import Button from '@mui/material/Button';
import './item-detail.css'
import Typography from '@mui/material/Typography';




const ItemDetail = ({ item }) => {
  const { name, price, color, size, details, img } = item;
  const [terminarCompra, setTerminarCompra] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (count) => {

    addToCart({ ...item, quantity: count });
    setTerminarCompra(true);
  };

  
  return (
    <>
      {terminarCompra ? (
        <div className="mainContainer">
          <div className= "itemImg"> <img className="imgDetail" src= {img}  alt="itemImg"/> 
          </div>
<div className="containerDetail">
<Typography>
          <p>{details}</p>
          <h2>{name}</h2>
          <h2> $ {price} </h2>
          <h2>{color}</h2>
          <h2>Talle: {size}</h2>
          </Typography>
          </div>
          
          <Link to="/cart">
            <Button>Go to CART</Button>
          </Link>
        </div>
      ) : (
        <div className="mainContainer">
          <div className= "itemImg" > <img className="imgDetail" src= {img}  alt="itemImg"/> 
          </div>


          <div className="containerDetail"> 
    <Typography>

          <p>{details}</p>
          <h2>{name}</h2>
          <h2> $ {price} </h2>
          <h2> {color}</h2>
          <h2>Talle: {size}</h2>
          </Typography>
          </div>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
      )}
    </>
  );
};

export default ItemDetail;
