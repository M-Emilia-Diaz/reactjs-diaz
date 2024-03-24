
import React from "react";
import { useState, useEffect} from "react";
import { getProducts } from "../../mock/data";   
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({greeting}) { 
    const [productos, setProductos]=useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()
      
    
useEffect(() => { 
            setLoading(true)
           getProducts()
           .then((res) => {
            if(categoryId){
                setProductos(res.filter((prod)=> prod.category === categoryId))
            }else{
                setProductos(res)
            }
           })
           .catch((error) => console.log(error, 'hubo un error'))
           .finally(()=> setLoading(false))
        }, [categoryId])
        // console.log(productos);
        if(loading){
            return <h1>Cargando...</h1>
        }


    return(
        <div className="ilc">
            {categoryId 
            ? <h1> {greeting} <span className="catcolor">{categoryId}</span> </h1> 
            : <h1> {greeting} </h1>
            }
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer