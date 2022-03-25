
import React, { useState } from "react";



const ItemCount = (prop) => {

const {stock, initial, onAdd } = prop



const [ count, setCount ] = useState(initial);

  const addProduct = () => {
      if(stock>count){
        setCount(count + 1)   
      } 

  }
  const removeProduct = () => {
      if(count>initial){
        setCount(count - 1)
      }

  }


  return (
    <div>
      <div className={"card"}>
        <button onClick={addProduct}>+</button>
        <button>{count}</button>
        <button onClick={removeProduct}>-</button>
        <button className="addCart" onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  )
}
export default ItemCount;