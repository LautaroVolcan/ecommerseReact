
import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);


export function useCartContext(){return useContext(CartContext)};


export function CartContextProvider({ children }){
 
    const [cartList, setCartList] = useState([]);

function addToCart(item){
    console.log({cartList})
    
    if(isInCart(item.id)){
const prod = cartList.find((p) => p.id === item.id)
const {quantity} = prod;

prod.quantity = item.quantity + quantity;
const newCart = [...cartList]
setCartList(newCart)

    }else{
        setCartList([...cartList, item])

    }
    


}

function isInCart(id){
return cartList.some(item => item.id === id )
    
}


function emptyCart(){
setCartList([]);    
}

function deleteOne(id){
    setCartList(cartList.filter(p => p.id !== id))

    
}
function addTotal(){
    return cartList.reduce((acum, item) => acum = acum + (item.price * item.quantity), 0)

}

function quantity(){
    return cartList.reduce((acum, item) => acum += item.cantidad, 0)
}

  return (
      
           <CartContext.Provider value={{

             cartList,
             addToCart,
             emptyCart,
             deleteOne,
             addTotal,
             quantity,
           }}>
           {children}
           </CartContext.Provider>
           
  )  
  
};


