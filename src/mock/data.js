
// const productos = [
//     {
//         id:'1',
//         name:'Manzana',
//         stock:10,
//         price:1000,
//         resume:'Dos suaves tapas de 4,5 cm de diametro con un suave relleno de ganache de manzana',
//         description:'Sumérgete en una experiencia grandiosa con nuestro Macaron de Manzana. Delicadamente elaborado con una mezcla de sabores dulces y refrescantes, cada bocado te transporta a un jardín de manzanas en su máximo esplendor. Con una textura ligera y un relleno suave, este macaron es una delicia para los sentidos. Descubre el equilibrio perfecto entre lo dulce y lo fresco con nuestro irresistible Macaron de Manzana',
//         imagen:'../images/macManzana.jpg',
//         category:'nuevos sabores'
//     },
//     {
//         id:'2',
//         name:'Frutilla',
//         stock:10,
//         price:1000,
//         resume:'Dos suaves tapas de 4,5 cm de diametro con un suave relleno de confitura de frutilla',
//         description:'Disfruta de la frescura de la temporada con nuestro irresistible Macaron de Frutilla. Con sus tapas delicadamente crujientes y un relleno suave y exquisitamente aromatizado, cada bocado es una explosión de sabor a frutilla fresca. Sumérgete en la dulzura natural y la textura indulgente de este clásico favorito. Perfecto para cualquier ocasión, nuestro Macaron de Frutilla deleitará tus sentidos y satisfará tu antojo por lo dulce.',
//         imagen:'../images/macFrutilla.jpg',
//         category:'mas vendidos'
//     },
//     {
//         id:'3',
//         name:'Chocolate',
//         stock:10,
//         price:1000,
//         resume:'Dos suaves tapas de 4,5 cm de diametro con un suave relleno de ganache de chocolate',
//         description:'Sumérgete en el placer puro con nuestro irresistible Macaron de Chocolate. Cada mordisco es una experiencia indulgente, con su capa crujiente por fuera y su relleno suave y cremoso por dentro. El exquisito sabor del chocolate gourmet se fusiona perfectamente en este pequeño bocado de felicidad. Disfruta de un momento de felicidad con nuestro Macaron de Chocolate, simplemente irresistible para los amantes de lo dulce.',
//         imagen:'../images/macChoco1.jpg',
//         category:'clasicos'
//     },
//     {
//         id:'4',
//         name:'Limon',
//         stock:10,
//         price:1000,
//         resume:'Dos suaves tapas de 4,5 cm de diametro con un suave relleno de crema de limon',
//         description:'Delicadamente fresco y exquisitamente dulce, nuestro Macaron de Limón es una explosión de sabor en cada mordisco. Con una suave y crujiente textura, este deleite francés captura la esencia cítrica del limón en cada bocado. ¡Experimenta la alegría de la temporada con nuestro Macaron de Limón, el compañero perfecto para cualquier ocasión!',
//         imagen:'../images/macLimon.jpg',
//         category:'clasicos'
//     },
//     {
//         id:'5',
//         name:'Naranja',
//         stock:10,
//         price:1000,
//         resume:'Dos suaves tapas de 4,5 cm de diametro con un suave relleno de crema de naranja',
//         description:'Refrescante y vibrante, nuestro Macaron de Naranja es una explosión de cítricos en cada bocado. Suaves tapas y un relleno cremoso, este dulce deleita los sentidos con su equilibrio perfecto entre lo dulce y lo ácido. Disfruta de la frescura del verano en cada momento con nuestro irresistible Macaron de Naranja. Una experiencia de sabor que te transportará a un jardín de naranjos en plena floración.',
//         imagen:'../images/macNaranja2.jpg',
//         category:'mas vendidos'
//     },
//     {
//         id:'6',
//         name:'Caramelo',
//         stock:10,
//         price:1000,
//         resume:'Dos suaves tapas de 4,5 cm de diametro con un suave relleno de crema de caramelo',
//         description:'Sumérgete en un mundo de dulzura con nuestro Macaron de Caramelo. Cada mordisco es una experiencia indulgente, con su exterior crujiente que se combina perfectamente con un relleno suave y sedoso de caramelo. Deleita tus sentidos con el equilibrio perfecto entre lo dulce y lo decadente en cada bocado. Disfruta de un momento de placer puro con nuestro irresistible Macaron de Caramelo.',
//         imagen:'../images/macCaramelo.jpg',
//         category:'mas vendidos'
//     }
// ]

// //trae todos los productos
// export const getProducts = () => { 
//     let error = false
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             if (error) {
//                 reject('Hubo un problema, por favor intente mas tarde')
//             }else {                
//                 resolve(productos)
//             }
//         }, 2000);
//     })
// }

// //funcion del detalle
// export const getOneProduct = (id) => {
    
//     return new Promise ((resolve, reject)=> {
//         let error = false
//         setTimeout(() => {
//             if (error){
//                 reject('No existe ese producto')
//             }else{
//                 let product = productos.find((item)=> item.id === id)
//                 resolve(product)
//             }
//         }, 2000);
//     })
// }
