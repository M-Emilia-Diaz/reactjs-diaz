
import React from "react";

import { useState, useEffect} from "react";
import { getProducts } from "../../mock/data";   
import ItemList from "../itemList/ItemList";

function ItemListContainer({greeting}) { 
    const [productos, setProductos]=useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
      
    
useEffect(() => { 
            setLoading(true)
           getProducts()
           .then((res) => setProductos(res) )
           .catch((error) => setError(error))
           .finally(()=> setLoading(false))
        }, [])
        // console.log(productos);
        if(loading){
            return <h1>Cargando...</h1>
        }


    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer