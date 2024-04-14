import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartView = () => {
    const {cart, removeItem, cartTotalPrice, clear} = useContext(CartContext)
    return (
        <div className="totalCart">
            <h2>Tu Carrito</h2>
            <div>
                {cart.map((compra)=> {
                    return (
                        <div key={compra.id} className="cart">
                            <img src={compra.imagen} alt={compra.name} className="cartImg" />
                            <span>{compra.name}</span>
                            <span>{compra.quantity}</span>
                            <span>{compra.price}</span>
                            <span>Total: ${compra.price * compra.quantity}</span>
                            <button className="buttons" onClick={()=> removeItem(compra.id)}>X</button>
                        </div>
                    )
                })}
            </div>
            <p>Total a pagar ${cartTotalPrice()}</p>
            <div className="totalCartButtons">
                <button className="confButtons" onClick={clear}>Vaciar Carrito</button>
                <Link className="confButtons" to='/checkout'>Finalizar Compra</Link>
            </div>
        </div>
    )
}
export default CartView