import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";

const Item = (props) => {
  const {id, price, image, name, color} = props;

  const mockProducts = [
    {
      id: 1,
      name: "BlackSox",
      price: 20,
      color: "Black",
    },
    {
      id: 2,
      name: "GreenSox",
      price: 10,
      color: "Green",
    },
    {
      id: 3,
      name: "OrangeSox",
      price: 30,
      color: "Orange",
    },
    {
      id: 4,
      name: "BlueSox",
      price: 40,
      color: "Blue",
    },
  ];

  const [products, setdataProd] = useState([]);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        resolve(mockProducts);
      }, 3000);
    });
  };

  useEffect(() => {
    getProducts().then((dataProd) => {
      setdataProd(dataProd);
    });
  }, []);

  const onAdd = (count) => {
    alert(`Se agregaron ${count} objetos al carrito"`);
  };

  return (
    <div className="cardExp">
      <div className="imgCard">
        <img src={image} alt={id}></img>
      </div>
      <h2> {id} </h2>
      <h2> {name}</h2>
      <h2> $ {price} </h2>
      <h2> Color {color}</h2>
      {console.log("productos:", products)}
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default Item;
