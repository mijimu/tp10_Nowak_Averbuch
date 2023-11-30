import "../InfoNuestra/InfoNuestra.css";
import mijalpic from '../../assets/mijal.png';
import micapic from '../../assets/micaela.png';


const InfoNuestra = () => {


    return (
        <>
            

        <div>
            <h2>About Us</h2>
            <div className="containerInfo">
                <div className="cadaUna">
                    <img src={mijalpic} alt="Mijal" className="pics" />
                    <h3>Mijal</h3>
                    <a href='https://www.linkedin.com/in/mijal-averbuch-3bb93b2a1' ><h4>LinkedIn</h4></a>
                    
                </div>
                <div className="cadaUna">
                    <img src={micapic} alt="Micaela" className="pics" />
                    <h3>Micaela</h3>
                    <a href='https://www.linkedin.com/in/micaela-nowak-a06311276/' ><h4>LinkedIn</h4></a>
                    
                </div>
                
            </div><p>Estudiantes del último año de secundaria en Ort Argentina de la especialidad Informática.</p>
        </div>

        </>
    );
}

export default InfoNuestra;

