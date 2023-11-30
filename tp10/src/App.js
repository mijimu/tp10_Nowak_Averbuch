import './App.css';
import Home from "./screens/Home/Home";
import MisCreaciones from "./screens/MisCreaciones/MisCreaciones";
import Favoritos from "./screens/Favoritos/Favoritos";
import InfoNuestra from "./screens/InfoNuestra/InfoNuestra";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './screens/Layout/Layout';
import { useEffect, useState } from 'react';
import CreacionesContext from './context/Context';
import axios from 'axios';

function App() {
  const [listaFavoritos, setListaFavoritos] = useState(JSON.parse(localStorage.getItem('listaCreaciones')) ||[]);
  const [listaCreaciones, setlistaCreaciones] = useState([]);

  useEffect(() => {
    axios.get('/Creaciones.json')
      .then(response => {
        setlistaCreaciones(response.data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, []);

  return (
    <div className="App">
      <CreacionesContext.Provider value={{ listaFavoritos, listaCreaciones, setListaFavoritos, setlistaCreaciones }}>
        <BrowserRouter>
          <>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route path='/Home' index element={<Home></Home>}></Route>
                <Route path='/InfoNuestra' element={<InfoNuestra></InfoNuestra>}></Route>
                <Route path='/Favoritos' element={<Favoritos /*listaCreaciones={creaciones} listaFavoritos={favoritos} sendDeleted={deleteFromFavs}*/></Favoritos>}></Route>
                <Route path='/MisCreaciones' element={<MisCreaciones /*listaFavoritos={favoritos} setFavoritos={setFavoritos}*/></MisCreaciones>}></Route>
                <Route path="*" element={<h1>404</h1>}></Route>
              </Route>
            </Routes>
          </>
        </BrowserRouter>
      </CreacionesContext.Provider>
    </div>
  );
}
export default App;
