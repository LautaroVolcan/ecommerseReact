
import React, { useState } from "react";



const ItemCount = (prop) => {

// destructracion: stock initial y onAdd -- validacion
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

      <h1>Card</h1>
      <div className={"card"}>
        <button onClick={addProduct}>+</button>
        <button>{count}</button>
        <button onClick={removeProduct}>-</button>
        <button className="addCart" onClick={onAdd}>Agregar al carrito</button>
      </div>
    </div>
  )
}
export default ItemCount;