import React from "react";
import React, {useState} from "react";


const itemCount = () => {

const [ count, setcount ] = useState(1);

  const addProduct = () => {
setcount(count +1)

  }
  const removeProduct = () => {
    setcount(count - 1)
  }


  return (
    <div>

      <h1>Card</h1>
      <div className={"card"}>
        <button onClick={addProduct}>+</button>
        <button>{count}</button>
        <button onClick={removeProduct}>-</button>
        <button className="addCart">Agregar al carrito</button>
      </div>
    </div>
  )
}
export default itemCount;