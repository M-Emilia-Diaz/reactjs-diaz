import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { Link } from "react-router-dom";
import Cargador from "../loader/Cargador";

const Checkout = () => {
    
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotalPrice, clear} = useContext(CartContext)
    const [loading, setLoading] = useState (false)

    const [user, setUser] = useState({})

    

    const userData = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value
            }
        )
    }


    const finalizarCompra = (e) => {
        e.preventDefault()
        if(!user.name && !user.lastName && !user.email){
            alert('Los campos son obligatorios')
        }else if (user.email !== validateEmail){
            alert('Las direcciones de mail deben coincidir')
        }else{
            setLoading(true)
            let order = {
                user, 
                items: cart,
                total: cartTotalPrice(),
                date: serverTimestamp()
            }

            const ventas = collection(db, 'orders')
            addDoc(ventas, order)

            .then((res)=> {
                cart.forEach((item)=>{
                    const docRef = doc(db, 'productos', item.id)
                    getDoc(docRef)
                    .then((dbDoc)=> {
                        updateDoc(docRef, {stock: dbDoc.data().stock - item.quantity})
                    })
                })
                setOrderId(res.id);
                clear()
            })
            .catch((error)=> console.log(error))
            .finally(()=> setLoading(false))
        }
    }
    if(loading){
        return <Cargador/>
    }

    return(
        <div className="emptyCart">
            {orderId !== ''
            ? <div className="int">
                <h3>Compra finalizada</h3>
                <h5>Tu codigo de orden es {orderId}</h5>
                <Link to='/' className="confButtons">Volver al inicio</Link>
            </div> 
            :
            <div className="form">
                <h4>Completa con tus datos</h4>
                <form className="checkout" onSubmit={finalizarCompra}>
                    <input name="name" type="text" placeholder="Ingrese su nombre" onChange={userData}/>
                    <input name="lastname" type="text" placeholder="Ingrese su apellido" onChange={userData}/>
                    <input name="phone" type="tel" placeholder="Ingrese su telefono" onChange={userData}/>
                    <input name="email" type="email" placeholder="Ingrese su email" onChange={userData}/>
                    <input name="second-email" type="email" placeholder="Repita su email" onChange={(e)=> setValidateEmail(e.target.value)}/>
                    <button type="submit" className="confButtons">Enviar</button>
                </form>
            </div>}
        </div>
    )
}

export default Checkout