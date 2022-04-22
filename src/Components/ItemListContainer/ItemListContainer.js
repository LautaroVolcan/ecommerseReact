import { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList.js';
import db from '../../firebase.js';
import { collection, getDocs } from "firebase/firestore";
import '../ItemListContainer/item-list-container.css'

const ItemListContainer = () => {

    const [products, setdataProd] = useState([]);
    const [mainListLoader, setMainListLoader] = useState(true)

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
      setMainListLoader(false);
    });
  }, []);


    
    return(
      <>
      { mainListLoader ? (
        <h1>Loading</h1>
      ) : (

     
        <ItemList key={products.id} prodListData = {products} />
      

    )}
    </>
    )
}
export default ItemListContainer;

