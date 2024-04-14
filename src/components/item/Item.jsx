
import { Link } from "react-router-dom"
import React from "react"

const Item = ({producto}) => {

    return(
        <div className="card">
            <img src={producto.imagen} className="card-img-top" alt={producto.name}/>
                <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <p>${producto.price}</p>
                    <p className="card-text">{producto.resume}</p>
                    <Link to={`/item/${producto.id}`} className="buttons">Ver mas</Link>
                    
                </div>
        </div>
    )
}

export default Item