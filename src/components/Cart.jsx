import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.price);
    });
    setTotalPrice(total);
  }, [cartItems]);
  return (
    <>
      <ul>
        {cartItems.map((item) => (
          <>
          <div style={{display: "flex"}}>
          <img src={item.pictureUrl} style={{width:100}} />      
          <div  >
            <h2>{item.title}</h2>
            <h5>${item.price}</h5>
            </div>
            </div>
          </>
        ))}
      </ul>
      <h1 className="bg-primary">{`Total de tu compra $${totalPrice}`}</h1>
    </>
  );
};

export default Cart;