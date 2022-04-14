import { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList.js';
import db from '../../firebase.js';
import { collection, getDocs } from "firebase/firestore";


const ItemListContainer = () => {

    const [products, setdataProd] = useState([]);

  const getProducts = async () => {
    const ItemColection = collection(db,'items')

    const ProductosSnapshot = await getDocs(ItemColection)
    const itemList = ProductosSnapshot.docs.map((doc)=>{
      let product = doc.data()
      product.id = doc.id
      return product


    })
    
    
    return itemList
    
    
    
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

