import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
const { removeItem, clear,total,addItem} = useContext(CartContext);
const [totalPrice, setTotalPrice] = useState(0);
const { cartItems, sendOrder } = useContext(CartContext);
const handleSubmit = (e) => {
  e.preventDefault();
  const inputs = document.getElementsByTagName("input");
  console.log(inputs[0]);
  const data = Array.from(inputs).map((input) => input.value);
  sendOrder(totalPrice, { nombre: data[0], direccion: data[1], telefono: data[2] });
};
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
          <CartItem item={element.item} quantity={element.quantity} removeItem={removeItem} addItem={addItem}/>
        ))}
        <button className="btn btn-dark" onClick={() => clear()}>
          Vaciar carrito
        </button>
        <h1>El total de la compra es de : {tot}</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre"/>
        <input type="direccion" placeholder="Dirección"/>
        <input type="tel" placeholder="Teléfono"/>
        <button 
          type="submit"
          className="btn btn-success"
        >
          Preparar pedido 🙌  
        </button>
      </form>
      </>
    )}
  </>
);
};

export default Cart;


