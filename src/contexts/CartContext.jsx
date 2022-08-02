import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const addItem=(item,quantity)=>{
    const newItem =isInCart(item)
    if (newItem){
      quantity = quantity + newItem.quantity;
      setCartItems(cartItems.splice(cartItems.findIndex(e=>e.item.id === item.id),1))
    }
  setCartItems([...cartItems,{item,quantity}])
  }
  const isInCart=(item)=>{
    return cartItems.find(e=>e.item === item);
  }
  const clear=()=>{
    setCartItems([])
  }
  const removeItem=(itemId)=>{
    setCartItems(cartItems.filter((e) => e.item.id !== itemId))
  }
  return (
    <CartContext.Provider value={{ addItem,isInCart,clear,removeItem,cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;