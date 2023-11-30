import CadaCreacion from '../../components/CadaCreacion';
import "../MisCreaciones/MisCreaciones.css";
//import favYes from './../../assets/fav.png';
//import favNo from './../../assets/emptyFav.png';
import axios from 'axios';
import Footer from "../../components/Footer.js";
import React, { useContext, useEffect, useState } from 'react';
import CreacionesContext from '../../context/Context';

const MisCreaciones = () => {

    const { listaFavoritos, listaCreaciones, setListaFavoritos, setlistaCreaciones } = useContext(CreacionesContext);
    
    
    const agregarFavorito = (creacion) => {
        const id = creacion.id.toString();

        if (listaFavoritos.includes(id)) {
            const nuevosFavoritos = listaFavoritos.filter((favorito) => favorito !== id);

            if (nuevosFavoritos.length === 0) {
                localStorage.removeItem('listaCreaciones');
            } else {
                setListaFavoritos(nuevosFavoritos);
                localStorage.setItem('listaCreaciones', JSON.stringify(nuevosFavoritos));
            }

            console.log(`chau de favoritos el ID: ${id}`);
        } else {
            const nuevosFavoritos = [...listaFavoritos, id];
            setListaFavoritos(nuevosFavoritos);
            localStorage.setItem('listaCreaciones', JSON.stringify(nuevosFavoritos));
            console.log(`Agregando a favoritos el ID: ${id}`);
        }
    };

    return (
        <>
            <div className="container">
                {listaCreaciones.map(c => (
                    <CadaCreacion className='titulo' key={c.id} creacion={c} onClick={() => agregarFavorito(c)} ></CadaCreacion>

                ))}

                <div className='foot'>
                    <Footer />
                </div>
            </div>
        </>
    );
}
export default MisCreaciones;
