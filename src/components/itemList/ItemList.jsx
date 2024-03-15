import React from "react"
import Item from "../item/Item"

const ItemList = ({productos}) => {
    return(
        <div className="d-flex justify-content-between align-items-center flex-wrap">
            {productos.map((producto)=> <Item key={producto.id} producto={producto} />)}
        </div>
    )
}

export default ItemList