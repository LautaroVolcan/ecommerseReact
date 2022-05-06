import { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList.js";
import db from "../../firebase.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import "../ItemListContainer/item-list-container.css";
import { useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

const ItemListContainer = () => {
  const [products, setdataProd] = useState([]);
  const [mainListLoader, setMainListLoader] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const ItemColection = !category
        ? collection(db, "items")
        : query(collection(db, "items"), where("category", "==", category));

      const ProductosSnapshot = await getDocs(ItemColection);
      const itemList = ProductosSnapshot.docs.map((doc) => {
        let product = doc.data();
        product.id = doc.id;
        return product;
      });

      setdataProd(itemList);
      setMainListLoader(false);
    };

    getProducts();
  }, [category]);

  return (
    <>
      {mainListLoader ? (
        <div>
          <RingLoader color={"#691616"} loading={mainListLoader} size={100} />
        </div>
      ) : (
        <ItemList key={products.id} prodListData={products} />
      )}
    </>
  );
};
export default ItemListContainer;
