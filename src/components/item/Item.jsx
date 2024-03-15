import React from "react"
import { Link } from "react-router-dom"

const Item = ({producto}) => {
    //aca se hace el map
    return(
        <div className="card" style={{width: '18rem'}}>
            <img src={producto.imagen} className="card-img-top" alt={producto.name}/>
                <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <p>${producto.price}</p>
                    <p className="card-text">{producto.name}</p>
                    <Link className='btn btn-primary' to={`/item/${producto.id}`}>Ver más</Link>
                    
                </div>
        </div>
    )
}

export default Item