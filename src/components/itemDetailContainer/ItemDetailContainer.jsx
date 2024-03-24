// import React from "react"
import { useEffect, useState } from "react"
import { getProducts } from "../../mock/data"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    // const [loading, setLoading] = useState(false)
    const {itemId} = useParams()
    console.log(itemId);


        useEffect(()=>{
            // setLoading(true)
            getProducts()
            .then((res)=> setProducto(res.find((item)=> item.id === itemId)))
            .catch((error)=> console.log(error))
            // .finally(()=> setLoading(false))
    },[])

    // if(loading){
    //     return <h1>Cargando detalle...</h1>
    // }
    return(
        <div className="idc">
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer