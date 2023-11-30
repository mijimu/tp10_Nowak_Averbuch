import React from 'react';
import { useContext } from "react";
import CreacionesContext from '../../context/Context.js';
import '../Favoritos/Favoritos.css';
import CadaCreacion from '../../components/CadaCreacion.js';

const Favoritos = () => {
    
    const { listaFavoritos, listaCreaciones, setListaFavoritos, setlistaCreaciones } = useContext(CreacionesContext);
    
    return (
        <>
            <h2>Favoritos</h2>
            <div className='containerCarritoFavs'>
                {listaCreaciones.filter(creacion => listaFavoritos.some(f => f == creacion.id)).map((c) => (
                    <CadaCreacion key={c.id} creacion={c}></CadaCreacion>
                ))}
            </div>
        </>
    );
}

export default Favoritos;
