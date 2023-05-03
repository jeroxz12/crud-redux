import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';
function App() {
  return (<div className='App'>
      <Header/>
      <div className='container mt-5'>
        <Routes>
          <Route path='/' element={<Productos/>}> </Route>
          <Route path='/productos/nuevo' element={<NuevoProducto/>}> </Route>
          <Route path='/productos/editar/:id' element={<EditarProducto/>}> </Route>
        </Routes>
      </div>
      </div>
  );
}

export default App;
