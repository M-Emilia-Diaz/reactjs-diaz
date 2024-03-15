import React from "react"
import { useEffect, useState } from "react"
import { getOneProduct, getProducts } from "../../mock/data"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()
    console.log(itemId);


        useEffect(()=>{
            setLoading(true)
            getProducts(itemId)
            .then((res)=> setProducto(res.find((item)=> item.id === '1')))
            .catch((error)=> console.log(error))
            .finally(()=> setLoading(false))
    },[])

    if(loading){
        return <h1>Cargando detalle...</h1>
    }
    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer