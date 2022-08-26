import React from "react";
const CartItem = ({item,quantity,removeItem})=> {
    return (
    <>

    <div className="flex" > 
    <img style={{width:200, height:180}}
                src={item.pictureUrl}
                alt="Card image cap"
              />
    {item.title} - $ {item.price} - {quantity}
    <button className="btn btn-danger" onClick={()=>removeItem(item.id)}>Eliminar</button>

    
    </div>
    
        </> 
    )
}

export default CartItem