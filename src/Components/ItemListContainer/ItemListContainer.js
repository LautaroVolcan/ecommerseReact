import { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList.js';
import db from '../../firebase.js';
import { collection, getDocs } from "firebase/firestore";
import '../ItemListContainer/item-list-container.css'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [products, setdataProd] = useState([]);
    const [mainListLoader, setMainListLoader] = useState(true)

    const { category } = useParams()

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
      category ? filterProductByCategory(dataProd, category) : setdataProd(dataProd)
    });
  }, [category]);

  const filterProductByCategory = (array , category) => {
    return array.map( (product, i) => {
        if(product.category === category) {
           return setdataProd(products => [product]);
        }
    })
}


    
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

