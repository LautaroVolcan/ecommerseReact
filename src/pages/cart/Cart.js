import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import Button from '@mui/material/Button';



const Cart = () => {
  const { cartList, deleteOne, emptyCart, addTotal } = useCartContext()

  return(

      <div>
          
          <h1 className="text-center mt-5">Cart</h1>
          <hr />
          
       {
          (cartList.length === 0)
          
          &&
          
          <div>
              <p>Carrito Vacio</p>
              <Link to='/'>
                  <Button>Continuar comprando</Button>
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

          <div>
              <h4> Total de la compra: {addTotal()} </h4>
              <Button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</Button>
          </div>

      }     
      
      
      </div>
  ) 
}
export default Cart;
