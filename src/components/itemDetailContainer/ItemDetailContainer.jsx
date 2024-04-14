
import { useEffect, useState } from "react"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { collection, doc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { getDoc } from "firebase/firestore"
import Cargador from "../loader/Cargador"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(false)
    const [validateItem, setValidateItem] = useState(false)

    const {itemId} = useParams()
    // console.log(itemId);


        useEffect(()=>{
            setCargando(true)
            const collectionProd = collection(db, "productos")

            const referenciaDoc = doc(collectionProd, itemId)

            getDoc(referenciaDoc)
            .then((res)=> {
                if(res.data()){
                    setProducto({id: res.id, ...res.data()})
                }else{
                    setValidateItem(true)
                }
            }) 
            .catch((error)=> console.log(error))
            .finally(()=> setCargando(false))
    },[itemId])

    if(cargando){
        return <Cargador/>
    }
    return(
        <div className="idc">
            {validateItem ? <p>El producto no existe</p> : <ItemDetail producto={producto}/>}
        </div>
    )
}

export default ItemDetailContainer