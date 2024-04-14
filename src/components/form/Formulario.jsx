import React, { useState } from "react";

const Formulario = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [feedback, setFeedback] = useState('')

    const capturarNombre = (e) => {
        setName(e.target.value);
    }

    const capturarEmail = (e) => {
        setEmail(e.target.value);
    }

    const capturarTelefono = (e) => {
        setPhone(e.target.value);
    }

    const capturarMensaje = (e) => {
        setMensaje(e.target.value);
    }


    const enivarDatos = (e) => {
        e.preventDefault()
        if(name === '' || email === '' || phone === ''){
            alert('No se completo el formulario')
            setFeedback('')
        }else{
            console.log(
                {
                    nombreCompleto:name,
                    correo:email,
                    telefono:phone
                }
            )
            setFeedback('Muchas gracias por completar el formulario');
            setName('');
            setEmail('');
            setPhone('');
            setMensaje('');
        }
    }

    return(
        <div className="form" >
            <h1>Formulario de Contacto</h1>
            <form className="checkout" onSubmit={enivarDatos}>
                <input type="text" placeholder="Nombre Completo" value={name} onChange={capturarNombre} />
                <input type="email" placeholder="ejemplo@ejemplo.com" value={email} onChange={capturarEmail} />
                <input type="tel" placeholder="1122334455" value={phone} onChange={capturarTelefono} />
                <input type="text" placeholder="Mensaje" value={mensaje} onChange={capturarMensaje} />
                <button type="submit" className="confButtons">Enviar</button>
            </form>
            {feedback && <p>{feedback}</p> }
            <button className="confButtons" onClick={()=> '/'}>Volver al inicio</button>
        </div>
        
       
    )
}
export default Formulario