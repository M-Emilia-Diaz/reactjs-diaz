import React, { useContext, useState } from "react";
import ItemCount from '../itemCount/ItemCount'
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({producto}) => { 
    
    const [compra, setCompra] = useState(false)

    const {addItem} = useContext(CartContext)

    const onAdd = (cantidad) => {
        addItem(producto, cantidad)

        setCompra(true)
    }
        
    
    return(
        <div className="idetail">
            <h3>Detalle de Macaron de {producto.name} </h3>
            <img style={{width: '18rem'}} alt={producto.name} src={producto.imagen}/>
            <p>{producto.description}</p>
            <p>${producto.price}</p>
            {compra && <p>Ya agregaste macaron de {producto.name} en el carrito 👌</p> }
            {producto.stock < 18 && <p>Apurate, quedan pocas unidades en stock 🏃‍♀️</p> }
            {compra 
            ? <Link to='/cart' className="confButtons"  >Ir al carrito</Link> 
            : <ItemCount stock ={producto.stock} onAdd={onAdd}/> }
            
        </div>
    )
}

export default ItemDetail