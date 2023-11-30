import "../Home/Home.css";
import Footer from "../../components/Footer.js";

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CadaCreacion from "../../components/CadaCreacion";
import'./Home.css';
import CreacionesContext from "../../context/Context";

const Home = () => {
  const { listaFavoritos, listaCreaciones, setListaFavoritos, setlistaCreaciones } = useContext(CreacionesContext);
  
  useEffect(() => {
    axios.get('/Creaciones.json')
      .then(response => {
        setlistaCreaciones(response.data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, []);

  const creacionDestacada = listaCreaciones.find(creacion => creacion.id === 3);

  return (
    <div>
        <div className="cardDestacada">
          <p className="pDestacada">Creación destacada del segundo cuatrimestre:</p>
          {creacionDestacada && <CadaCreacion key={creacionDestacada.id} creacion={creacionDestacada} />}
        </div>
        <div className='foot'>
            <Footer></Footer>
        </div>
    </div>
  );
};

export default Home;
