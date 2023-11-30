import React from 'react';
import  '../components/Styles.css';
const CadaCreacion = ({ creacion,onClick }) => {
// componente para mostrar card de cada creacion
    return (
        <div className='containerCreaciones'>
            <div className="card">
                <h3 className='nombreCreac'>{creacion.title}</h3>
                <p>{creacion.description}</p>
                <p>Materia: {creacion.subject}</p>
                <p>Fecha: {creacion.date}</p>
                <a href={creacion.url}><button className='btn'>Link</button></a><br></br><br></br>
                <button onClick={onClick} className='btn'>Agregar a favoritos</button>  
            </div>
        </div>
    );
};

export default CadaCreacion;
