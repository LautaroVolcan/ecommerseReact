import React, { useState } from "react";
import Button from '@mui/material/Button';

const ItemCount = (prop) => {
  const { stock, initial, onAdd } = prop;

  const [count, setCount] = useState(initial);

  const addProduct = () => {
    if (stock > count) {
      setCount(count + 1);
    }
  };
  const removeProduct = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <>
      {stock < 1 ? (
        <h2> Sin Stock </h2>
      ) : (
        <div>
          <div className={"card"}>
            <Button onClick={addProduct}>+</Button>
            <Button>{count}</Button>
            <Button onClick={removeProduct}>-</Button>
            <Button className="addCart" onClick={() => onAdd(count)}>
              Agregar al carrito
            </Button>
            
          </div>
        </div>
      )}
    </>
  );
};

export default ItemCount;
