import { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList.js';
import mockProducts from "../../data/mockProducts.js"

const ItemListContainer = () => {

    const [products, setdataProd] = useState([]);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        resolve(mockProducts);
        console.log(mockProducts)
      }, 3000);
    });
  };

  useEffect(() => {
    getProducts().then((dataProd) => {
      setdataProd(dataProd);
    });
  }, []);


    
    return(
          <div>
        <ItemList prodListData= {products} />
        </div>

    )
}
export default ItemListContainer;

