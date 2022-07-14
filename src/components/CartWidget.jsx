import carrito from "../assets/img/carrito.png"

const CartWidget = () => {
    const amount = 1;
    return(
        <>
        <img 
        style={{width:80}}
        src={carrito} alt="carrito"/>
        <h2 style={{paddingRight:50}}>{amount}</h2>
        </>
    )
}

export default CartWidget;