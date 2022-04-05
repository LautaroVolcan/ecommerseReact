import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import mockItem from "../../../data/mockItem";

const ItemDetailContainer = () => {
  const [itemDetail, setitemDetail] = useState({});

  const getItem = () => {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        resolve(mockItem);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem().then((dataItem) => {
      setitemDetail(dataItem);
    });
  }, []);
  console.log(itemDetail)

  return (
    
          <div>
            
            <ItemDetail key={itemDetail.id} item={itemDetail}/>
          </div>
        );
      

  };


export default ItemDetailContainer;
