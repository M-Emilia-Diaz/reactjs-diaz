
const productos = [
    {
        id:'1',
        name:'Manzana',
        stock:10,
        price:1000,
        description:'loremloremlorem',
        imagen:'../images/macManzana.jpg',
        categoria:'nuevos sabores'
    },
    {
        id:'2',
        name:'Frutilla',
        stock:10,
        price:1000,
        description:'loremloremlorem',
        imagen:'../images/macFrutilla.jpg',
        categoria:'mas vendidos'
    },
    {
        id:'3',
        name:'Chocolate',
        stock:10,
        price:1000,
        description:'loremloremlorem',
        imagen:'../images/macChoco1.jpg',
        categoria:'clasicos'
    },
    {
        id:'4',
        name:'Limon',
        stock:10,
        price:1000,
        description:'loremloremlorem',
        imagen:'../images/macLimon.jpg',
        categoria:'clasicos'
    },
    {
        id:'5',
        name:'Naranja',
        stock:10,
        price:1000,
        description:'loremloremlorem',
        imagen:'../images/macNaranja2.jpg',
        categoria:'mas vendidos'
    }
]

//trae todos los productos
export const getProducts = () => { 
    
    return new Promise ((resolve, reject) => {
        let error = false
        setTimeout(() => {
            if (error) {
                reject('Hubo un problema, por favor intente mas tarde')
            }else {
                
                resolve(productos)
            }
        }, 2000);
    })
}

//funcion del detalle
export const getOneProduct = (id) => {
    
    return new Promise ((resolve, reject)=> {
        let error = false
        setTimeout(() => {
            if (error){
                reject('No existe ese producto')
            }else{
                let product = productos.find((item)=> item.id === id)
                resolve(product)
            }
        }, 2000);
    })
}
