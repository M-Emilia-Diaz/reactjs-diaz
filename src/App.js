import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js' 
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formulario from './components/form/Formulario';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';


function App() {

  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting="Bienvenidos a la mejor tienda de Macarons"/>} />
        <Route path='/categories/:categoryId' element={<ItemListContainer greeting='Categoria:'/>} />
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        <Route path='/form' element={<Formulario/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>

    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
