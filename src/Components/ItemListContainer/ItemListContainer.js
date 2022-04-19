import { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList.js';
import db from '../../firebase.js';
import { collection, getDocs } from "firebase/firestore";
import Container from '@mui/material/Container';
import '../ItemListContainer/item-list-container.css'

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
            <Container className='itemListCont' maxWidth="sm">
        <ItemList key={products.id} prodListData = {products} />
        </Container>
        </div>

    )
}
export default ItemListContainer;

