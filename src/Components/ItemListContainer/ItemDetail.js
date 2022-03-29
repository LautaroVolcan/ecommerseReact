import ItemCount from "../ItemListContainer/ItemList/Item/ItemCount";
import { useState, useEffect } from "react";


const ItemDetail = () => {

    const mockItem = [
        {
          id: 1,
          name: "BlackSox",
          price: 20,
          color: "Black",
          details: "loremipsum",
          size: "L",
        },
    ];
    const [itemDetail, setItemDetail] = useState([]);

    const getItem = () => {
      return new Promise((resolve, reject) => {
        return setTimeout(() => {
          resolve(mockItem);
        }, 2000);
      });
    };
  
    useEffect(() => {
      getItem().then((dataItem) => {
        setItemDetail(dataItem);
      });
    }, []);

   
    const onAdd = (count) => {
        alert(`Se agregaron ${count} objetos al carrito`);
      };
    
    return(
           <div>
            {/* Imagen Carousel component */}

           

            {itemDetail.map((item) => {
                const {id, name, price, color, size, details} = item;
                return (
                  <div>
                    <h2> {id} </h2>
                    <p>{details}</p>
                    <h2> {name}</h2>
                    <h2> $ {price} </h2>
                    <h2>  {color}</h2>
                    <h2>{size}</h2>
                  </div>
                );
              })}

           
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
               
            
           
     
                </div>
             
    )
}

export default ItemDetail;