
import React from "react";
import { useState, useEffect} from "react"; 
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import Cargador from "../loader/Cargador";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

function ItemListContainer({greeting}) { 
    const [productos, setProductos]=useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()
      
    
useEffect(() => { 
            setLoading(true)
        
        const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) :collection(db, "productos")

        getDocs(productsCollection)

           .then((res) => {
            const list = res.docs.map((product)=>{
                return{
                    id:product.id,
                    ...product.data()
                }
            })
            setProductos(list)
        })
       
           .catch((error) => console.log(error, 'hubo un error'))
           .finally(()=> setLoading(false))
        }, [categoryId])
        
        if(loading){
            return (
                <Cargador/>
            )
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