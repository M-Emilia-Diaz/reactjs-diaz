import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js' 
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting="Bienvenidos a la mejor tienda de Macarons"/>} />
        <Route path='/categories/:categoryId' element={<ItemListContainer greeting='Categoria:'/>} />
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
