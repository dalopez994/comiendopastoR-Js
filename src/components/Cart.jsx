import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
const {cartItems, removeItem, clear,total} = useContext(CartContext);
const tot=total()
return (
  <>
    {cartItems.length === 0 ? (
      <>
        El carrito esta vacio!
        <Link to={"/"}>Volver</Link>
      </>
    ) : (
      <>
        {cartItems.map((element) => (
          <CartItem item={element.item} quantity={element.quantity} removeItem={removeItem} />
        ))}
        <button className="bg-red-500 p-2 " onClick={() => clear()}>
          Vaciar carrito
        </button>
        <h1>El total de la compra es de : {tot}</h1>
      </>
    )}
  </>
);
};

export default Cart;