import ItemDetail from "./ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";
import RingLoader from "react-spinners/RingLoader";


const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getById() {
      try {
        const item = doc(db, "items", id);
        const response = await getDoc(item);

        //console.log(data)
        setItemDetail({ id: response.id, ...response.data() });
        setLoading(false);
      } catch (error) {
        /* Manejo de Errores */
      }
    }
    getById();
  }, [id]);


  return (
    <div>
      {loading ? (
        <RingLoader color={"#691616"} loading={loading} size={100} />
      ) : (
        <ItemDetail key={itemDetail.id} item={itemDetail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
