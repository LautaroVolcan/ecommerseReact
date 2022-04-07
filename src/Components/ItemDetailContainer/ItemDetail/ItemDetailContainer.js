import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mockProducts from "../../../data/mockProducts"

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState({});
 const  {id} = useParams();
 
 console.log(id)


  const getItem = () => {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        resolve(mockProducts);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem().then((dataItem) => {
      setItemDetail(dataItem.find(item => item.id === id));
    });
  }, [id]);
  

  return (
    
          <div>
            
            <ItemDetail key={itemDetail.id} item={itemDetail}/>

          </div>
        );
      

  };


export default ItemDetailContainer;
