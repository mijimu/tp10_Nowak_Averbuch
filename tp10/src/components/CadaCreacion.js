import React, { useContext } from 'react';
import  '../components/Styles.css';
import CreacionesContext from '../context/Context';
const CadaCreacion = ({ creacion,onClick }) => {
// componente para mostrar card de cada creacion

    const { listaFavoritos, listaCreaciones, setListaFavoritos, setlistaCreaciones } = useContext(CreacionesContext);


    return (
        <div className='containerCreaciones'>
            <div className="card">
                <h3 className='nombreCreac'>{creacion.title}</h3>
                <p>{creacion.description}</p>
                <p>Materia: {creacion.subject}</p>
                <p>Fecha: {creacion.date}</p>
                <a href={creacion.url}><button className='btn'>Link</button></a><br></br><br></br>
                <button onClick={onClick} className='btn'> { listaFavoritos.some(f => f == creacion.id) ? 'Eliminar a favoritos' : 'Agregar a favoritos' } </button>  
            </div>
        </div>
    );
};

export default CadaCreacion;
