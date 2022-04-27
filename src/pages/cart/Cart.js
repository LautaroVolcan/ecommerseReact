import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import Button from '@mui/material/Button';
import { useState } from "react";
import db from '../../firebase'
import { addDoc, collection } from 'firebase/firestore';
import ModalCustom from '../../Components/Modal/Modal';


const Cart = () => {
  const { cartList, deleteOne, emptyCart, addTotal } = useCartContext()
  const [openModal, setOpenModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',  
    email: '',
})
const [order, setOrder] = useState(
    {
        buyer : formData,
        items: cartList.map( (cartProduct)=> {
            return {
                id: cartProduct.id,
                title: cartProduct.name,
                price: cartProduct.price,
            }
        }),
        // total: totalPrice
    }
)
const [successOrder, setSuccessOrder] = useState()

const handleSubmit = (e) => {
    e.preventDefault()
    let prevOrder = {...order,
        buyer: formData
    }
    setOrder({...order,
        buyer: formData})
    pushOrder(prevOrder)
}

const pushOrder = async (prevOrder) => {
    const orderFirebase = collection(db, 'ordenes')
    const orderDoc = await addDoc(orderFirebase, prevOrder)
    console.log("orden generada: ", orderDoc.id)
    setSuccessOrder(orderDoc.id)
    
}

const handleChange = (e) => {
    const {value, name} = e.target
    console.log("value: ", value)
    console.log("name: ", name)

    setFormData({
        ...formData,
        [name]: value
    })
}

const addOrder = () => {
    setOpenModal(true)
}
  return(

      <div>
          
          <h1 className="text-center mt-5">Cart</h1>
          <hr />
          
       {
          (cartList.length === 0)
          
          &&
          
          <div>
              <p>Your cart is empty</p>
              <Link to='/'>
                  <Button>Continue Buying</Button>
              </Link>
          </div>
          
      }    
          
      {                    
          cartList.map((prod) =>(
              <div key={ prod.id } className="row">
                  <div className="col-md-4">
                      <h2> {prod.title}</h2>
                      <p> Precio: $ {prod.price}</p>
                      <p> Cantidad: { prod.quantity}  </p>
                  </div>
                  <div className="col-md-4">
                  
                      <Button className="btn-sm btn-danger"
                              onClick={() => deleteOne(prod.id)}
                      >
                          Eliminar
                      </Button>
                  
                  </div>
              </div>
          ))
      }
          
          
      {
          (cartList.length >= 1)
          
          &&
     <>
          <div>
              <h4> Total de la compra: {addTotal()} </h4>
              <br/>
              <Button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</Button>
          </div>
           <div>
           <Button className="btn btn-danger" onClick={addOrder}>Completar compra</Button>
       </div>
       </>

      }     
      
      <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>
                
                {successOrder ? (
                    <div>
                        <h3>Orden generada correctamente</h3>
                        <p>Su numero de orden es: {successOrder}</p>
                    </div>
                ) : (
                    <>
                        <h2>FORM USUARIO</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name='name' placeholder='Nombre' 
                                onChange={handleChange} 
                                value={formData.name}
                            />
                            <input type="number" name='phone' placeholder='Telefono' 
                                onChange={handleChange} 
                                value={formData.phone}
                            />
                            <input type="mail" name='email' placeholder='mail' 
                                onChange={handleChange} 
                                value={formData.email}
                            />

                            <Button type="submit">Send</Button>
                        </form>
                    </>
                )}
                
            </ModalCustom>
      
      </div>
  ) 
}
export default Cart;
